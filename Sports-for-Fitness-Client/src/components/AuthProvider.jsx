import { createContext, useEffect, useState } from "react"; // nicher dui line manually import korte hobe 
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";// firebase theke neya class-52-5-4
import app from "../firebase.config";  




export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState (null); {/* null pele refresh korle loading page e niye jay null => no user initially */}
    const [loading, setLoading] = useState(true);  {/* true pele ebong 
         niche false pele loading page e nibe na private route e o ei jinis ta follow korte hobe */}

    //register
const register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);

};

//login
const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);

};

//logout
 const logout = () => {
    setLoading(true);
    return signOut(auth);
 };

 // Track user
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged (auth, currentUSer => {
        setUser(currentUSer);
        setLoading(false);
    });
    return () => unsubscribe();
  },[]);

  const authInfo = {user, loading, register, login, logout};
 
 
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );






    return (
        <div>
            
        </div>
    );
};

export default AuthProvider;