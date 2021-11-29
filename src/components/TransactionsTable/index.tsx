import { useContext} from 'react'

import { TransactionsContext } from '../../TransactionsContext'
import { Container } from './style'

export function TransactionsTable(){

    const {transaction}=useContext(TransactionsContext)

   
    
    
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

                {transaction.map(transaction=>{

                  return(

                    <tr key={transaction.id}>
                    
                    <td>{transaction.title}</td>
                    <td className={transaction.type}>{new Intl.NumberFormat('pt-BR',{
                        style:'currency',
                        currency:'BRL',
                    }).format(Number(transaction.amount))
                    }</td>
                    <td>{transaction.category}</td>
                    <td>{new Intl.DateTimeFormat('pt-BR',{
                        
                    }).format(new Date(transaction.createdAt))
                    }</td>
                </tr>

                  )


                })}
                
                
            </tbody>
        </table>
        </Container>
        
    )
}