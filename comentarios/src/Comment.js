import React from 'react'

const Comment = ({c}) => {
    
    let comment = 'vázio'
    let email = 'vazio'

    if(c ){  

        if(c.comment){              
            comment = c.comment
        }

        if(c.email){
            email = c.email
        }
    }
    return(
        <div> 
            Comentário: {comment} 
            <br/>
            Enviado por: {email}
            <hr/>
        </div>
    )
}

export default Comment