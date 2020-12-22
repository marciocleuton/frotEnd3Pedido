import React from 'react';   
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
import axios from 'axios'  
import '../Clientes/Style.css';  

class EditarCliente extends React.Component {  
    constructor(props) {  
        super(props)  
     
    this.onChangeNome = this.onChangeNome.bind(this);  
    this.onChangeEmail = this.onChangeEmail.bind(this);  
    this.onChangeCidade = this.onChangeCidade.bind(this);    
    this.onSubmit = this.onSubmit.bind(this);  
  
         this.state = {  
            Nome: '',  
            Email: '',  
            Cidade: ''  
  
        }  
    }  

    componentDidMount(){
        axios.get('http://localhost:52691/api/meuprojeto/ClienteID/'+this.props.match.params.id)
        .then(response =>{
            debugger;
            this.setState({
                Nome:response.data.nome,
                Email:response.data.email,
                Cidade:response.data.cidade
            });
        })
        .catch(function(erro){
            console.log(erro);
        })
    }

    onChangeNome(e) {  
        this.setState({  
            Nome: e.target.value  
        });  
      }  
      onChangeEmail(e) {  
        this.setState({  
            Email: e.target.value  
        });    
      }  
      onChangeCidade(e) {  
        this.setState({  
            Cidade: e.target.value  
        });  
    }  
         
    onSubmit(e) {  
        debugger;  
        e.preventDefault();  
        const obj = {  
            Id:this.props.match.params.id,  
          Nome: this.state.Nome,  
          Email: this.state.Email,  
          Cidade: this.state.Cidade  
      
        };  
        axios.put('http://localhost:52691/api/meuprojeto/AtualizarCliente/'+this.props.match.params.id, obj)  
            .then(res => console.log(res.data));  
            debugger;  
            window.location.href ='/Clientes'
      }  
        render() {  
            return (  

                <Container className="App">  
      
                 <h4 className="PageHeading">Atualizar Clientes</h4>  
                    <Form className="form" onSubmit={this.onSubmit}>  
                        <Col>  
                            <FormGroup row>  
                                <Label for="name" sm={2}>Name</Label>  
                                <Col sm={10}>  
                                    <Input type="text" name="Name" value={this.state.Nome} onChange={this.onChangeNome}  
                                    placeholder="Enter Name" />  
                                </Col>  
                            </FormGroup>  
                            <FormGroup row>  
                                <Label for="Password" sm={2}>Email</Label>  
                                <Col sm={10}>  
                                    <Input type="text" name="RollNo" value={this.state.Email} onChange={this.onChangeEmail} placeholder="Enter RollNo" />  
                                </Col>  
                            </FormGroup>  
                             <FormGroup row>  
                                <Label for="Password" sm={2}>Cidade</Label>  
                                <Col sm={10}>  
                                    <Input type="text" name="Class" value={this.state.Cidade} onChange={this.onChangeCidade} placeholder="Enter Class" />  
                                </Col>  
                            </FormGroup>  
                              
                        </Col>  
                        <Col>  
                            <FormGroup row>  
                                <Col sm={5}>  
                                </Col>  
                                <Col sm={1}>  
                              <Button type="submit" color="success">Submit</Button>{' '}  
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

    export default EditarCliente;