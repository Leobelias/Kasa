import './Card.scss'
import '../../../../data/data.json'


function Card({ title,cover }){
    return(
        <div className='Card'>
            <img src={cover} alt={title}/>
            <h1>{title}</h1>
        </div>

    );
}

export default Card