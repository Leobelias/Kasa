import LogoBW from './Logo/Logo';
import './footer.scss';

function Footer(){

    return(
        <div className='Footer'>
            <div className='Logo-Footer'> 
                <LogoBW /> 
            </div>
            <div className='Text-Footer'>
            <i className="fa-regular fa-copyright" style={{ color: '#ffffff' }}></i>
            <h2>2020 Kasa. All rights reserved</h2>
            </div>
        </div>


    );
}

export default Footer