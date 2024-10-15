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
        <section className='container my-5 ps-3 mw-100 text-center'>
            <h2 className='fw-bold text-danger'>Conheça nossos produtos!</h2>
            <div className='mw-100'>
                <h3 className='text-start pt-4 pb-3 fst-italic fw-bold'>Camisetas Epic Heroes</h3>
                <div className='row mb-5'>
                    <div className='col-3'>
                        <Card className='w-auto'>
                            <img className='mt-2' src={CardCamiseta1} variant="top" alt="Card Camiseta Marvel" />
                            <Card.Body>
                                <Card.Title className='fw-bold text-primary fs-4'>Camiseta Preta Marvel</Card.Title>
                                <Card.Text className='fst-italic'>
                                15% OFF!
                                </Card.Text>
                                <div className='row fst-italic'>
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
                                <Card.Text className='fst-italic'>
                                50% OFF!
                                </Card.Text>
                                <div className='row fst-italic'>
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
                                <Card.Text className='fst-italic'>
                                20% OFF!
                                </Card.Text>
                                <div className='row fst-italic'>
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
                                <Card.Text className='fst-italic'>
                                30% OFF!
                                </Card.Text>
                                <div className='row fst-italic'>
                                    <span className='text-decoration-line-through'>R$200,00</span>
                                    <span className='text-danger fw-bold my-3'>R$140,00</span>
                                </div>
                                <Button variant="primary">Comprar</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <div className='mw-100'>
                <h3 className='text-start pt-4 pb-3 fst-italic fw-bold'>Chaveiros Epic Heroes</h3>
                <div className='row mb-5'>
                    <div className='col-3'>
                        <Card className='w-auto'>
                            <img className='mt-2' src={CardChaveiro1} variant="top" alt="Card Chaveiro Marvel" />
                            <Card.Body>
                                <Card.Title className='fw-bold text-primary fs-4'>Chaveiros - Marvel</Card.Title>
                                <Card.Text className='fst-italic'>
                                Leve 3 pague 2
                                </Card.Text>
                                <div className='row fst-italic'>
                                    <span className='text-decoration-line-through'>R$60,00</span>
                                    <span className='text-danger fw-bold my-3'>R$39,90</span>
                                </div>
                                <Button variant="primary">Comprar</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-3'>
                        <Card className='w-auto'>
                            <img className='mt-2' src={CardChaveiro2} variant="top" alt="Card Chaveiro Marvel" />
                            <Card.Body>
                                <Card.Title className='fw-bold text-primary fs-4'>Chaveiros - Marvel</Card.Title>
                                <Card.Text className='fst-italic'>
                                Leve 2 pague 1
                                </Card.Text>
                                <div className='row fst-italic'>
                                    <span className='text-decoration-line-through'>R$60,00</span>
                                    <span className='text-danger fw-bold my-3'>R$29,90</span>
                                </div>
                                <Button variant="primary">Comprar</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-3'>
                        <Card className='w-auto'>
                            <img className='mt-2' src={CardChaveiro3} variant="top" alt="Card Chaveiro DC - Liga da Justica" />
                            <Card.Body>
                                <Card.Title className='fw-bold text-primary fs-4'>Chaveiros - DC Heroes</Card.Title>
                                <Card.Text className='fst-italic'>
                                Leve 3 pague 2
                                </Card.Text>
                                <div className='row fst-italic'>
                                    <span className='text-decoration-line-through'>R$75,00</span>
                                    <span className='text-danger fw-bold my-3'>R$49,90</span>
                                </div>
                                <Button variant="primary">Comprar</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-3'>
                        <Card className='w-auto'>
                            <img className='mt-2' src={CardChaveiro4} variant="top" alt="Card Chaveiro DC - Liga da Justica" />
                            <Card.Body>
                                <Card.Title className='fw-bold text-primary fs-4'>Chaveiros - DC Heroes</Card.Title>
                                <Card.Text className='fst-italic'>
                                Leve 4 pague 3
                                </Card.Text>
                                <div className='row fst-italic'>
                                    <span className='text-decoration-line-through'>R$80,00</span>
                                    <span className='text-danger fw-bold my-3'>R$59,90</span>
                                </div>
                                <Button variant="primary">Comprar</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <div className='mw-100'>
                <h3 className='text-start pt-4 pb-3 fst-italic fw-bold'>Miniaturas Epic Heroes</h3>
                <div className='row mb-5'>
                    <div className='col-3'>
                        <Card className='w-auto'>
                            <img className='mt-2' src={CardMiniatura1} variant="top" alt="Card Miniatura Marvel" />
                            <Card.Body>
                                <Card.Title className='fw-bold text-primary fs-4'>Miniatura Funko Pop Marvel - Normal</Card.Title>
                                <Card.Text className='fst-italic'>
                                Leve 4 pague 3
                                </Card.Text>
                                <div className='row fst-italic'>
                                    <span className='text-decoration-line-through'>R$400,00</span>
                                    <span className='text-danger fw-bold my-3'>R$299,90</span>
                                </div>
                                <Button variant="primary">Comprar</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-3'>
                        <Card className='w-auto'>
                            <img className='mt-2' src={CardMiniatura2} variant="top" alt="Card Miniatura Marvel - Dourada" />
                            <Card.Body>
                                <Card.Title className='fw-bold text-primary fs-4'>Miniatura Funko Pop Marvel - Dourado</Card.Title>
                                <Card.Text className='fst-italic'>
                                Leve 5 pague 4
                                </Card.Text>
                                <div className='row fst-italic'>
                                    <span className='text-decoration-line-through'>R$1000,00</span>
                                    <span className='text-danger fw-bold my-3'>R$799,90</span>
                                </div>
                                <Button variant="primary">Comprar</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-3'>
                        <Card className='w-auto'>
                            <img className='mt-2' src={CardMiniatura3} variant="top" alt="Card Miniatura DC - Liga da Justica" />
                            <Card.Body>
                                <Card.Title className='fw-bold text-primary fs-4'>Miniatura Funko Pop DC Heroes - Normal</Card.Title>
                                <Card.Text className='fst-italic'>
                                Leve 4 pague 3
                                </Card.Text>
                                <div className='row fst-italic'>
                                    <span className='text-decoration-line-through'>R$400,00</span>
                                    <span className='text-danger fw-bold my-3'>R$299,90</span>
                                </div>
                                <Button variant="primary">Comprar</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-3'>
                        <Card className='w-auto'>
                            <img className='mt-2' src={CardMiniatura4} variant="top" alt="Card Miniatura Naruto/Anime" />
                            <Card.Body>
                                <Card.Title className='fw-bold text-primary fs-4'>Miniatura Funko Pop Naruto - Normal</Card.Title>
                                <Card.Text className='fst-italic'>
                                30% OFF!
                                </Card.Text>
                                <div className='row fst-italic'>
                                    <span className='text-decoration-line-through'>R$100,00</span>
                                    <span className='text-danger fw-bold my-3'>R$69,90</span>
                                </div>
                                <Button variant="primary">Comprar</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <div className='mw-100'>
                <h3 className='text-start pt-4 pb-3 fst-italic fw-bold'>Revistas Epic Heroes</h3>
                <div className='row mb-5'>
                    <div className='col-3'>
                        <Card className='w-auto'>
                            <img className='mt-2 px-1' src={CardRevista1} variant="top" alt="Card Revista Homem Aranha" />
                            <Card.Body>
                                <Card.Title className='fw-bold text-primary fs-4'>2 Revistas Homem Aranha - Marvel</Card.Title>
                                <Card.Text className='fst-italic'>
                                20% OFF!
                                </Card.Text>
                                <div className='row fst-italic'>
                                    <span className='text-decoration-line-through'>R$50,00</span>
                                    <span className='text-danger fw-bold my-3'>R$39,90</span>
                                </div>
                                <Button variant="primary">Comprar</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-3'>
                        <Card className='w-auto'>
                            <img className='mt-2 px-1' src={CardRevista2} variant="top" alt="Card Revista Marvel" />
                            <Card.Body>
                                <Card.Title className='fw-bold text-primary fs-4'>2 Revistas Vingadores - Marvel</Card.Title>
                                <Card.Text className='fst-italic'>
                                30% OFF!
                                </Card.Text>
                                <div className='row fst-italic'>
                                    <span className='text-decoration-line-through'>R$80,00</span>
                                    <span className='text-danger fw-bold my-3'>R$55,90</span>
                                </div>
                                <Button variant="primary">Comprar</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-3'>
                        <Card className='w-auto'>
                            <img className='mt-2 px-1' src={CardRevista3} variant="top" alt="Card Revista Naruto" />
                            <Card.Body>
                                <Card.Title className='fw-bold text-primary fs-4'>Revistas Naruto - Versão Especial</Card.Title>
                                <Card.Text className='fst-italic'>
                                Leve 4 pague 3
                                </Card.Text>
                                <div className='row fst-italic'>
                                    <span className='text-decoration-line-through'>R$120,00</span>
                                    <span className='text-danger fw-bold my-3'>R$89,90</span>
                                </div>
                                <Button variant="primary">Comprar</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-3'>
                        <Card className='w-auto'>
                            <img className='mt-2 px-1' src={CardRevista4} variant="top" alt="Card Revista DC - Liga da Justica" />
                            <Card.Body>
                                <Card.Title className='fw-bold text-primary fs-4'>Revistas DC Comics - Versão Retro</Card.Title>
                                <Card.Text className='fst-italic'>
                                Leve 3 pague 2
                                </Card.Text>
                                <div className='row fst-italic'>
                                    <span className='text-decoration-line-through'>R$90,00</span>
                                    <span className='text-danger fw-bold my-3'>R$59,90</span>
                                </div>
                                <Button variant="primary">Comprar</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cards