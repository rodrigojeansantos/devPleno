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
        <form className="form-inline">
          <input type='text' className="form-control mr-1" onChange={this.handleChance('email')} placeholder = 'email' />
          <input type='password' className="form-control mr-1" onChange={this.handleChance('passwd')} placeholder = 'senha' />
          <button type='button' className="btn btn-primary mr-1" onClick={this.createAccount} >Criar conta</button>
          <button className="btn" onClick={() => this.props.changeScreen('login')}>Ja tenho uma conta, entrar</button>
        </form>
        { 
          this.props.isSignUpError && 
          <div className="card text-white bg-danger mt-3">
            <div className="card-header"> Erro ao criar conta</div>
            <div className="card-body">{errorMensagem[this.props.signUpError]}</div>
          </div>                              
        }
      </div>
      
    )
  }
}

export default SignUp