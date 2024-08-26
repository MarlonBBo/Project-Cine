export interface IUser{
    name?: string,
}

export interface IContext extends IUser {
    authenticate: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string, name: string) =>Promise<void>
    logout: () => void
}

export interface IAuthProvider {
    children: JSX.Element;
}