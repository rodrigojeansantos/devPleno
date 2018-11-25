import React, { Component } from 'react'

class NewComment extends Component{
    
    state = {
        newComment: ''
    }
    
    handleChance = event => {
        //Component da tela que estou manipulando
        this.setState({
          newComment: event.target.value
        })
      }

    sendComment = () => {
        //Mandando para o Component pai
        this.props.sendComment(this.state.newComment)
        this.setState({
            newComment: ''
        })
    }

    render(){
        return(
            <div>
                <textarea value={this.state.newComment} onChange={this.handleChance}></textarea>
                <button onClick={this.sendComment}>enviar</button>
                {/*this.state.newComment  USADO PARA VALIDAR*/}
                { /* JSON.stringify(this.state)  OUTRA MANEIRA DE VALIDAR MUITO BOM, OLHO O STATE TODO*/}
          </div>            
        )
    }
}
export default NewComment;