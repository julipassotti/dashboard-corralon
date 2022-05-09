import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Products() {
    const url = 'http://localhost:3001/api/products'
    const [allProducts, setAllProducts] = useState([])
    const [countProducts, setCountProducts] = useState(0)
    const fetchApi = async () => {
        const response = await fetch(url);
        const responseJson = await response.json()
        setAllProducts(responseJson.products)
        setCountProducts(responseJson.products.length)
    }

    useEffect(() => {
        console.log("Se monto el componente")
        fetchApi();
    }, []
    )

    console.log(allProducts)
    console.log(setAllProducts)

    // useEffect( () => {
    //     console.log("Se actualizo el componente")
    //     fetchApi();
    //     }, [products]
    // )

    return (
        <>
            <h2>Productos</h2>
            <ul>
                {allProducts.length === 0 && <p>No hay productos</p>}
                {
                    allProducts.map((product, i) => {
                        return (
                            <li key={i}>
                                <h3>{product.name}</h3>
                                <Link to={`/products/${product.id}`}>Ver Detalle</Link>
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

export default Products;