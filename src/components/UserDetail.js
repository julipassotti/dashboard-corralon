import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function UserDetail() {
    const { id } = useParams()
    const url = `http://localhost:3001/api/users/${id}`
    const [user, setUser] = useState()
    const fetchApi = async () => {
        const response = await fetch(url);
        const responseJson = await response.json()
        setUser(responseJson)
    }

    useEffect(() => {
        console.log("Se monto el componente")
        fetchApi();
    },
    )
    console.log(user)
    console.log(setUser)

    // useEffect( () => {
    //     console.log("Se actualizo el componente")
    //     fetchApi();
    //     }, [product]
    // )

    return (
        <>
            <h1>Datos del Usuario</h1>
            {
                user &&
                <>
                    <p><b>Nombre: </b>{user.fullName} </p>
                    <p><b>Email: </b>{user.email} </p>
                    <p><b>Direccion: </b>{user.address} </p>
                    <p><b>Celular: </b>{user.cel} </p>
                </>
            }
            {
                !user && <p>No se encontraron datos del usuario que estaba buscando</p>
            }
        </>
    )
}

export default UserDetail;