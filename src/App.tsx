import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Post from './components/Post';
import Sidebar from './components/Sidebar';

function App() {

  const [card, setcard ] = useState({
    titulo: 'teste',
    conteudo: 'testando',
  })

  const [post, setPost] = useState({
    title: 'Título Show',
    content: 'Conteúdo ainda mais legal. Muito Nice. Irru'
  })

  return (
    <div className="App">
      <header className="App-header">
        <Sidebar post={post} />
        <Post post={post}/>
        <Card cart={card} rodape={'rodape'}/>
        <button onClick= {()=>setPost (prevState => {return {...prevState,
          title: 'putaria'
          }})}>Profano</button>
        {/* <button onClick= {()=>setPost ({
          title: 'putaria', 
          content: 'Puta que pariu deu certo'
          })}>Profano</button> */}
      </header>
    </div>
  );
}

export default App;
