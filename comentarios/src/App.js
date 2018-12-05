import React, { Component } from 'react';
import './App.css';
import Comments from './Comments'
import NewComment from './NewComment'

class App extends Component {
  state = {    
    comments: {},
    isLoading: false
  }


  sendComment = comment => {
    const { database} = this.props
    const id = database.ref().child('comments').push().key;
    const comments = {}
    comments['comments/'+id] = {
      comment
    }
    database.ref().update(comments)
    
    /*this.setState({
      comments: [...this.state.comments, comment],
    })*/
  }

  componentDidMount(){
    const { database} = this.props
    this.setState({ isLoading: true })
    this.comments = database.ref('comments')
    this.comments.on('value', snapshot =>{
      this.setState({ 
        comments: snapshot.val(),
        isLoading: false
      })
    })
  }

  render() {
    return (
      <div>
        { /*NewComment*/ }
          {/*this.state.newComment  USADO PARA VALIDAR*/}
          { /* JSON.stringify(this.state)  OUTRA MANEIRA DE VALIDAR MUITO BOM, OLHO O STATE TODO*/}
          <NewComment sendComment={this.sendComment} />
        <Comments comments={this.state.comments /* Isso é uma props*/ } />
        {
          this.state.isLoading && <p>Carregando...</p>
        }
      </div>
    );
  }
}

export default App;
