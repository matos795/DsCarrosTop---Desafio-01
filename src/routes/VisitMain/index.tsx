import Header from '../../components/Header';
import './style.css';

export default function VisitMain() {
    
    return(
        <>
            <Header />

            <main>
                <section id='visit-card-container-section' className='dct-cards-container'>
                    <h2>Venha nos visitar</h2>
                </section>

                <section id='visit-comments-container-section'  className='dct-comments-container'>
                        <h2>O que estão dizendo</h2>
                </section>
            </main>
        </>
    );
}