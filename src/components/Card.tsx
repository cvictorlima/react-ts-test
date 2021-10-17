interface CardProps  {
    cart: {titulo:string, conteudo:string}
    rodape?: string
}
export default function Card(props:CardProps) {
    
    return <div>
        <p>{props.cart.titulo}</p>
        <p>rodape: {props.rodape} </p>
    </div>
}