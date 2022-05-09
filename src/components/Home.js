import React, { useState, useEffect } from "react";
import Sidebar from './Sidebar';
import "./estilos.css"


function Home() {
    const urlProducts = 'http://localhost:3000/api/products'
    const [countProducts, setCountProducts] = useState(0)
    const [categories, setCategories] = useState([])
    const [lastProduct, setLastProduct] = useState([])
    const fetchApiProducts = async () => {
        const response = await fetch(urlProducts);
        const responseJson = await response.json()
        setCountProducts(responseJson.count)
        setCategories(responseJson.countByCategory)
        setLastProduct(responseJson.products.pop())
    }

    const urlUsers = 'http://localhost:3000/api/users'
    const [countUsers, setCountUsers] = useState(0)
    const [lastUser, setLastUser] = useState([])
    const fetchApiUsers = async () => {
        const response = await fetch(urlUsers);
        const responseJson = await response.json()
        setCountUsers(responseJson.count)
        setLastUser(responseJson.users.pop())
    }

    useEffect(() => {
        console.log("Se monto el componente")
        fetchApiProducts();
        fetchApiUsers();
    }, []
    )

    return (
        <>
            <div>
                <div className="contenedor">
                    <Sidebar />
                    <div className="analiticContent">
                        <h1 className="titulo-home">CORRALON SANCHEZ</h1>
                        <section className="seccion-totales">
                            <article className="total-productos">
                                <h4>PRODUCTOS</h4>
                                <h3>{countProducts} </h3>
                            </article>
                            <article className="total-usuarios">
                                <h4>USUARIOS</h4>
                                <h3>{countUsers} </h3>
                            </article>
                            <article className="total-categorias">
                                <h4>CATEGORIAS</h4>
                                <h3>{categories.length} </h3>
                            </article>

                            <article className="total-por-categoria">
                                <h4>TOTALES POR CATEGORIA</h4>
                                {categories.length === 0 && <p>No hay categorias</p>}
                                {
                                    categories.map((category, i) => {
                                        return (
                                            <p key={i}><b> {category.name}: {category.count} </b></p>
                                        )
                                    })
                                }
                            </article>
                        </section>
                        <section className="ultimas-incorporaciones">
                            <section className="ultimo-producto">
                                <h4>ULTIMO PRODUCTO INCORPORADO</h4>
                                <h3>{lastProduct.name} </h3>
                                <p>{lastProduct.description} </p>
                                <p>{lastProduct.price} </p>
                                <p>{lastProduct.stock} </p>
                            </section>
                            <section className="ultimo-usuario">
                                <h4>ULTIMO USUARIO INCORPORADO</h4>
                                <h3>{lastUser.fullName} </h3>
                                <p>{lastUser.email} </p>
                                <p>{lastUser.address} </p>
                                <p>{lastUser.cel} </p>
                            </section>
                        </section>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Home;