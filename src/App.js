import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  useUser
} from 'reactfire';

import Auth from './Auth';

/* 

class Formulario extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  syncChanges(value,property){
    let state = {}
    state [property] = value;
    this.setState(state);
  }

   syncEmailChanges(email){
    this.setState({
      email:email
    })
  }
  
  syncPasswordChanges(password){
    this.setState({
      password:password
    })
  }
  
  submitForm = () => {
    console.log(this.state);
  }

  render (){
    return (
      <form>
        <input
          onChange={(ev)=>{ this.syncChanges(ev.target.value,'email')}} 
          type = "email" 
          placeholder = "Email"  
          value={this.state.email}/>
        <input 
          onChange={(ev)=>{ this.syncChanges(ev.target.value,'password')}}
          type = "password" 
          placeholder = "Contraseña" 
          value={this.state.password}/>
        <div>
          <input 
            onClick = {this.submitForm }
            type="submit" 
            value="iniciar Sesión" />
        </div>
      </form>
    )
  }
}


class Contador extends Component{
  constructor(props){
    super(props);

    this.state ={
      contador: 0
    }
  }

  aumentar = () =>{
    this.setState({
      contador: this.state.contador + 1
    }
  )
  }
  
  render(){
    return <div>
      <p>Contador: {this.state.contador}</p>
        <button onClick={this.aumentar}>
          Aumentar
        </button>
    </div>
  }
}

class Blog extends Component{
  constructor(props){
    super(props);
    this.state = {
      articles:[
        'Mi primer componente en React',
        'Introduccion a React',
        'Que es React'
      ]
    }
  }

  componentDidMount(){
    let promesa = fetch('https://jsonplaceholder.typicode.com/posts');

    promesa.then(response => response.json()).then(data=>{
      this.setState({
        articles:data
      })
    })
  }

  render () {
    return(
      <div>
        {
          this.state.articles.map((article)=>{
            return <p>{article.title}</p>
          })
        }
 
      </div>
    )
  }
}

 */

function App() {


  const user = useUser();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {
          user && 
          <div>
            <p>
              Hola!
            </p>
            <p>
              Iniciaste sesión con {user.email}
            </p>
          </div>
        }
        <Auth/>

      </header>
      <div>
      
      </div>

      <div>
        
      </div>
    </div>
  );
}

export default App;
