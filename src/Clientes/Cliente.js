import React, { Component } from 'react';  
import axios from 'axios'; 
import Table from './Table';  
export default class  Cliente extends Component{
   
    constructor(props) {  
        super(props);  
        this.state = {business: []};  
    }

    componentDidMount(){  
        debugger;  
        axios.get('http://localhost:52691/api/meuprojeto/clientes/todos')  
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
            return <Table obj={object} key={i} />;  
        });  
      }  

      render() {  
        return (  
          <div>  
            <h4 align="center">Cliente</h4>  
            <table className="table table-striped" style={{ marginTop: 10 }}>  
              <thead>  
                <tr>  
                  <th>Name</th>  
                  <th>Email</th>  
                  <th>Cidade</th>                  
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