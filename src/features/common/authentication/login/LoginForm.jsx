import { useState } from "react";
import { useLogin } from "./useLogin";
import { NavLink } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import Button from "../../../../ui/Button";
import InputFloatingLabel from "../../../../ui/InputFloatingLabel";
import SpinnerMini from "../../../../ui/SpinnerMini";

function LoginForm() {
  const { login, isLogginIn } = useLogin()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return
    // Implement your login logic here
    login({ email, password }, {
      onSuccess: () => {
        // setEmail("")
        // setPassword("")
      },
      onSettled: () => setPassword("")
    })
  };
  return (
    <form className="space-y-10" onSubmit={handleSubmit}>
      <div className="space-y-6">
        <div className="rounded-md shadow-sm space-y-4">
          <InputFloatingLabel item={{ label: "email address", id: "email_address", value: email, type: "email" }} onChange={(e) => setEmail(e.target.value)} />
          <InputFloatingLabel item={{ label: "password", id: "password", value: password, type: "password" }} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div className="flex justify-start items-center flex-wrap gap-2 text-xs">
          <div className="flex items-center gap-2">
            {/* <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="text-blue-700 focus:ring-blue-600 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="text-blue-900">
              Remember me
            </label> */}
          </div>
          <p className="capitalize text-blue-700 cursor-pointer font-semibold">forget password?</p>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-4">
        <Button type="login">
          {isLogginIn ?
            <SpinnerMini />
            :
            <>
              <span>Login</span>
              <span className="text-lg"><GoArrowRight /></span>
            </>
          }
        </Button>
        <p className="text-gray-400 text-xs tracking-wide flex items-center gap-1">
          <span className="capitalize">don't have an account yet?</span>
          <NavLink to="/signup" replace={true} className="text-blue-600 font-bold">Sign up</NavLink>
        </p>
      </div>

    </form>
  )
}

export default LoginForm
