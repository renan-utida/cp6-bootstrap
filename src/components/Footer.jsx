import './../index.css'

function Footer() { 
    return (
        <footer className="mw-100 text-center bg-dark text-light border-top border-danger border-5">
            <div className='container pt-4'>
                <a href="" className='text-decoration-none'>
                    <h2 className='text-danger fst-italic fw-bold'>Epic Heroe Store</h2>
                </a>
                <p className='fst-italic fs-5 text-white'>Obrigado pela sua ilustre presença aqui conosco!</p>
                <div className="py-4">
                    <h3 className='text-primary fw-bold pb-3'>Follow Us</h3>
                    <a href="#!" className="icon-hover m-1">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#!" className="icon-hover m-1">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#!" className="icon-hover m-1">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="#!" className="icon-hover m-1">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#!" className="icon-hover m-1">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#!" className="icon-hover m-1">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
                <div className='fst-italic pb-4'>
                    <h3 className='text-primary fw-bold pt-5 pb-3'>Contact Us</h3>
                    <p><strong >Phone:</strong> (11) 91234-5678</p>
                    <p><strong >Email:</strong> service@epicheroes.com</p>
                    <p><strong >Localização:</strong> Av. Paulista, 1234 - 3º andar - Bela Vista, São Paulo - SP, 00000-000</p>
                </div>
                <p className='fw-bold pb-4 fs-5 fst-italic'>@2024-Todos os direitos reservados</p>
            </div>
      </footer>
    );
}

export default Footer;