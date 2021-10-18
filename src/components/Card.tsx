import { PropsWithChildren } from "react";
import * as C from './Card.styles'

// também pode ser feito:
// interface CardProps {
//	title: string
// }
type CardProps = PropsWithChildren <{
	title: string
    align?: 'left' | 'center' | 'right'
}>


//export default function Card (props: PropsWithChildren<CardProps>) {
export default function Card (props: CardProps) {
    
	return <C.Wrapper align = {props.align || 'left'}> 
		<div>{props.title}</div>
		{props.children}
    </C.Wrapper>
}

//style inline:
// style = {{
//     background: 'rgba(0,0,0,.25)',
//     borderRadius: 8,
//     padding: 16,
// }}

// <div className={'Card ${props.align || center} '}>
// 			<div>{props.title}</div>
// 			{props.children}
// 	</div>