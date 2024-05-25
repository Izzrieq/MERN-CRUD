import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3003')        
        .then(result => setUsers(result.data))
        .catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3003/deleteUser/${id}`)
        .then(res => {
            console.log(res);
            setUsers(users.filter(user => user._id !== id)); // Update the state directly
        })
        .catch(err => console.log(err));
    };

    return (
        <div>
            <Link to="/create">Add</Link>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>
                                    <button onClick={() => handleDelete(user._id)} className="btn btn-danger">Delete</button>
                                    <Link to={`/update/${user._id}`}>Update</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Users;
