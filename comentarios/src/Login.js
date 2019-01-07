import React, { Component } from 'react'

class Login extends Component {

  state = { email: '', passwd: '' }

  handleChance = field => event => {
    this.setState({
      [field]: event.target.value
    })
  }

  login = () => {
    this.props.login(this.state.email, this.state.passwd)
  }

  render(){
    const errorMensagem = {
      'auth/wrong-password': 'E-mail e/ou senha inválidos',
      'auth/user-not-found': 'Usuário não encontrado',
      'auth/invalid-email': 'E-mail inválido'
    }

    return (
      <div>
        <h4>Login</h4>
        <input type='text' onChange={this.handleChance('email')} placeholder = 'email' />
        <input type='password' onChange={this.handleChance('passwd')} placeholder = 'senha' />
        <button type='button' onClick={this.login} >Entrar</button>
        { 
            this.props.isAuthError && 
            <p>
              <b>Erro: </b>
              {errorMensagem[this.props.authError]}
            </p>
        }
        
        <button onClick={() => this.props.changeScreen('signup')}>Criar conta</button>
      </div>
      
    )
  }
}

export default Login