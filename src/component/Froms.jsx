import React from 'react'
import { useState } from "react";
import "../app.css";

const Froms = () => {
  const [user, setUser] = useState({
   name:"",
   email:"",
   message:"", 
   
  });
 
  let name, value;
  const gerUserData = (eve) =>{
   name = eve.target.name;
   value = eve.target.value;
 
   setUser({...user, [name]: value }); 
  };
 
  const postData = async (e) => {
   e.preventDefault();
 
   const {name, email, message} = user;
 
   if((name && email && message)){
     const res = await  fetch("https://fir-contact-bd86a-default-rtdb.firebaseio.com/Database.json ",
     {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        name,
        email,
        message,
      })
     });
    if(res){
      setUser({
        name:"",
        email:"",
        message:"",
      });
    
      alert("Form submitted")
    }
    
 
   }else{
     alert("plzz fill all data")
 
   }
 };
 
  
 
   return (
 
 
     <div>
        <form className='form' method="POST">
         <h1>Contact Form 📞</h1>
 
         <label>Name</label>
         <input placeholder='Name' type="text" name="name" value={user.name} onChange={gerUserData} />
 
         <label>Email</label>
         <input placeholder='Email' type="text" name="email" value={user.email}onChange={gerUserData} />    
 
         <label>Message</label>
         <textarea placeholder='Message' type="text" name="message" value={user.message} onChange={gerUserData}></textarea>
 
         <button type='submit' onClick={postData}>Submit</button>
       
     </form> 
     
     </div>
   )
 }
 
 export default Froms
