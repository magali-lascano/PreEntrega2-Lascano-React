import cart from "../assets/cart.png"

const style = {
    img: {
        height: "2rem",
        width: "auto",
    },
    span: {
        color: "white",
        paddingLeft: ".5 rem",
    },
}

export const CartWidget = () => (
    <>  
        <img src={cart} style={style.img} alt="Bag" /> <span style={style.span}>0</span>
    </>
)