import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from './Sidebar';

function UserDetail() {
    const { id } = useParams()
    const url = `http://localhost:3000/api/users/${id}`
    const [user, setUser] = useState()
    const fetchApi = async () => {
        const response = await fetch(url);
        const responseJson = await response.json()
        setUser(responseJson)
    }

    useEffect(() => {
        console.log("Se monto el componente")
        fetchApi();
    }, []
    );
    console.log(user)
    console.log(setUser)

    // useEffect( () => {
    //     console.log("Se actualizo el componente")
    //     fetchApi();
    //     }, [product]
    // )

    return (
        <>
            <div>
                <div className="contenedor">
                    <Sidebar />
                    <div className="userDetail">
                        <h1 className="titleUd">Datos del Usuario</h1>
                        {
                            user &&
                            <>
                                <div className="usItem1">
                                    <i class='bx bx-id-card'></i>
                                    <p className="uD1"><b>Nombre: </b>{user.fullName} </p>
                                </div>
                                <div className="usItem2">
                                    <i class='bx bx-envelope'></i>
                                    <p className="uD2"><b>Email: </b>{user.email} </p>
                                </div>
                                <div className="usItem3">
                                    <i class='bx bx-home'></i>
                                    <p className="uD3"><b>Direccion: </b>{user.address} </p>
                                </div>
                                <div className="usItem4">
                                    <i class='bx bxs-phone'></i>
                                    <p className="uD4"><b>Celular: </b>{user.cel} </p>
                                </div>
                            </>
                        }
                        {
                            !user && <p className="uD5">No se encontraron datos del usuario que estaba buscando</p>
                        }
                    </div>
                </div>
            </div >
        </>
    )
}

export default UserDetail;