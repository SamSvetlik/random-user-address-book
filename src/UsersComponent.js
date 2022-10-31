import React, { useState, useEffect } from 'react'

function UsersComponent() {
    const [arrayOfUsers, setArrayOfUsers] = useState([])

    useEffect(() => {
        fetch('https://randomuser.me/api?results=25')
        .then(response => response.json())
        .then(users => {users.results.forEach((user) => {
            user.isHidden = true
        })
            setArrayOfUsers(users.results)
        })
    }, [])


    const handleClick = (index) => {
        // We cannot update state directly, so we need to create 
        // a new value for arrayOfUsers and pass it into setArrayOfUsers
        // We first make a copy by spreading the original array
       let stateCopy = [...arrayOfUsers]
       // Then we use the supplied index to access the isHidden property
       // for a specific user.
       if (stateCopy[index].isHidden === false) {
        stateCopy[index].isHidden = true
       } else stateCopy[index].isHidden = false
       // We can edit the copy directly, and then use the copy as the 
       // new value to pass into setArrayOfUsers
       setArrayOfUsers(stateCopy);
     }
     


    return (
        <div>
            <ul>
                {arrayOfUsers.map((user, index) => {
                    return (
                        <li key={index} style={{display: 'flex'}}>
                            <h2>
                                <img src={user.picture.thumbnail} alt={`${user.name.first} ${user.name.last}`} style={{width: "50px", height: "50px"}}></img>
                                {`${user.name.first} ${user.name.last}`}
                            </h2>
                            <button onClick={() => handleClick(index)}>{user.isHidden ? "Show Details" : "Hide Details"}</button>
                            <h3 style={{display: user.isHidden ? "none" : "block"}}>
                                <p>Phone: {user.phone}</p>
                                <p>Cell: {user.cell}</p>
                                <p>email: {user.email}</p>
                            </h3>
                        </li>
                    )}
                )}
            </ul>
        </div>
    )
}

export default UsersComponent