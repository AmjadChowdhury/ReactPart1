import './App.css'

function App() {
  

  return (
    <>  
      <h1>Vite + React</h1>
      <Person></Person>
      <Student grade='7' score='85'></Student>
      <Student grade='10' score='95'></Student>
      <Student></Student>
      <Device name='laptop' price= '55'></Device>
      <Device name='Mobile' price= '40'></Device>
      
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
