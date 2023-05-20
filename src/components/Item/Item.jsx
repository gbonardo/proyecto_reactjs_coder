import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, descripcion, precio, img}) => {
  return (
    
    
    <div class="card" >
    <img src={img} class="card-img-top" alt={descripcion}/>
    <div class="card-body">
      <h5 class="card-title">{descripcion}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <Link to={`/item/${id}`} class="btn btn-primary">Ver detalles</Link>
    </div>
    </div>


  )
}

export default Item
