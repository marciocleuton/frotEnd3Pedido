import React from 'react';   
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
import axios from 'axios'  


class EditarProduto extends React.Component{
    constructor(props) {  
        super(props)  
     
    this.onChangeNome = this.onChangeNome.bind(this);  
    this.onChangeValor = this.onChangeValor.bind(this);     
    this.onSubmit = this.onSubmit.bind(this);  
  
         this.state = {  
            Nome: '',  
            Valor: ''  
        }  
    }

    componentDidMount(){
        axios.get('http://localhost:52691/api/meuprojeto/produtoID/'+this.props.match.params.id)
        .then(response =>{
            debugger;
            this.setState({
                Nome:response.data.nome,
                Valor:response.data.valor.replace(',','.')
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
      onChangeValor(e) {  
        this.setState({  
            Valor: e.target.value  
        });    
      }   onSubmit(e) {  
        debugger;  
        e.preventDefault();  
        const obj = {  
            Id:this.props.match.params.id,  
          Nome: this.state.Nome,  
          Valor: this.state.Valor.replace(',','.')
      
        };  
        axios.put('http://localhost:52691/api/meuprojeto/AtualizarProduto/'+this.props.match.params.id, obj)  
            .then(res => console.log(res.data));  
            debugger;              
            alert("Produto Salvo com sucesso");  
            window.location.href ='/Produtos'
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
                                    <Input type="text" name="RollNo" value={this.state.Valor} onChange={this.onChangeValor} placeholder="Valor R$" />  
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

    export default EditarProduto;