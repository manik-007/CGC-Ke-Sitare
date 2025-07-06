import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Profile() {

  const navigate = useNavigate()

  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");

  function handleSignout(){
    localStorage.removeItem("email")
    localStorage.removeItem("username")
    toast.success("Signed out successfully")

    setTimeout(()=>{
      navigate("/signin")
    }, 1000)

  }

  return <>
  <div className="flex flex-col text-4xl items-center justify-center min-h-screen">
  <div>User Email: {email}</div>
  <div>Username: {username}</div>
  <button onClick={handleSignout} className=" border-2 rounded-2xl p-4 hover:cursor-pointer mt-4 bg-blue-600 text-white">Signout</button>

</div>
<ToastContainer/>
  </>;
}