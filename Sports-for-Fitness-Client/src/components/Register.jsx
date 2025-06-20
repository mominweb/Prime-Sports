import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const Register = () => {
     
    const {register} = useContext(AuthContext);
    const navigate = useNavigate();
      

    const handleRegister = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const tel = form.tel.value;
        const password = form.password.value;
         
        register(email,password) 
        .then(result => {
            console.log(result.user);
            navigate('/products') ; // after regsiter go to this page 
        })
         .catch(error => console.error(error));



    }






    return (
        
         <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleRegister} className=" bg-white shadow-md rounded px-10 pt-8 pb-10 w-full max-w-xl">

<h1 className="flex items-center justify-center text-xl bg-gray-200 rounded font-semibold shadow-md mb-8 ">
          Create Account </h1>



  <legend className="fieldset-legend text-sm font-semibold">What is your username?</legend>
  <input name="name" type="text" className="input w-full text-lg h-12" placeholder="Type here" />
  <legend className="fieldset-legend text-sm font-semibold">What is your Email?</legend>
  <input name="email"  type="email" className="input w-full text-lg h-12" placeholder="EMail" />
  <legend className="fieldset-legend text-sm font-semibold">What is your Mobile Number?</legend>
  <input name="tel"  type="tel" className="input w-full text-lg h-12" placeholder="Mobile Number" />

  <legend className="fieldset-legend text-sm font-semibold">Set your password</legend>
  <input name="password" type="password" className="input w-full text-lg h-12 " placeholder="password" />

  <button type="submit" className="btn btn-outline btn-accent sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl mt-4">Register</button>


  <p className="label mt-4 pl-8">Already registered !! <Link to ='/login' className="text-xl text-red-600"> Login </Link></p>

</form>
    </div>
  
    

    );
};

export default Register;