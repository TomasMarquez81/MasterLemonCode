interface AppRoutes{
    private: string
    public: string;
    selectApi: string;
    list: string;
    listApiRickMorthi: string;
    detail: string;
    login: string;
}

interface LinkRoutes extends Omit<AppRoutes, "selectApi" | "login" | "detail"> {
    selectApi: string;
    login: string;
}

export const appRoutes: AppRoutes = {
    private: "/private/*",
    public: "/public/*",
    selectApi: "selectapi",
    list: "list/:company",
    listApiRickMorthi: "listapirickmorthi",
    detail: "detail/:id",
    login: "login",
}

export const linkRoutes: LinkRoutes = {
    ...appRoutes,
    selectApi:  "/private/selectapi",
    login: "/public/login"
}