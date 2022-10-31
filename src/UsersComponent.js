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

    // I thought the assignment wanted us to use useState
    // for the toggle between showing and hinding user details.
    // But that would only toggle between a global variable,
    // not one unique to each user.

    // I did this anyway, for the sake of having something to 
    // turn in.
    
    const [isHidden, handleIsHidden] = useState(true)

    const handleClick = () => {
        let newHidden = !isHidden 
        handleIsHidden(newHidden);
      }

    // Then I thought about giving each user an isHidden variable 
    // upon fetching, and having a function to update that variable.
    // But the users array lives in state, and you can't update state directly.
    // And since useState updates the whole variable, not just an index
    // of an array or a entry in an object, I wasn't sure how to make
    // that work.


    return (
        <div>
            <ul>
                {console.log(arrayOfUsers)}
                {arrayOfUsers.map((user, index) => {
                    return (
                        <li key={index} style={{display: 'flex'}}>
                            <h2>
                                <img src={user.picture.thumbnail} alt={`${user.name.first} ${user.name.last}`} style={{width: "50px", height: "50px"}}></img>
                                {`${user.name.first} ${user.name.last}`}
                            </h2>
                            <button onClick={handleClick}>{isHidden ? "Show Details" : "Hide Details"}</button>
                            <h3 style={{display: isHidden ? "none" : "block"}}>
                                <h4>Phone: {user.phone}</h4>
                                <h4>Cell: {user.cell}</h4>
                                <h4>email: {user.email}</h4>
                            </h3>
                        </li>
                    )}
                )}
            </ul>
        </div>
    )
}

export default UsersComponent