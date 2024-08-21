import { Inject, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {

    @Inject()
    private readonly userService: UserService;

    async signin(params: Prisma.UserCreateInput): Promise<Omit<User, 'password'>>{
        const user = await this.userService.user({ email: params.email });
        if(!user) throw new NotFoundException('User not found')
        const passwordMath = await bcrypt.compare(params.password, user.password);
        if(!passwordMath) throw new UnauthorizedException('Invalid credentials')

            const { password, ...result } = user
            return result;
    }

}
