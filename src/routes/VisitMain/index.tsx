import Card from '../../components/Card';
import Header from '../../components/Header';
import './style.css';

export default function VisitMain() {
    
    return(
        <>
            <Header />

            <main>
                <section id='visit-card-container-section' className='dct-cards-container'>
                    <div className='dct-mb20'>
                        <h2>Venha nos visitar</h2>
                    </div>
                        <Card />
                        <Card />
                </section>

                <section id='visit-comments-container-section'  className='dct-comments-container'>
                        <h2>O que estão dizendo</h2>
                </section>
            </main>
        </>
    );
}