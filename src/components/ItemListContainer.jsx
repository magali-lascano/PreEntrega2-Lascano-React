import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { ItemList } from './ItemList'
import data from "../data/producto.json";

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data);
            }, 2000)            
        })

        promesa.then(result => setProductos(result))
    }, []) 

    return(
        <Container className='mt-4'>
            {productos.length === 0 ? (
            <div>Loading...</div>
            ) : (
            <ItemList productos={productos} />
            )}
        </Container>
    )
}