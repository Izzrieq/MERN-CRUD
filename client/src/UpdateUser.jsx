import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";


function UpdateUser() {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3003/getUser/'+id)        
        .then(result => {console.log(result)
            setName(result.data.name)
            setEmail(result.data.email)
            setAge(result.data.age)
        })
        .catch(err => console.log(err))
    }, [])

    const Update = (e) =>{
        e.preventDefault();
        console.log(name, email, age);
        axios.put('http://localhost:3003/updateUser/'+id, { name, email, age })
           .then(result => {
            console.log(result)
            navigate('/')
            })
           .catch(err => console.error('Error updating user:', err));
    }
    return (
        <div>
            <div>
                <form onSubmit={ Update }>
                    <h2>Update</h2>
                    <div>
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Enter Name" className="form-control"
                        value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder="Enter Email" className="form-control"
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="">Age</label>
                        <input type="text" placeholder="Enter Age" className="form-control" 
                        value={age} onChange={(e) => setAge(e.target.value)} />
                    </div>
                    <button>
                        Update
                    </button>
                </form>
            </div>
        </div>
    )
}
export default UpdateUser;