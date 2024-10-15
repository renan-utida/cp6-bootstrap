import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Desconto(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <section id='modal' className='mt-5 mb-5  container mw-100 text-center fst-italic'>
            <div className='m-2 p-4 bg-primary-subtle border border-primary border-4 rounded-4'>
                <h2 className='fw-bold'>Você chegou até o final da página!</h2>
                <p>Clique no botão e receba um cupom de Frete Grátis!</p>
                <Button variant="danger" onClick={handleShow}>
                    Pegar Cupom!
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title className='fw-bold text-primary'>Cupom de Desconto Epic Heroes</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Código: <strong>EpicHeroes2024@!</strong></Modal.Body>
                    <Modal.Body className='text-decoration-underline'>Obs: Cupom disponível para compras acima de R$200,00!</Modal.Body>
                    <Modal.Body>Obrigado por comprar com a gente!</Modal.Body>
                    <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Fechar
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </section>
    )
}

export default Desconto