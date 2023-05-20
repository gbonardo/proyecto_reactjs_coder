import './ItemDetail.css'

const ItemDetail = ({id, descripcion, precio, img}) => {
  return (
    <div className='divItem'>
        <h3>{descripcion}</h3>
        <h4>Precio: {precio}</h4>
        <h4>ID: {id}</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <img className="imagenProducto" src={img} alt={descripcion} />
    </div>
  )
}

export default ItemDetail
