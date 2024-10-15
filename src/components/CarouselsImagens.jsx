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
          <h3>Camisetas Marvel na Promoção</h3>
          <p>Venha conferir! Camisetas por até 50% de desconto!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-img object-fit-cover">
        <img src={ChaveiroCarousel1} alt="Chaveiros - DC Comics" className='w-100 h-100'/>
        <Carousel.Caption className='descricao'>
          <h3>Últimos Chaveiros da DC disponíveis!</h3>
          <p>Venha garantir o seu antes que acabe!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-img object-fit-cover">
        <img src={MiniaturaCarousel1} alt="Miniaturas Funko Pop - Marvel, Vingadores" className='w-100 h-100'/>
        <Carousel.Caption className='descricao'>
          <h3>Miniaturas Marvel Funko Pop com Frete Grátis!</h3>
          <p>
          Colecione todos os seus heróis favoritos! Frete grátis, não perca!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-img object-fit-cover">
        <img src={RevistasCarousel1} alt="Revistas diversos Animes" className='w-100 h-100'/>
        <Carousel.Caption className='descricao'>
          <h3>Revistas de diversos animes com Ofertas Imperdíveis!</h3>
          <p>
            Mergulhe no mundo dos Animes! Histórias emocionantes e artes incríveis em cada edição!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-img object-fit-cover">
        <img src={CamisetaCarousel2} alt="Camisetas - Naruto" className='w-100 h-100'/>
        <Carousel.Caption className='descricao'>
          <h3>Camisetas do Naruto - Apenas hoje com 30% OFF!</h3>
          <p>
            Venha aproveitar essa promoção de camisetas do Naruto para você se destacar!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-img object-fit-cover">
        <img src={ChaveiroCarousel2} alt="Chaveiros de personagens da Marvel" className='w-100 h-100'/>
        <Carousel.Caption className='descricao'>
          <h3>Chaveiros Marvel - Apenas Hoje com 30% OFF!</h3>
          <p>
          Carregue seus personagens favoritos para onde for!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-img object-fit-cover">
        <img src={MiniaturaCarousel2} alt="Funko Pop - Dc Comics, Liga da Justiça" className='w-100 h-100'/>
        <Carousel.Caption className='descricao'>
          <h3>Miniaturas DC Comics - Desconto Especial para Colecionadores!</h3>
          <p>
          Junte os maiores heróis do universo! Adquira o seu Funko Pop agora mesmo!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-img object-fit-cover">
        <img src={RevistasCarousel2} alt="Revistas - Marvel" className='w-100 h-100'/>
        <Carousel.Caption className='descricao'>
          <h3>Nova coleção de revistas da Marvel - 2024/2025</h3>
          <p>
          Venha comprar a nova coleção! Relíquias de histórias épicas que moldaram o universo Marvel!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselsImagens;