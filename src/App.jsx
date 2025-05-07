import './App.css';
import Header from './layout/header/header.jsx';
import Banner from './page/home/Banner/Banner.jsx'
import Footer from './layout/footer/footer.jsx';
import CardContainer from './page/home/Cards/CardsContainer.jsx';

function App(){
    return (
        <div>
            <Header />
            <Banner />
            <CardContainer/>
            <Footer />
        </div>
    )
}

export default App
