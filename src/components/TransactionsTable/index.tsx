import { Container } from './style'

export function TransactionsTable(){

    return(
        
        <Container>
            <table>
            <thead>
                <th>Titulo</th>
                <th>Preço</th>
                <th>Categoria</th>
                <th>Data</th>
                
            </thead>
            <tbody>
                <tr>
                    <td>Desenvolvimento de Sites</td>
                    <td className="deposit">R$ 12.000</td>
                    <td>Venda</td>
                    <td>14/11/2021</td>
                </tr>
                <tr>
                    <td>Desenvolvimento de Sites</td>
                    <td className="withDraw">R$ -12.000</td>
                    <td>Venda</td>
                    <td>14/11/2021</td>
                </tr>
                <tr>
                    <td>Desenvolvimento de Sites</td>
                    <td>R$ 12.000</td>
                    <td>Venda</td>
                    <td>14/11/2021</td>
                </tr>
                <tr>
                    <td>Desenvolvimento de Sites</td>
                    <td>R$ 12.000</td>
                    <td>Venda</td>
                    <td>14/11/2021</td>
                </tr>
            </tbody>
        </table>
        </Container>
        
    )
}