import React, { Component } from 'react';  
import axios from 'axios';
import Lista from './ListarProdutos';  

export default class  Produto extends Component{

    constructor(props) {  
        super(props);  
        this.state = {business: []};  
    }

    componentDidMount(){  
        debugger;  
        axios.get('http://localhost:52691/api/meuprojeto/produto/todos')  
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
            <h4 align="center">Lista de Produtos</h4>  
            <table className="table table-striped" style={{ marginTop: 10 }}>  
              <thead>  
                <tr>  
                  <th>Codigo</th>  
                  <th>Nome</th>  
                  <th>Valor</th>                  
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


