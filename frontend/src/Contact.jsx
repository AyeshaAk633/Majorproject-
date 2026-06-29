import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';

function Contact(){
    const [data , setData] = useState({
        name:"",
        email:"",
        message:""
    })

    const handleChange = (e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    async function submitContact(e){
        e.preventDefault();

        const response = await 
        fetch("http://localhost:8000/api/contact",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        });
        
        const result = await response.json();
        alert(result.message);
    }
    
    return(
        <form onSubmit={submitContact}>
            <input name="name" placeholder = "Enter your full name" value={data.name} onChange={handleChange} required />
            
            <input type="email" name="email" placeholder = "Enter your email" value={data.email} onChange={handleChange} required/>
            
            <textarea name="message" placeholder = "Message" value={data.message} onChange={handleChange} required/>

            <Button type="submit" variant="primary">Send Message</Button>
        </form>
    )
}
export default Contact;