import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import {
    Card,
    CardGroup,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
} from "reactstrap"

function Products() {
    const url = 'http://localhost:3001/api/products'
    const [allProducts, setAllProducts] = useState([])
    const fetchApi = async () => {
        const response = await fetch(url);
        const responseJson = await response.json()
        setAllProducts(responseJson.products)
    }

    useEffect(() => {
        fetchApi();
    }, []
    );

    console.log(allProducts)
    console.log(setAllProducts)

    // useEffect( () => {
    //     console.log("Se actualizo el componente")
    //     fetchApi();
    //     }, [products]
    // )

    return (
        <>


            <div className="contenedor">
                <Sidebar />
                <CardGroup >
                    <div className="productContent">

                        {!allProducts ? 'cargando' : allProducts.map((todo, index) => {
                            return (
                                <React.Fragment key={todo.id}>
                                    <Card>
                                        <CardImg
                                            alt="Card image cap"
                                            src="https://picsum.photos/318/180"
                                            top
                                            width="100%"
                                        />
                                        <CardBody>
                                            <CardTitle tag="h5">
                                                <div key={index}>{todo.name}</div>
                                            </CardTitle>
                                            <CardSubtitle
                                                className="mb-2 text-muted"
                                                tag="h6"
                                            >
                                                <div key={index}>{todo.price}</div>
                                            </CardSubtitle>
                                            <CardText>
                                                <div key={index}>{todo.description}</div>
                                            </CardText>
                                            <Link to={`/products/${todo.id}`}>
                                                <Button >
                                                    Description
                                                </Button>
                                            </Link>



                                        </CardBody>
                                    </Card>
                                </React.Fragment>
                            )
                        })}




                    </div>
                </CardGroup>
            </div>

        </>
    )
}

export default Products;