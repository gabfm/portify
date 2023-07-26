import { TProfileInfoFormValues } from "../../components/Forms/ProfileInfoForm/profileInfoFormSchema";
import { IPortfolioUser } from "../UserContext/@types";

export interface IPortfolioProviderProps {
  children: React.ReactNode;
}

export interface IProjects {
  id?: number;
  portfolioId?: number;
  name: string;
  description: string;
  repository: string;
  link?: string;
  coverUrl?: string;
}


export interface IPortfolio {
  userId: number;
  id: number;
  color: string;
  position: string;
  description: string;
  projects: IProjects[] | null;
  user?: IPortfolioUser | null;
}

export interface ICreatePortfolioData {
  userId: string;
  color: string | undefined;
  position: string | undefined;
  description: string | undefined;
}

export interface IPortfolioContext {
  portfolio: IPortfolio[];
  currentPortfolio: IPortfolio | null;
  createPortfolio: (data: ICreatePortfolioData) => Promise<void>;
  updatePortfolio: (data: TProfileInfoFormValues) => Promise<void>;
  searchPortfolio: () => Promise<void>;
  loadPortfolio: (id: string) => Promise<void>;
  portfolioTheme: string;
}