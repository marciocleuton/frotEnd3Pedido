import React, { Component } from 'react';  
import axios from 'axios';  
import { Link } from 'react-router-dom';  

class ItensPedidos extends Component {  
  constructor(props) {  
    super(props);  
    }  
      
    DeletePedido= () =>{  
        axios.delete('http://localhost:52691/api/meuprojeto/DeletePedido/'+this.props.obj.id) 
        .then(json => {  
            if(json.data===true){  
              alert('Pedido deletado com sucesso!');  
            }
            else{ 
                alert('Erro:' + this.props.obj.id); 
            }
        })  
    }  
  render() {  
    debugger;
    var TotalArredondado = parseFloat( this.props.obj.valor.replace(',','.'));
   
    return (  
        <tr>  
          <td>  
            - 
          </td>  
          <td>  
             {this.props.obj.nome}  
          </td>  
          <td>  
            {TotalArredondado.toFixed(2)}  
          </td>  
          <td>  
            <button type="button" onClick={this.DeletePedido} className="btn btn-danger">Delete</button>  
          </td>  
        </tr>  
    );  
  }  
}  
  
export default ItensPedidos;