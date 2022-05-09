import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from './Sidebar';

function ProductDetail() {
    const { id } = useParams()
    const url = `http://localhost:3000/api/products/${id}`
    const [product, setProduct] = useState()
    const [image, setImage] = useState()
    const fetchApi = async () => {
        const response = await fetch(url);
        const responseJson = await response.json()
        const responseImg = await fetch(`http://localhost:3000${responseJson.data.imgUrl}`)
        setProduct(responseJson.data)
        setImage(responseImg)
    }

    useEffect(() => {
        console.log("Se monto el componente")
        fetchApi();
    }, []
    );
    console.log(product)
    console.log(setProduct)
    console.log(image)
    console.log(setImage)


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
                    <div className="productDetail">
                        <h1 className="titlePd">Detalle del Producto</h1>
                        {
                            product &&
                            <>
                                <p className="pD1"><b>Nombre: </b>{product.name} </p>
                                <p className="pD2"><b>Descripcion: </b>{product.description} </p>
                                <p className="pD3"><b>Precio: </b>{product.price} </p>
                                <p className="pD4"><b>Categoria: </b>{product.category.name} </p>
                                <p className="pD5"><b>Stock: </b>{product.stock} </p>
                                {<img className="pD6" src={image.url} alt="imagen del producto" />}
                            </>
                        }
                        {
                            !product && <p>No se encontro detalle del producto que estaba buscando</p>
                        }
                    </div>
                </div>
            </div >
        </>
    )
}

export default ProductDetail;