import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function Users() {
    const url = 'http://localhost:3000/api/users'
    const [allUsers, setAllUsers] = useState([])
    const fetchApi = async () => {
      const response = await fetch(url);
      const responseJson = await response.json()
      setAllUsers(responseJson.users)
    }
  
    useEffect( () => {
        console.log("Se monto el componente")
        fetchApi();
        }, []
    )

    console.log(allUsers)
    console.log(setAllUsers)
    return(
        <>
            <h1>Usuarios</h1>
            <ul>
                { allUsers.length === 0 && <p>No hay usuarios</p> }
                {
                    allUsers.map((user, i) => {
                        return (
                            <li key={i}>
                                <h3>{user.fullName}</h3>
                                <Link to={`/users/${ user.id }`}>Ver Detalle</Link>
                                {/* <p><b>Descripcion: </b>{product.description}</p>
                                <p><b>Precio: </b>{product.price}</p>
                                <p><b>Stock: </b>{product.stock}</p>
                                <p><b>Categoria: </b>{product.category.name}</p> */}
                            </li>
                        )
                    })
                }
            </ul>
            </>
    )
}

export default Users;