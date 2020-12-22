import React, { Component } from 'react';  
import axios from 'axios';  
import { Link } from 'react-router-dom';  

class ListarProduto extends Component {  
  constructor(props) {  
    super(props);  
    }  
      
    DeleteStudent= () =>{  
        axios.delete('http://localhost:52691/api/meuprojeto/DeleteProduto/'+this.props.obj.id) 
        .then(json => {  
            if(json.data===true){  
              alert('Produto deletado com sucesso!'); 
              window.location.href ='/Produtos'
            }  
        })  
    }  
  render() {  
    return (  
        <tr>  
          <td>  
            {this.props.obj.id}  
          </td>  
          <td>  
            {this.props.obj.nome}  
          </td>  
          <td>  
            {this.props.obj.valor}  
          </td>  
           
          <td>  
          <Link to={"/EditarProdutos/"+this.props.obj.id} className="btn btn-success">Edit</Link>  
          </td>  
          <td>  
            <button type="button" onClick={this.DeleteStudent} className="btn btn-danger">Delete</button>  
          </td>  
        </tr>  
    );  
  }  
}  
  
export default ListarProduto;