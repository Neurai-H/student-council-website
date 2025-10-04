import {useState, useEffect} from "react";
import {signUp, signIn, logOut} from "../authFunctions";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../firebaseConfig";
import Kitty from "../kitty.png";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);

  const getErrorMessage = (code) => {
    switch (code) {
      case "auth/invalid-email":
        return "Invalid email";
      case "auth/user-not-found":
        return "No account found with this email";
      case "auth/wrong-password":
        return "Incorrect password";
      case "auth/email-already-in-use":
        return "This email is already registered";
      case "auth/weak-password":
        return "Password should be at least 6 characters";
      default:
        return "Something went wrong. Please try to refresh the page";
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      setEmail("");
      setPassword("");
    } catch (err) {
      setError(getErrorMessage(err.code));
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      setEmail("");
      setPassword("");
    } catch (err) {
      setError(getErrorMessage(err.code));
    }
  };

  const handleLogout = async () => {
    await logOut();
  };

  return (
    <div className="rounded-md w-80 flex flex-col items-center">
      <h2 className="mb-4 text-lg sm:text-base xs:text-sm font-semibold text-center break-words text-stone-600">
        {user ? `Welcome, ${user.email}` : "Sign In"}
      </h2>

      {!user && (
        <form>
          <input className="w-full p-2 mb-3 border rounded" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          <input className="w-full p-2 mb-3 border rounded" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>

          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

          <div className="flex gap-2">
            <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" >Login</button>
            <button onClick={handleRegister} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Register</button>
          </div>
        </form>
      )}

      {user && (
        
        <div className="flex flex-col items-center text-center space-y-3 w-full">
          <p className="mb-3 text-sm break-all">Logged in as: {user.email}</p>
          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"> Logout</button>
        </div>
      )}

      <img src={Kitty} alt="kitty" className="motion-preset-wiggle mx-2 mt-8"></img>
    </div>
  );
};


export default LoginForm;
