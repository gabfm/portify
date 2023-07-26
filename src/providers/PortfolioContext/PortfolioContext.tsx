import { createContext, useState } from "react";
import { api } from "../../services/api";
import {
  ICreatePortfolioData,
  IPortfolio,
  IPortfolioContext,
  IPortfolioProviderProps,
} from "./@types";
import { TProfileInfoFormValues } from "../../components/Forms/ProfileInfoForm/profileInfoFormSchema";
import { toastError, toastSuccess } from "../../components/Toast";

export const PortfolioContext = createContext({} as IPortfolioContext);

function PortfolioProvider({ children }: IPortfolioProviderProps) {
  const [portfolio, setPortfolio] = useState<IPortfolio[]>([]);
  const [currentPortfolio, setCurrentPortfolio] = useState<IPortfolio | null>(null);
  const [portfolioTheme, setPortfolioTheme] = useState("");

  async function searchPortfolio() {
    try {
      const id = localStorage.getItem("@USERID") || "";
      const { data } = await api.get(`/portfolios?_embed=projects&userId=${id}`);
      setPortfolio(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function loadPortfolio(id: string) {
    try {
      const { data } = await api.get(`/portfolios/${id}?_embed=projects&_expand=user`);
      setCurrentPortfolio(data);
      setPortfolioTheme(`${data.color}`)
    } catch (error) {
      console.error(error);
    }
  }

  async function createPortfolio(newData: ICreatePortfolioData) {
    const token = localStorage.getItem("@TOKEN") || "";
    try {
      const {data} = await api.post(`/portfolios`, newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toastSuccess("Portfólio criado com sucesso!");
      setPortfolio([data]);
    } catch (error: any) {
      toastError(`${error.response.data.message}`);
    }
  }

  async function updatePortfolio(formData: TProfileInfoFormValues) {
    const id = portfolio[0].id;
    const token = localStorage.getItem("@TOKEN") || "";
    try {
      const {data} = await api.patch(`/portfolios/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toastSuccess("Alterações realizadas com sucesso!");
      setPortfolio([data]);
    } catch (error: any) {
      toastError(`${error.response.data.message}`);
    }
  }

  return (
    <PortfolioContext.Provider
      value={{ portfolio, updatePortfolio, createPortfolio, searchPortfolio, loadPortfolio, currentPortfolio, portfolioTheme }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export default PortfolioProvider;