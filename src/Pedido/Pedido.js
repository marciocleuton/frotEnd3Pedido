import React, { Component } from 'react';  
import axios from 'axios';
import Lista from './ListaPedido';  

export default class  Pedido extends Component{

    constructor(props) {  
        super(props);  
        this.state = {business: []};  
    }

    componentDidMount(){  
        debugger;  
        axios.get('http://localhost:52691/api/meuprojeto/pedidos/todos')  
          .then(response => {  
            this.setState({ business: response.data });  
            debugger;  
    
          })  
          .catch(function (error) {  
            console.log(error);  
          })  
      }

      tabRow(){  
        return this.state.business.map(function(object, i){  
            return <Lista obj={object} key={i} />;  
        });  
      }  

      render() {  
        return (  
          <div>  
            <h4 align="center">Lista de Pedidos</h4>  
            <table className="table table-striped" style={{ marginTop: 10 }}>  
              <thead>  
                <tr>  
                  <th>Codigo</th>  
                  <th>Cliente</th>  
                  <th>Valor Total</th>                  
                  <th colSpan="3">Action</th>  
                </tr>  
              </thead>  
              <tbody>  
               { this.tabRow() }   
              </tbody>  
            </table>  
          </div>  
        );  
      }  
}


