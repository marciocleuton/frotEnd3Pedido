import React from 'react';  
import axios from 'axios';  

import '../Pedido/Pedido';
import { Container, Col, Form,  FormGroup, Label, Input, Button, ListGroup, ListGroupItem  } from 'reactstrap';  


class AdicionarPedido extends React.Component{
    constructor(props){  
        super(props)  
        this.state = {  
        dataCriaco:'',
        idClientes: '',
        clienteSelecionado :[],
        produtoSelecionado :[],
        listaProdutos:[],
        listaProdutosBD:[],
        clienteb:[],
        valotTota:'',
        produto:[]

        }  
    } 

    componentDidMount(){  
      debugger;  
      axios.get('http://localhost:52691/api/meuprojeto/clientes/todos')  
        .then(response => {  
          this.setState({ clienteb: response.data });  
          debugger;  
  
        }) 
        axios.get('http://localhost:52691/api/meuprojeto/produto/todos')  
        .then(response => {  
          this.setState({ produto: response.data });  
          debugger;  
  
        })  
        .catch(function (error) {  
          console.log(error);  
        })  
    }

    listaProdutosBD(){  
      debugger;  
      axios.get('http://localhost:52691/api/meuprojeto/produto/todos')  
        .then(response => {  
          this.setState({ produto: response.data });  
          debugger;  
  
        })  
        .catch(function (error) {  
          console.log(error);  
        })  
    }

    
    AdicionarCliente=() => {
      debugger; 
        axios.post('http://localhost:52691/api/meuprojeto/NovoPedido/', {idCliente:this.state.clienteSelecionado,DataCriacao:this.state.dataCriaco, listaProdutos: this.state.produtoSelecionado, Valor: this.state.valotTota})
        .then(json => {  
            debugger;
            if(json.data=== true){  
              console.log(json.data.Status);  
              alert("Pedido Salvo com sucesso");  
            this.props.history.push('/Pedido')  
            }  
            else{  
               alert('Erro:Verificque os dados');  
               debugger;  
              this.props.history.push('/Pedido')  
              }  
            })  
        }  
            handleChange= (e)=> {  
                this.setState({[e.target.name]:e.target.value});  
                }  

                
            handleChange2= (e)=> {  
              
               debugger;
               axios.get('http://localhost:52691/api/meuprojeto/produtoID/'+ e.target.value)
               .then(response =>{
                   debugger;
                   this.state.produtoSelecionado.push({
                       id : response.data.id,
                       Nome:response.data.nome,
                       Valor:response.data.valor
                       
                   }
                   );

                   
                   this.state.valotTota='0';
                   for (let index = 0; index < this.state.produtoSelecionado.length; index++) {
                     debugger;
                     this.state.valotTota = parseFloat(this.state.valotTota) + parseFloat(this.state.produtoSelecionado[index].Valor.replace(',','.'));
                     
                   }

                   this.setState({[e.target.listaProdutos]:this.state.produtoSelecionado})
               })
                
              }

            


              
                render() { 
                  

                 
                  let optionTemplate = this.state.clienteb.map(v => (
                    
                    <option value={v.id}>{v.nome}</option>
                  ));
                  
                  let listaGrupos = this.state.produtoSelecionado.map( ps =>(
                    <ListGroupItem>{ps.Nome} - {ps.Valor}</ListGroupItem>
                  ));
                  

                  let optionProdutos = this.state.produto.map(p =>(
                    <option value={p.id}>{p.nome} - {p.valor}</option>
                  ));


                    return (  
                       <Container className="App">  
                        <h4 className="PageHeading">Informaçoes do seu Pedido</h4>  
                        <Form className="form">  
                          <Col>  
                           <FormGroup row>
                              <Label for="produtoSelecionado"  sm={2}>Selecione os Itens </Label>
                              <Col  sm={10}>
                              <Input type="select" name="produtoSelecionado" id="produtoSelecionado" value={this.state.produtoSelecionado} onChange={this.handleChange2}  multiple >
                             
                                {optionProdutos}


                              </Input>
                              </Col>
                            </FormGroup>


                            <FormGroup row>
                              <Label for="clienteSelecionado"  sm={2}>Cliente</Label>
                              <Col  sm={10}>
                              <Input type="select" name="clienteSelecionado" id="clienteSelecionado" value={this.state.clienteSelecionado} onChange={this.handleChange}>
                               <option value="0">Selecione o Cliente</option>
                                {optionTemplate}
                              </Input>
                              </Col>
                            </FormGroup>

                            <FormGroup row>  
                              <Label for="email" sm={2}>Data</Label>  
                              <Col sm={10}>  
                                <Input type="text" name="dataCriaco" onChange={this.handleChange} value={this.state.DataCriacao} placeholder="Data do Pedido" />  
                              </Col>  
                            </FormGroup>  
                        <FormGroup>
                          
                        </FormGroup>
                              <FormGroup row>                                
                                <ListGroup>
                                <Label for="email" sm={2}>Lista de iTens</Label> 
                                <Col sm={10}>  
                               {listaGrupos}
                                </Col>
                              </ListGroup>
                              </FormGroup>

                              <FormGroup row>
                              <ListGroup>
                              <Label for="email" sm={2}>Total do Pedido</Label> 
                              <Col sm={10}>

                              <ListGroupItem>  {this.state.valotTota}</ListGroupItem>
                                
                               </Col>                           
                              </ListGroup>

                              </FormGroup>
                            
                          </Col>  
                          <Col>  
                            <FormGroup row>  
                              <Col sm={5}>  
                              </Col>  
                              <Col sm={1}>  
                              <button type="button" onClick={this.AdicionarCliente} className="btn btn-success">Submit</button>  
                              </Col>  
                              <Col sm={1}>  
                                <Button color="danger">Cancel</Button>{' '}  
                              </Col>  
                              <Col sm={5}>  
                              </Col>  
                            </FormGroup>  
                          </Col>  
                        </Form>  
                      </Container>  
                    );  
                    }  
                       
                    }  

export default AdicionarPedido;

