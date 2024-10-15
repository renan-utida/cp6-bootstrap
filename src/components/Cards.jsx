import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import CardCamiseta1 from '../assets/card-camiseta1.png'
import CardCamiseta2 from '../assets/card-camiseta2.png'
import CardCamiseta3 from '../assets/card-camiseta3.png'
import CardCamiseta4 from '../assets/card-camiseta4.png'
import CardChaveiro1 from '../assets/card-chaveiro1.png'
import CardChaveiro2 from '../assets/card-chaveiro2.png'
import CardChaveiro3 from '../assets/card-chaveiro3.png'
import CardChaveiro4 from '../assets/card-chaveiro4.png'
import CardMiniatura1 from '../assets/card-miniatura1.png'
import CardMiniatura2 from '../assets/card-miniatura2.png'
import CardMiniatura3 from '../assets/card-miniatura3.png'
import CardMiniatura4 from '../assets/card-miniatura4.png'
import CardRevista1 from '../assets/card-revista1.png'
import CardRevista2 from '../assets/card-revista2.png'
import CardRevista3 from '../assets/card-revista3.png'
import CardRevista4 from '../assets/card-revista4.png'

function Cards(){

    return(
        <section className='my-5 ps-3 mw-100 text-center'>
            <h2 className='fw-bold text-danger'>Conheça nossos produtos!</h2>
            <div>
                <h3 className='text-start pt-4 pb-3 fst-italic text-danger'>Camisetas Epic Heroes</h3>
                <div className='row mb-5'>
                    <div className='col-3'>
                        <Card className='w-auto'>
                            <img className='mt-2' src={CardCamiseta1} variant="top" alt="Card Camiseta Marvel" />
                            <Card.Body>
                                <Card.Title className='fw-bold text-primary fs-4'>Camiseta Preta Marvel</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <div className='row'>
                                    <span className='text-decoration-line-through'>R$200,00</span>
                                    <span className='text-danger fw-bold my-3'>R$169,90</span>
                                </div>
                                <Button variant="primary">Comprar</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-3'>
                        <Card className='w-auto'>
                            <img className='mt-2' src={CardCamiseta2} variant="top" alt="Card Camiseta Marvel" />
                            <Card.Body>
                                <Card.Title className='fw-bold text-primary fs-4'>Camiseta Cinza Marvel</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <div className='row'>
                                    <span className='text-decoration-line-through'>R$240,00</span>
                                    <span className='text-danger fw-bold my-3'>R$120,00</span>
                                </div>
                                <Button variant="primary">Comprar</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-3'>
                        <Card className='w-auto'>
                            <img className='mt-2' src={CardCamiseta3} variant="top" alt="Card Camiseta Naruto/anime" />
                            <Card.Body>
                                <Card.Title className='fw-bold text-primary fs-4'>Camiseta Branca Naruto</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <div className='row'>
                                    <span className='text-decoration-line-through'>R$150,00</span>
                                    <span className='text-danger fw-bold my-3'>R$120,00</span>
                                </div>
                                <Button variant="primary">Comprar</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-3'>
                        <Card className='w-auto'>
                            <img className='mt-2' src={CardCamiseta4} variant="top" alt="Card Camiseta Naruto/anime" />
                            <Card.Body>
                                <Card.Title className='fw-bold text-primary fs-4'>Camiseta Preta Naruto</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <div className='row'>
                                    <span className='text-decoration-line-through'>R$200,00</span>
                                    <span className='text-danger fw-bold my-3'>R$140,00</span>
                                </div>
                                <Button variant="primary">Comprar</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <div>
                <h3 className='text-start pt-4 pb-3 fst-italic text-danger'>Chaveiros Epic Heroes</h3>
                <div className='row mb-5'>
                    <div className='col-3'>
                        <Card className='w-auto'>
                            <img className='mt-2' src={CardChaveiro1} variant="top" alt="Card Chaveiro Marvel" />
                            <Card.Body>
                                <Card.Title className='fw-bold text-primary fs-4'>Camiseta Preta Marvel</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <div className='row'>
                                    <span className='text-decoration-line-through'>R$200,00</span>
                                    <span className='text-danger fw-bold my-3'>R$169,90</span>
                                </div>
                                <Button variant="primary">Comprar</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-3'>
                        <Card className='w-auto'>
                            <img className='mt-2' src={CardChaveiro2} variant="top" alt="Card Chaveiro Marvel" />
                            <Card.Body>
                                <Card.Title className='fw-bold text-primary fs-4'>Camiseta Cinza Marvel</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <div className='row'>
                                    <span className='text-decoration-line-through'>R$240,00</span>
                                    <span className='text-danger fw-bold my-3'>R$120,00</span>
                                </div>
                                <Button variant="primary">Comprar</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-3'>
                        <Card className='w-auto'>
                            <img className='mt-2' src={CardChaveiro3} variant="top" alt="Card Chaveiro DC - Liga da Justica" />
                            <Card.Body>
                                <Card.Title className='fw-bold text-primary fs-4'>Camiseta Branca Naruto</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <div className='row'>
                                    <span className='text-decoration-line-through'>R$150,00</span>
                                    <span className='text-danger fw-bold my-3'>R$120,00</span>
                                </div>
                                <Button variant="primary">Comprar</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-3'>
                        <Card className='w-auto'>
                            <img className='mt-2' src={CardChaveiro4} variant="top" alt="Card Chaveiro DC - Liga da Justica" />
                            <Card.Body>
                                <Card.Title className='fw-bold text-primary fs-4'>Camiseta Preta Naruto</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <div className='row'>
                                    <span className='text-decoration-line-through'>R$200,00</span>
                                    <span className='text-danger fw-bold my-3'>R$140,00</span>
                                </div>
                                <Button variant="primary">Comprar</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <div>
                <h3>Miniaturas Epic Heroes</h3>
                <div className='row'>
                    <Card style={{ width: '14rem' }}>
                        <img src={CardMiniatura1} variant="top" alt="Card Miniatura Marvel" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Comprar</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '14rem' }}>
                        <img src={CardMiniatura2} variant="top" alt="Card Miniatura Marvel - Dourada" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Comprar</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '14rem' }}>
                        <img src={CardMiniatura3} variant="top" alt="Card Miniatura DC - Liga da Justica" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Comprar</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '14rem' }}>
                        <img src={CardMiniatura4} variant="top" alt="Card Miniatura Naruto/Anime" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Comprar</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div>
                <h3>Revistas Epic Heroes</h3>
                <div className='row'>
                    <Card style={{ width: '14rem' }}>
                        <img src={CardRevista1} variant="top" alt="Card Revista Homem Aranha" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Comprar</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '14rem' }}>
                        <img src={CardRevista2} variant="top" alt="Card Revista Marvel" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Comprar</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '14rem' }}>
                        <img src={CardRevista3} variant="top" alt="Card Revista Naruto" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Comprar</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '14rem' }}>
                        <img src={CardRevista4} variant="top" alt="Card Revista DC - Liga da Justica" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Comprar</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default Cards