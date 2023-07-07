import data from "../data/producto.json";

export const ItemID = (id) => {
    return new Promise((resolve, reject) => {
        const item = data.find((el) => el.id === id)

        if (item) {
            resolve(item)
        } else {
            reject({
                error: "No se encontro el producto"
            })
        }
    })
}