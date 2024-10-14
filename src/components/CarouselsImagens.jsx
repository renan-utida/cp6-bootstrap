import Carousel from 'react-bootstrap/Carousel';

import CamisetaCarousel1 from '../assets/camiseta-marvel.png';
import ChaveiroCarousel1 from '../assets/chaveiro-dc.png';
import MiniaturaCarousel1 from '../assets/miniatura-marvel.png';
import RevistasCarousel1 from '../assets/revistas-anime.png';
import CamisetaCarousel2 from '../assets/camiseta-anime.png';
import ChaveiroCarousel2 from '../assets/chaveiro-marvel.png';
import MiniaturaCarousel2 from '../assets/miniatura-dc.png';
import RevistasCarousel2 from '../assets/revistas-marvel.png';

import './../css/geral.css'

function CarouselsImagens() {
  return (
    <Carousel className='carousel-style w-100 position-relative'>
      <Carousel.Item className="carousel-img object-fit-cover">
        <img src={CamisetaCarousel1} alt="Camisetas - Marvel" className='h-100 w-100'/>
        <Carousel.Caption className='descricao'>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-img object-fit-cover">
        <img src={ChaveiroCarousel1} alt="Chaveiros - DC Comics" className='w-100 h-100'/>
        <Carousel.Caption className='descricao'>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-img object-fit-cover">
        <img src={MiniaturaCarousel1} alt="Miniaturas Funko Pop - Marvel, Vingadores" className='w-100 h-100'/>
        <Carousel.Caption className='descricao'>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-img object-fit-cover">
        <img src={RevistasCarousel1} alt="Revistas diversos Animes" className='w-100 h-100'/>
        <Carousel.Caption className='descricao'>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-img object-fit-cover">
        <img src={CamisetaCarousel2} alt="Camisetas - Naruto" className='w-100 h-100'/>
        <Carousel.Caption className='descricao'>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-img object-fit-cover">
        <img src={ChaveiroCarousel2} alt="Chaveiros de personagens da Marvel" className='w-100 h-100'/>
        <Carousel.Caption className='descricao'>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-img object-fit-cover">
        <img src={MiniaturaCarousel2} alt="Funko Pop - Dc Comics, Liga da Justiça" className='w-100 h-100'/>
        <Carousel.Caption className='descricao'>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-img object-fit-cover">
        <img src={RevistasCarousel2} alt="Revistas - Marvel" className='w-100 h-100'/>
        <Carousel.Caption className='descricao'>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselsImagens;