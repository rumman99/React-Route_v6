import { Link, useNavigate } from "react-router-dom";

const Users = (props) => {
    const navigate= useNavigate();
    const goTo=(id)=>{
        navigate(`/users/${id}`)
    }
   
    const style={
        border:'1px solid yellow', margin:'10px', padding:'10px', width:'100%', textAlign:'left', borderRadius:'10px'
    }
    const {name, phone, id}= props.user;
    return (
        <div style={style}>
            <Link to={`users/${id}`}><h5>Name: {name}</h5>
            <h5>Phone: {phone}</h5>
            <p>ID: {id}</p></Link>
            <button onClick={()=>goTo(id)}>Click</button>
            
        </div>
    );
};

export default Users;