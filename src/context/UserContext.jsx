import {createContext, useContext, useEffect, useState} from "react"
import toast from "react-hot-toast"
import axios from "axios"
import { server } from "../main";
const UserContext=createContext();

export const UserContextProvider=({children})=>{
    const [user,setUser]=useState();
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    async function login(email,password,navigate){
        try{
            const response=await axios.post(`${server}/api/v1/users/login`,{email,password});
            localStorage.setItem("token",response.data.token);
            navigate("/");
            toast.success(response.data.message);
            window.location.reload();
        }
        catch(err){
            toast.error(err.response.data.message)
        }
    }
    async function register(firstName,lastName,phone,email,password,navigate){
        try{
            const response=await axios.post(`${server}/api/v1/users/register`,{firstName,lastName,phone,email,password});
            toast.success(response.data.message);
            localStorage.setItem("token",response.data.token);
            navigate("/login");
        }
        catch(err){
            toast.error(err.response.data.message)
        }
    }
    async function logout(){
        localStorage.removeItem("token");
        setUser([]);
        window.location.reload();

    }
    async function fetchUser(){
        try{
            const response=await axios.get(`${server}/api/v1/users/getUser`,{headers:{
                token:localStorage.getItem("token")
            }});
            setUser(response.data.user);
            // console.log(response.data.user);
        }
        catch(err){
            console.log('User token not found');
        }
    }
    useEffect(()=>{
        fetchUser();
    },[])

    return <UserContext.Provider value={{register,login,user,logout}}>
        {children}
    </UserContext.Provider>
}
export const UserData=()=>useContext(UserContext);