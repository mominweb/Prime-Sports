import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const Login = () => {

  const {login} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation() ;
  const from = location.state?.from?.pathname || "/";


  const handleLogin =async(e) =>{
        e.preventDefault();
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value; 

  try {
    await login (email,password);
    navigate (from, {replace: true});

  }
  catch (error) {
    console.error("login failed", error.message)
    alert(error.message);
  };
}
  
    return (
          <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleLogin} className="bg-white shadow-md rounded px-10 pt-8 pb-10 w-full max-w-xl">

        <h1 className="flex items-center justify-center text-xl bg-gray-200 rounded font-semibold shadow-md mb-8 ">
          Login to Your Account </h1>
  
  
  <legend className="fieldset-legend text-sm font-semibold"> Your Email</legend>
  <input name="email" type="email" className="input w-full text-lg h-12" placeholder="Email" />
  <legend className="fieldset-legend text-sm font-semibold mt-2"> Your Password</legend>
  <input name="password" type="password" className="input w-full text-lg h-12 " placeholder="password" />
  

  

  <button type="submit" className="btn btn-outline btn-accent sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl mt-4"> Login </button>


  <p className="label mt-4 pl-8">Not registered !! <Link to ='/register' className="text-xl text-red-600"> Register </Link></p>

</form>
    </div>
    );
};

export default Login;