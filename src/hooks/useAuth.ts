import useAppSelector from "./useAppSelector";

export default function useAuth() {
  return useAppSelector((state) => state.auth.isLoggedIn)
}