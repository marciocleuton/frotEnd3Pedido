import React from 'react';  
import axios from 'axios';  

import '../Produtos/Produto'
import { Container, Col, Form,  FormGroup, Label, Input, Button } from 'reactstrap';  


class AdicionarProduto extends React.Component{
    constructor(props){  
        super(props)  
        this.state = {  
        nome:'',  
        valor:''       
        }  
    }  

    AdicionarCliente=() => {
        axios.post('http://localhost:52691/api/meuprojeto/NovoProduto/', {Nome:this.state.nome,Valor:this.state.valor.replace(',', '.')})
        .then(json => {  
            debugger;
            if(json.data=== true){  
              console.log(json.data.Status);  
              alert("Produto Salvo com sucesso");  
            this.props.history.push('/Produtos')  
            }  
            else{  
            alert('Erro:Verificque os dados');  
            debugger;  
            this.props.history.push('/Produtos')  
            }  
            })  
            }  
            handleChange= (e)=> {  
                this.setState({[e.target.name]:e.target.value});  
                }  
                render() {  
                    return (  
                       <Container className="App">  
                        <h4 className="PageHeading">Enter Student Informations</h4>  
                        <Form className="form">  
                          <Col>  
                            <FormGroup row>  
                              <Label for="name" sm={2}>Nome</Label>  
                              <Col sm={10}>  
                                <Input type="text" name="nome" onChange={this.handleChange} value={this.state.Nome} placeholder="Enter Name" />  
                              </Col>  
                            </FormGroup>  
                            <FormGroup row>  
                              <Label for="email" sm={2}>Valor</Label>  
                              <Col sm={10}>  
                                <Input type="text" name="valor" onChange={this.handleChange} value={this.state.Valor} placeholder="Enter RollNo" />  
                              </Col>  
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

export default AdicionarProduto;

