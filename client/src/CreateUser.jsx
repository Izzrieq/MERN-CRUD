import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function CreateUser() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const navigate = useNavigate();

    const Submit = (e) => {
        e.preventDefault();
        console.log(name, email, age);
        axios.post('http://localhost:3003/createUser', { name, email, age })
           .then(result => {
            console.log(result)
            navigate('/')
            })
           .catch(err => console.error('Error creating user:', err));
    }

    return (
        <div>
            <div>
                <form onSubmit={Submit}>
                    <h2>Create</h2>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text" placeholder="Enter Name" className="form-control" 
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="text" placeholder="Enter Email" className="form-control" 
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="age">Age</label>
                        <input id="age" type="text" placeholder="Enter Age" className="form-control" 
                            onChange={(e) => setAge(e.target.value)} />
                    </div>
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateUser;