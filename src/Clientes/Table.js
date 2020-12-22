import React, { Component } from 'react';  
import axios from 'axios';  
import { Link } from 'react-router-dom';  
class Table extends Component {  
  constructor(props) {  
    super(props);  
    }  
      
    DeleteStudent= () =>{   
    axios.delete('http://localhost:52691/api/meuprojeto/DeleteCliente/'+this.props.obj.id) 
    .then(json => {  
    if(json.data === true){  
    alert('Record deleted successfully!!');  
    window.location.reload(false);
    }  
    })  
    }  
  render() {  
    return (  
        <tr>  
          <td>  
            {this.props.obj.nome}  
          </td>  
          <td>  
            {this.props.obj.email}  
          </td>  
          <td>  
            {this.props.obj.cidade}  
          </td>  
           
          <td>  
          <Link to={"/EditarCliente/"+this.props.obj.id} className="btn btn-success">Edit</Link>  
          </td>  
          <td>  
            <button type="button" onClick={this.DeleteStudent} className="btn btn-danger">Delete</button>  
          </td>  
        </tr>  
    );  
  }  
}  
  
export default Table;