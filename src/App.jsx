import './App.css'
import Counter from './Counter'
import Player from './Player'
import Todo from './Todo'

function App() {
  const players = ['cristiano Ronaldo','Sergio Ramos','Thiago Silva']

  const handleClick = () => {
    alert('Click korsi btn')
  }

  return (
    <>  
      <h1>Explore React Part-1</h1>
      <Person></Person>
      <Student grade='7' score='85'></Student>
      <Student grade='10' score='95'></Student>
      <Student></Student>
      <Device name='laptop' price= '55'></Device>
      <Device name='Mobile' price= '40'></Device>
      <Todo task='Learn React Core concept' isDone={true}></Todo>
      <Todo task='Learn Node.js Core concept' isDone={false}></Todo>
      <Todo task='Learn Tailwind Core concept' isDone={true}></Todo>

      <div className='players'>
        {
          players.map((player,idx) => <Player key={idx} player={player}></Player>)
        }
      </div>

      <h1>Explore React Part-2</h1>
      <button onClick={handleClick}>Click me</button>

      <Counter></Counter>
      
    </>
  )
}

function Person(){
  const age = 21
  return <h3 style={{backgroundColor : 'blue',color : 'white'}}>I am a person with age : {age}</h3>
}

function Student({grade=1,score=0}){
  return (
  <div className='student'>
    <h3>This is student</h3>
    <h2>class : {grade}</h2>
    <h2>Score : {score}</h2>
  </div>
  )
}

function Device(props){
  return (
    <div className='device'>
      <h3>This Device is : {props.name}</h3>
      <h3>Price : {props.price}</h3>
    </div>
  )
}

export default App
