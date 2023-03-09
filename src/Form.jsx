import React from 'react'
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { useForm } from 'react-hook-form'
import "./App.css"

const Form = () => {
    const schema = yup.object().shape({
        fullName: yup.string().required("your fullName is req"),
        email: yup.string().email().required("email must be correct"),
        age: yup.number().positive().integer().min(18).required("your age must be 18+"),
        password: yup.string().min(4).max(12).required("password must be 4 character and strong"),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null, "password dont match"]).required(),
    })


    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    })

    

    const onSubmit = (data) => {
        console.log(data)
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className = "form">
        <input  type = "text" placeholder = "Full Name.." {...register("fullName")}/>
        <p>{errors.fullName?.message}</p>
         <input  type = "text" placeholder = "Email.."{...register("email")}/> 
         <p>{errors.email?.message}</p>
          <input  type = "number" placeholder = "Age.."{...register("age")}/>
          <p>{errors.age?.message}</p>
           <input  type = "password" placeholder = "Password.."{...register("password")}/>
           <p>{errors.password?.message}</p>
            <input  type = "password" placeholder = "Confirm password.."{...register("confirmPassword")}/>
            <p>{errors.password?.message}</p>
            <input type = "submit"/>
    </form>
  )
}

export default Form