import Container from 'react-bootstrap/Container';
import Producto from "../data/producto"
// import { Link } from "react-router-dom"

export const Item = ({ producto }) => {
    return (
        <div className="producto">
            <img src={producto.foto}/>
            <div>
                <h4>{producto.nombre}</h4>
                <p>Categoria: {producto.categoria}</p>
                <p>Precio: {producto.precio}</p>
                <a className="ver-mas" href={`/item/${producto.id}`}>Ver mas</a>
            </div>
        </div>
    );
}