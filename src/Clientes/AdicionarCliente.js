import React from 'react';  
import axios from 'axios';  

import '../Clientes/Cliente'
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  


class AdicionarCliente extends React.Component{
    constructor(props){  
        super(props)  
        this.state = {  
        nome:'',  
        email:'',  
        cidade:''
        
        }  
    }  

    AdicionarCliente=() => {
        axios.post('http://localhost:52691/api/meuprojeto/NovoCliente/', {Nome:this.state.nome,Email:this.state.email,
        Cidade:this.state.cidade})
        .then(json => {  
            debugger;
            if(json.data=== true){  
              console.log(json.data.Status);  
              alert("Cliente Salvo com sucesso");  
            this.props.history.push('/Clientes')  
            }  
            else{  
            alert('Erro:Verificque os dados');  
            debugger;  
            this.props.history.push('/Clientes')  
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
                              <Label for="address" sm={2}>Email</Label>  
                              <Col sm={10}>  
                                <Input type="text" name="email" onChange={this.handleChange} value={this.state.Email} placeholder="Enter RollNo" />  
                              </Col>  
                            </FormGroup>  
                            <FormGroup row>  
                              <Label for="Password" sm={2}>Cidade</Label>  
                              <Col sm={10}>  
                                <Input type="text" name="cidade" onChange={this.handleChange} value={this.state.Cidade} placeholder="Enter Class" />  
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

export default AdicionarCliente;
                      