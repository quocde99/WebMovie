import React from 'react'
import './style.css';
import Signup from "./signup";
import {useState} from "react";
import LoginPageClient from "./login"
export default function LoginPage() {
    const [signIn, setSignIn] = useState(true);
    // function thay đổi giao diện đăng ký đăng nhập
    const handleChangeScreen=()=>{
        setSignIn(!signIn)
    }
    if(signIn){
        return  <LoginPageClient handleChangeScreen={handleChangeScreen}/>
    }
   return <Signup handleChangeScreen={handleChangeScreen} />
}
