import React, { Component } from 'react'

class SignUp extends Component {

  state = { email: '', passwd: '' }

  handleChance = field => event => {
    this.setState({
      [field]: event.target.value
    })
  }

  createAccount = () => {
    this.props.createAccount(this.state.email, this.state.passwd)
  }

  render(){
    const errorMensagem = {
      'auth/email-already-in-use': 'E-mail já foi utilizado',
      'auth/weak-password': 'Senha muito fraca',
      'auth/invalid-email': 'E-mail inválido'
    }

    return (
      <div>
        <h4>Criar conta</h4>
        <input type='text' onChange={this.handleChance('email')} placeholder = 'email' />
        <input type='password' onChange={this.handleChance('passwd')} placeholder = 'senha' />
        <button type='button' onClick={this.createAccount} >Criar conta</button>
        { 
            this.props.isSignUpError && 
            <p>
              <b>Erro: </b>
              {errorMensagem[this.props.signUpError]}
            </p>   
        }
        <button onClick={() => this.props.changeScreen('login')}>Ja tenho uma conta, entrar</button>
      </div>
      
    )
  }
}

export default SignUp