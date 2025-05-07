import Card from './Card/Card.jsx'
import './CardsContainer.scss'
import data from'../../../data/data.json'

const limitedData = data.slice(0, 6);
const CardInfo = limitedData.map((item) =>{
    return <Card title={item.title} cover={item.cover}/>
});



function CardContainer(){
    return (
    <div className='Container'>
    <div className='BodyContainer'>
    <div className='CardContainer'>
     {CardInfo}
    </div>
    </div>
    </div>

);
}

export default CardContainer