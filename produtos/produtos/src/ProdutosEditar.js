import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class ProdutosEditar extends Component {
  constructor(props){ 
    super(props)
    this.handleNewEditProduto = this.handleNewEditProduto.bind(this)
    this.state = { redirect: '' }
  }
  componentDidMount(){
    const match = this.props.match

    this.props.readProduto(match.params.id)
      .then(res => {
        //this.setState({produto: res.data})
        this.refs.categoria.value = res.data.categoria
        this.refs.produto.value = res.data.produto
      })
  }

  handleNewEditProduto(){
    const produto = { 
      id: this.props.match.params.id,
      produto: this.refs.produto.value , 
      categoria: this.refs.categoria.value
    }
    this.props.editProduto(produto)
      .then((res) => this.setState({ redirect: `/produtos/categoria/${produto.categoria}` }))
  }

  render(){
    const { categorias } =  this.props
    if(this.state.redirect){
      return <Redirect to={this.state.redirect} />
    }
    return (
      <div>
      <h2>Editar Produto</h2>
      {<select ref='categoria'>
        {categorias
          .map((c) => <option key={c.id} value={c.id}>{c.categoria}</option> )
        }
      </select>}
      <input ref='produto' 
            className='form-control' 
            //defaultValue={this.state.produto.produto}
            placeholder='Nome do novo produto' />
      <button onClick={this.handleNewEditProduto}>Salvar</button>
    </div>
    )
  }

}
export default ProdutosEditar