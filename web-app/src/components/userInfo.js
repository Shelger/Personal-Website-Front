import React, {useState, useEffect} from 'react';
import axios from 'axios';

function UserInfo() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const apiUrl = 'http://localhost:8080/api/users';

        axios.get(apiUrl)
                .then(response => {
                    setUsers(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error("There was an error feching the user data:", error);
                    setLoading(false);
                });
    }, []);
    if (loading) return <div>Loading...</div>;
    console.log(users);

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>name: {user.preferred_name}, age: {user.age}</li>
                ))}
            </ul>
        </div>
    );
}

export default UserInfo;