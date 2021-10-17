export type PostObject = {
    title: string
    content:string
}

interface PostProps {
    post: PostObject
}


export default function Post (props:PostProps) {
    console.log(props)
    return <div>
        <h1> {props.post.title} </h1>
        <p> {props.post.content} </p>
    </div>
}