import './style.css';
import computerImg from '../../assets/car.png';

export default function Card() {

    return(
        <div className='dct-card'>
            <div className='dct-card-top'>
                <img src={computerImg} alt="Computador" />
            </div>

            <div className='dct-card-bottom'>
                <p>Lorem ipsum dolor</p>
            </div>
        </div>
    );
}