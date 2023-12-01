import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Userinfo = () => {
    let {id}= useParams();
    // console.log(id);
    const [user, serUser]= useState({});
    useEffect(()=>{
        const userData= (async()=>{
            const fetch= await axios(`https://jsonplaceholder.typicode.com/users/${id}`)
            serUser(fetch.data);
        })()
    },[])
    // console.log(user);
    const {name, phone, website, email}= user;
    
    return (
        <div>
            <h2>Id is: {id}</h2>
            <h3>Name: {name}</h3>
            <h3>Phone: {phone}</h3>
            <h3>Website: {website}</h3>
            <h3>Email: {email}</h3>
            {/* <h3>Email: {bs}</h3> */}
        </div>
    );
};

export default Userinfo;