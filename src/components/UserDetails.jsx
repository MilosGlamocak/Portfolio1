import React, { useEffect, useState } from "react";
import axios from "axios";

function UserDetails({id}) {

    let [users, setUsers] = useState([])
    useEffect(() => {
        let usersPromise = axios.get('https://jsonplaceholder.typicode.com/users');

        usersPromise.then((value) => {
            setUsers(value.data)
        })
    }, [])
    
    alert(users[id])
}




export default UserDetails
