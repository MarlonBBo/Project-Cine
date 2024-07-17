

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createUser = async (data)=> {
    const user = await prisma.user.create({
        data
    })
    return user
}

const create = async (req, res)=> {
    try {
        const user = await createUser(req.body);
        res.status(200).send(user)
    }catch(e) {
        res.status(400).send(e)
    }
};

const userRoutes = app => {
    app.post("/user", create);
}

export const routes = app => {
    userRoutes(app);
}

export default routes;