import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "../cart-alt.svg";
    return (
        <div className='divCarrito position-relativa top-75 end-100'>
            <img src={imgCarrito} alt="Carrito" />
            <p>5</p>
        </div>

    )
}

export default CartWidget
