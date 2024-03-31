import './App.css'

function App() {
  

  return (
    <>  
      <h1>Vite + React</h1>
      <Person></Person>
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

function Student(){
  return (
  <div className='student'>
    <h3>This is student</h3>
    <h2>Name : </h2>
    <h2>Age : </h2>
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
