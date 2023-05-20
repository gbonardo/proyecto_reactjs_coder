import '../ItemListContainer/ItemListContainer.css';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { getProductos, getProductosPorCategoria} from '../../asyncmock';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const { idCategoria } = useParams();

    useEffect(() => {
        const seleccionarProductos = idCategoria ? getProductosPorCategoria : getProductos;

        seleccionarProductos(idCategoria)
            .then(resp => setProductos(resp))
            .catch(error => console.log(error))
    }, [idCategoria])
    
    return (
        <>
        <h2>Productos</h2>
        <ItemList productos={productos}/>
        </>
    )
}

export default ItemListContainer
