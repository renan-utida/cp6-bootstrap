import Button from 'react-bootstrap/Button';

function Destaques(){

    return(
        <section className="row mt-5 ps-3 mw-100 text-center">
            <h2 className='fw-bold text-danger'>Venha aproveitar nossas promoções!</h2>
            <div className="col-6 my-4">
                <div className='m-2 p-2 shadow-lg bg-white text-black border border-primary border-3 rounded-4'>
                    <h4 className='destaque-desc fst-italic px-3 py-2'>Camisetas de super-heróis e animes com descontos especiais para você vestir seu personagem favorito!</h4>
                    <Button variant="danger" href='#camisetas' className='my-3'>Garanta a sua!</Button>
                </div>
            </div>
            <div className="col-6 my-4">
                <div className='m-2 p-2 shadow-lg bg-secondary text-white border border-primary border-3 rounded-4'>
                    <h4 className='destaque-desc fst-italic px-3 py-2'>Garanta suas miniaturas exclusivas da Marvel e DC com descontos imperdíveis e complete sua coleção!</h4>
                    <Button variant="danger" href='#miniaturas' className='my-3'>Clique aqui!</Button>
                </div>
            </div>
            <div className="col-6 mt-2 mb-4">
                <div className='m-2 p-2 shadow-lg bg-secondary text-white border border-primary border-3 rounded-4'>
                    <h4 className='destaque-desc fst-italic px-3 py-2'>Chaveiros relacionado ao Universo Marvel, DC e Animes com até 30% OFF!</h4>
                    <Button variant="danger" href='#chaveiros' className='my-3'>Últimas unidades!</Button>
                </div>
            </div>
            <div className="col-6 mt-2 mb-4">
                <div className='m-2 p-2 shadow-lg bg-white text-black border border-primary border-3 rounded-4'>
                    <h4 className='destaque-desc fst-italic px-3 py-2'>A mais esperada pelos amantes da Marvel! Nova coleção de revistas 2024!</h4>
                    <Button variant="danger" href='#revistas' className='my-3'>Venha conferir!</Button>
                </div>
            </div>
        </section>
    )
}

export default Destaques