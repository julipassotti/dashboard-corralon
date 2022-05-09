import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Sidebar from "./Sidebar";
import { Table } from "reactstrap"

function Users() {
    const url = 'http://localhost:3000/api/users'
    const [allUsers, setAllUsers] = useState([])
    const fetchApi = async () => {
        const response = await fetch(url);
        const responseJson = await response.json()
        setAllUsers(responseJson.users)
    }

    useEffect(() => {
        console.log("Se monto el componente")
        fetchApi();
    }, []
    )

    console.log(allUsers)
    console.log(setAllUsers)
    return (
        <>
            <div>
                <div className="contenedor">
                    <Sidebar />
                    <div className="contUsers">
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>
                                        #user
                                    </th>
                                    <th>
                                        Email
                                    </th>
                                    <th>
                                        DNI
                                    </th>
                                    <th>
                                        Perfil
                                    </th>
                                </tr>
                            </thead>
                            <tbody>

                                {!allUsers ? 'cargando' : allUsers.map((user, index) => {
                                    return (
                                        <React.Fragment key={user.id}>
                                            <tr>
                                                <th scope="row" key={index.id}>
                                                    {user.id}
                                                </th>
                                                <td key={index.id}>
                                                    {user.fullName}
                                                </td>
                                                <td key={index.id}>
                                                    {user.email}
                                                </td>
                                                <td key={index.id}>
                                                    {user.dni}
                                                </td>
                                                <td >
                                                    <Link to={`/users/${user.id}`}>Ver Detalle</Link>
                                                </td>
                                            </tr>
                                        </React.Fragment>
                                    )
                                })}

                            </tbody>
                        </Table>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Users;