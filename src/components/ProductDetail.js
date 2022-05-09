import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
    const {id} = useParams()
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

    useEffect( () => {
        console.log("Se monto el componente")
        fetchApi();
        }, []
    )
    console.log(product)
    console.log(setProduct)
    console.log(image)
    console.log(setImage)
    
    
    // useEffect( () => {
    //     console.log("Se actualizo el componente")
    //     fetchApi();
    //     }, [product]
    // )

    return(
        <>
            <h1>Detalle del Producto</h1>
            {
                product && 
                    <>
                        <p><b>Nombre: </b>{product.name} </p>
                        <p><b>Descripcion: </b>{product.description} </p>
                        <p><b>Precio: </b>{product.price} </p>
                        <p><b>Categoria: </b>{product.category.name} </p>
                        <p><b>Stock: </b>{product.stock} </p>
                        {<img src={image.url} alt="imagen del producto"/>}
                    </>
            }
            {
                !product && <p>No se encontro detalle del producto que estaba buscando</p>
            }
        </>
    )
}

export default ProductDetail;