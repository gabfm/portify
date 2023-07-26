import { TloginFormValues } from "../../components/Forms/LoginForm/loginUserSchema";
import { TRegisterFormValues } from "../../components/Forms/RegisterForm/registerFormSchema";

export interface IUserProviderProps {
    children: React.ReactNode;
}

export interface IUser {
    name: string;
    email: string;
    password: string;
}

export interface IPortfolioUser {
    name: string;
    email: string;
    id?: number;
    password?: string;
}

export interface IUserContext {
    user: IUser | null;
    userLogin: (formData: TloginFormValues) => Promise<void>;
    userRegister: (data: TRegisterFormValues) => Promise<void>;
    userLogout: () => void;
    loading: boolean;
}
