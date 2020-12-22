import React from 'react'; 

import Clientes from './Clientes/Cliente';  
import AdicionarCliente from './Clientes/AdicionarCliente';  
import EditarCliente from  './Clientes/EditarCliente';

import Produto from './Produtos/Produto';
import AdicionarProduto from './Produtos/AdicionarProduto';
import EditarProdutos from './Produtos/EditarProduto';
import EditarPedido from  './Pedido/EditarPedido';
import Pedido from './Pedido/Pedido';
import AdicionarPedido from './Pedido/AdicionarPedido';
import { BrowserRouter as Router, Switch, Link,  Route } from 'react-router-dom'; 
import './App.css';
 
function App() {
  return (
    <Router>  
    <div id='cssmenu'>  
   <ul>
      <li><p>Clientes</p>
         <ul>
            <li>
            <Link to={'/AdicionarCliente'} className="nav-link">Adicionar Cliente</Link> 
            </li>
            <li> <Link to={'/Clientes'} className="nav-link">Listar Cliente</Link>   </li>
         </ul>
      </li>
      <li><p>Produto</p>
         <ul>
            <li>
            <Link to={'/AdicionarProduto'} className="nav-link">Adicionar Produto</Link> 
            </li>
            <li>
            <Link to={'/Produtos'} className="nav-link">Lista Produto</Link>
            </li>
         </ul>
      </li>
      <li><p>Pedido</p>
         <ul>
            <li> <Link to={'/AdicionarPedido'} className="nav-link">Realizar Pedido</Link></li>
            <li><Link to={'/Pedido'} className="nav-link">Listar Pedido</Link> </li>
         </ul>
      </li>
   </ul>
</div>   
        <br></br>
        <br></br>
      <Switch>  
         <Route path='/Clientes' component={Clientes} />  
         <Route path='/AdicionarCliente' component={AdicionarCliente} />  
         
         <Route path='/Pedido' component={Pedido}/>
         <Route path='/AdicionarPedido' component={AdicionarPedido} />  
         
         <Route path='/AdicionarProduto' component={AdicionarProduto} />  
         <Route path='/EditarCliente/:id' component={EditarCliente} /> 
         <Route path='/EditarProdutos/:id' component={EditarProdutos} /> 
         <Route path='/EditarPedido/:id' component={EditarPedido} /> 
         <Route path='/Produtos' component={Produto} />  
      </Switch>  
  
  </Router> 
  );
}

export default App;
