
import { createContext, useState, useEffect } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { IUserContext, IUserProviderProps, IUser } from "./@types";
import { toastError, toastSuccess } from "../../components/Toast";
import { TRegisterFormValues } from "../../components/Forms/RegisterForm/registerFormSchema";
import { TloginFormValues } from "../../components/Forms/LoginForm/loginUserSchema";
import { useForm } from "react-hook-form";

export const UserContext = createContext({} as IUserContext);

const currentPath = window.location.pathname;

function UserProvider({ children }: IUserProviderProps) {
    const [user, setUser] = useState<IUser | null>(null);
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();

    const { reset } = useForm();

    async function userLogin(formData: TloginFormValues) {
        try {
            const { data } = await api.post("/login", formData);
            localStorage.setItem("@TOKEN", data.accessToken);
            localStorage.setItem("@USERID", data.user.id);
            setUser(data.user);
            toastSuccess("Login realizado com sucesso!");
            navigate("/dashboard");
            reset()
        } catch (error) {
            console.error(error);
            toastError("E-mail ou senha inválidos");
        }
    }

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const id = localStorage.getItem("@USERID");

    const loadUser = async () => {
      try {
        setLoading(true)
        const { data } = await api.get(`/users/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setUser(data);
        navigate(currentPath);
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    };

    if (token && id) {
      loadUser();
    }
  }, [])

  function userLogout() {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    setUser(null);
    navigate("/");
    toastSuccess("Logout realizado com sucesso!");
  }

  async function userRegister(data: TRegisterFormValues) {
    try {
      await api.post("/users", data);
      toastSuccess("Conta criada com sucesso!");
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  }


    return (
        <UserContext.Provider value={{ user, userLogin, userLogout, userRegister, loading }}>
            {children}
        </UserContext.Provider>
    )

}

export default UserProvider;