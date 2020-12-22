import React, { Component } from 'react';  
import axios from 'axios';  
import { Link } from 'react-router-dom';  

class ListaPedido extends Component {  
  constructor(props) {  
    super(props);  
    }  
      
    DeletePedido= () =>{  
        axios.delete('http://localhost:52691/api/meuprojeto/DeletePedido/'+this.props.obj.id) 
        .then(json => {  
            if(json.data===true){  
              alert('Pedido deletado com sucesso!');  
              window.location.href ='/Pedido'
            }  
        })  
    }  
  render() {  
    debugger;
    var TotalArredondado = parseFloat( this.props.obj.valor.replace(',','.'));
   
    return (  
        <tr>  
          <td>  
            {this.props.obj.id}  
          </td>  
          <td>  
            {this.props.obj.cliente.nome}  
          </td>  
          <td>  
            {TotalArredondado.toFixed(2)}  
          </td>  
           
          <td>  
          <Link to={"/EditarPedido/"+this.props.obj.id} className="btn btn-success">Edit</Link>  
          </td>  
          <td>  
            <button type="button" onClick={this.DeletePedido} className="btn btn-danger">Delete</button>  
          </td>  
        </tr>  
    );  
  }  
}  
  
export default ListaPedido;