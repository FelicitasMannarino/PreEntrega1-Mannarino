import './ItemCount.css';

const ItemCount = (props) => {
    return(
       <i class="bi bi-bag">{props.cantidad}</i>

    )
}

export default ItemCount