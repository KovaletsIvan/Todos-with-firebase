import { useSelector } from "react-redux";

export const useAuth = () => {
  const { email, token, id } = useSelector((state) => state.authReducer.user);
  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
};
