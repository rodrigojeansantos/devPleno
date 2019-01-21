import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Categoria extends Component {
  constructor(props){
    super(props)
    this.loadData = this.loadData.bind(this)
    this.renderProduto = this.renderProduto.bind(this)
    this.state = { id: null,  produtos: [], categoria:{} }
  }
  loadData(id){
    this.setState({id})
    this.props.loadProdutos(id)
    this.props.loadCategoria(id)
  }
  componentDidMount(){
    const id = this.props.match.params.catId
    this.loadData(id)
  }

  componentWillReceiveProps(newProps){
    if(newProps.match.params.catId !== this.state.id){
      this.loadData(newProps.match.params.catId)
    }
  }
  renderProduto(produto){
    return (
      <p className='card card-body bg-light' key={produto.id}>
        {produto.produto}
        <button onClick={()=> {
            this.props.removeProduto(produto)
              .then((res) => this.loadData(this.props.match.params.catId))
          }} 
        >Excluir</button>
        <Link to={`/produtos/editar/${produto.id}`}>Editar</Link>
      </p>
    )
  }
  render() {    
    return(
      <div>
        <h1>{ this.props.categoria && this.props.categoria.categoria} {/*this.props.match.params.catId*/}</h1>
        {this.props.produtos.length === 0 && <p className='alert alert-info'>Nenhum produto cadastrado</p>}
        <p></p>
        {this.props.produtos.map(this.renderProduto)}
      </div>
    )
  }
}

export default Categoria
