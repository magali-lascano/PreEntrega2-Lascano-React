import { useEffect, useState } from 'react';
import { ItemID } from './ItemPorID';
import { ItemDetail } from './ItemDetail';


export const ItemDetailContainer = ( {itemId} ) => {
        const [item, setItem] = useState(null);
        useEffect(() => {
            ItemID(itemId)
                .then((res) => {
                    setItem(res);
                })
        }, [])

    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    )
}
