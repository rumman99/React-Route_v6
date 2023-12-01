import axios from "axios";
import { useEffect, useState } from "react";
import Users from "../Users/Users";

const Home = () => {
    const [user, setUser]= useState([]);
    useEffect(()=>{
        const getData= (async()=>{
            try{
                const fetch= await axios('https://jsonplaceholder.typicode.com/users')
                setUser(fetch.data);
            }
                
            catch(error){
                console.log(error)
            }
        })()
    },[])
    // console.log(user);
    return (
        <>
        <h1>User: {user.length}</h1>
        {user.map(user => <Users key={user.id} user={user}></Users>)}
        </>
    );
};

export default Home;