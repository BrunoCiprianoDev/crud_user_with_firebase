import { useEffect, useState } from "react"
import { useAuthentication } from "../../hooks/useAuthentication"

export const useLogin = () => {

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");

   const { login, error: authError, loading } = useAuthentication();

   const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");

      const user = {
         email,
         password
      };

      const res = await login(user);
      console.log(res);
   }

   useEffect(() => {
      if (authError) {
         setError(authError);
      }
   }, [authError]);


   return {
      email,
      setEmail,
      password,
      setPassword,
      error,
      loading,
      handleSubmit
   }

}