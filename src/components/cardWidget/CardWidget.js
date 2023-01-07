
import './CardWidget.css';

const CardWidget = (props) => {
    return(
       <div>
       <i className='bi bi-bag'>{props.cantidad}</i>
       </div>

    )
}

export default CardWidget