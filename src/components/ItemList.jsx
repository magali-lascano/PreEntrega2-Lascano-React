import { Item } from './Item'

export const ItemList = ({ productos }) => 
    productos.map((prod) => <Item producto={prod} key={prod.id}>{prod.nombre}</Item> )
