import Table from 'react-bootstrap/Table';

function Tables(){

    return(
        <section id='tabelas' className='container px-4 mw-100 text-center fst-italic'>
            <h2 className='fw-bold text-danger pt-5 pb-3'>Tabela de Preços de Produtos</h2>
            <Table striped bordered hover variant="dark" className='mt-4'>
                <thead>
                    <tr>
                        <th className='text-primary'>ID</th>
                        <th className='text-primary'>Seção</th>
                        <th className='text-primary'>Modelo</th>
                        <th className='text-primary'>Quant.</th>
                        <th className='text-primary'>Preço Sem Desconto</th>
                        <th className='text-primary'>Desconto</th>
                        <th className='text-primary'>Preço Final</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>CA25</td>
                        <td>Camisetas</td>
                        <td>Marvel - Preta</td>
                        <td>1</td>
                        <td>R$ 200,00</td>
                        <td>15%</td>
                        <td>R$ 169,90</td>
                    </tr>
                    <tr>
                        <td>CA27</td>
                        <td>Camisetas</td>
                        <td>Marvel - Cinza</td>
                        <td>1</td>
                        <td>R$ 240,00</td>
                        <td>50%</td>
                        <td>R$ 120,00</td>
                    </tr>
                    <tr>
                        <td>CA29</td>
                        <td>Camisetas</td>
                        <td>Naruto - Branca</td>
                        <td>1</td>
                        <td>R$ 150,00</td>
                        <td>20%</td>
                        <td>R$ 120,00</td>
                    </tr>
                    <tr>
                        <td>CA21</td>
                        <td>Camisetas</td>
                        <td>Naruto - Preta</td>
                        <td>1</td>
                        <td>R$ 200,00</td>
                        <td>30%</td>
                        <td>R$ 140,00</td>
                    </tr>
                    <tr>
                        <td>CH14</td>
                        <td>Chaveiros</td>
                        <td>Marvel Heroes</td>
                        <td>3</td>
                        <td>R$ 60,00</td>
                        <td>Leve 3 pague 2</td>
                        <td>R$ 39,90</td>
                    </tr>
                    <tr>
                        <td>CH19</td>
                        <td>Chaveiros</td>
                        <td>Marvel Acessórios</td>
                        <td>2</td>
                        <td>R$ 60,00</td>
                        <td>Leve 2 pague 1</td>
                        <td>R$ 29,90</td>
                    </tr>
                    <tr>
                        <td>CH12</td>
                        <td>Chaveiros</td>
                        <td>DC Acessórios</td>
                        <td>3</td>
                        <td>R$ 75,00</td>
                        <td>Leve 3 pague 2</td>
                        <td>R$ 49,90</td>
                    </tr>
                    <tr>
                        <td>CH16</td>
                        <td>Chaveiros</td>
                        <td>DC Heroes</td>
                        <td>4</td>
                        <td>R$ 80,00</td>
                        <td>Leve 4 pague 3</td>
                        <td>R$ 59,90</td>
                    </tr>
                    <tr>
                        <td>MI92</td>
                        <td>Miniaturas</td>
                        <td>Marvel Heroes</td>
                        <td>4</td>
                        <td>R$ 400,00</td>
                        <td>Leve 4 pague 3</td>
                        <td>R$ 299,90</td>
                    </tr>
                    <tr>
                        <td>MI99</td>
                        <td>Miniaturas</td>
                        <td>Marvel Gold Heroes</td>
                        <td>5</td> 
                        <td>R$ 1000,00</td>
                        <td>Leve 5 pague 4</td>
                        <td>R$ 799,90</td>
                    </tr>
                    <tr>
                        <td>MI95</td>
                        <td>Miniaturas</td>
                        <td>DC Heroes</td>
                        <td>4</td>
                        <td>R$ 400,00</td>
                        <td>Leve 4 pague 3</td>
                        <td>R$ 299,90</td>
                    </tr>
                    <tr>
                        <td>MI90</td>
                        <td>Miniaturas</td>
                        <td>Naruto Originals</td>
                        <td>1</td>
                        <td>R$ 100,00</td>
                        <td>30%</td>
                        <td>R$ 69,90</td>
                    </tr>
                    <tr>
                        <td>RE58</td>
                        <td>Revistas</td>
                        <td>Homem Aranha - Marvel</td>
                        <td>2</td>
                        <td>R$ 50,00</td>
                        <td>20%</td>
                        <td>R$ 39,90</td>
                    </tr>
                    <tr>
                        <td>RE51</td>
                        <td>Revistas</td>
                        <td>Vingadores - Marvel</td>
                        <td>2</td>
                        <td>R$ 80,00</td>
                        <td>30%</td>
                        <td>R$ 55,90</td>
                    </tr>
                    <tr>
                        <td>RE53</td>
                        <td>Revistas</td>
                        <td>Anime/Naruto - Especial</td>
                        <td>4</td>
                        <td>R$ 120,00</td>
                        <td>Leve 4 pague 3</td>
                        <td>R$ 89,90</td>
                    </tr>
                    <tr>
                        <td>RE59</td>
                        <td>Revistas</td>
                        <td>DC Comics - Retro</td>
                        <td>3</td>
                        <td>R$ 90,00</td>
                        <td>Leve 3 pague 2</td>
                        <td>R$ 59,90</td>
                    </tr>
                </tbody>
            </Table>
        </section>
    )
}

export default Tables