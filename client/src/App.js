import logo from './logo.svg';
import './App.css';
// import { ComponentA as CompA } from './components/basics/ComponentA.js'
// import CompB from './components/basics/ComponentB' // It doesnt really need the file extension for 
// import CompC from './components/basics/ComponentC' // front end because webpack can figure that out 
// import CompD from './components/basics/ComponentD.js'
import Header from './components/Header/Header.js'

//PascalCase for React Components

//passing functions, variables as props
// let f = greeting => alert(greeting)
// let me='Me'

let name ="E-Commerce"

function App() {
  return (
    <div className="App-header">
      <Header heading={name}/>


      {/* <CompA className='X' greeting='Yo!!' f/> {/*parameters to (functions) functional components  }
      <CompB pronoun = {me}/>
      <CompB pronoun = 'You'/>
      <CompB pronoun = 'US'>{/*parent}
      <h1>Hola!!</h1> {/*children }
      </CompB>
      <CompC greeting='Como Estas!!' greetingFunc={f}/>
      <CompD x='2'/> */}
    </div>
  );
}

export default App;