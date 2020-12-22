import React from 'react';   
import { Container, Col, Form,  FormGroup, Label, Input, Button,  ListGroup, ListGroupItem } from 'reactstrap';  
import axios from 'axios'  
import '../Clientes/Style.css';  

class EditarPedido extends React.Component {  
    constructor(props) {  
        super(props)  
     
    this.onChangeCliente = this.onChangeCliente.bind(this);  
    this.onChangeValorTotal = this.onChangeValorTotal.bind(this);  
    this.onChangeDataCriacao = this.onChangeDataCriacao.bind(this);    
    this.onSubmit = this.onSubmit.bind(this);  
  
         this.state = {  
            Cliente: '',  
            ValorTotal: '',  
            DataCriacao: '' ,
            produto:[],
            listaProdutoseD:[],
            ListaProdutos:[]
             
  
        }  
    }  

    componentDidMount(){
        axios.get('http://localhost:52691/api/meuprojeto/pedidoID/'+this.props.match.params.id)
        .then(response =>{
            debugger;
            this.setState({
                Cliente:response.data.cliente,
                ValorTotal:response.data.valor,
                DataCriacao:response.data.dataCriacao,                
                ListaProdutos:response.data.listaProdutos
            });

            debugger;
        })
        axios.get('http://localhost:52691/api/meuprojeto/produto/todos')  
        .then(response => {  
          this.setState({ produto: response.data });  
          debugger;  
  
        }) 
        .catch(function(erro){
            console.log(erro);
        })
    }

    onChangeCliente(e) {  
        this.setState({  
          Cliente: e.target.value  
        });  
      }  
      onChangeValorTotal(e) {  
        this.setState({  
          ValorTotal: e.target.value  
        });    
      }  
      onChangeDataCriacao(e) {  
        this.setState({  
          DataCriacao: e.target.value  
        });  
    }  

    handleChange2= (e)=> {  
              
      debugger;
      axios.get('http://localhost:52691/api/meuprojeto/produtoID/'+ e.target.value)
      .then(response =>{
          debugger;
          this.state.ListaProdutos.push({
              id : response.data.id,
              nome:response.data.nome,
              valor:response.data.valor
          }
            );

            this.state.ValorTotal= '0';
          for (let index = 0; index < this.state.ListaProdutos.length; index++) {
            debugger;
            this.state.ValorTotal = parseFloat(this.state.ValorTotal) + parseFloat(this.state.ListaProdutos[index].valor.replace(',','.'));
            
          }

          this.setState({[e.target.ListaProdutos]:this.state.ListaProdutos})
      })
       
     }
         
    onSubmit(e) {  
        debugger;  
        e.preventDefault();  
        const obj = {  
          Id:this.props.match.params.id,  
          Cliente: this.state.Cliente,  
          DataCriacao: this.state.DataCriacao,  
          listaProdutos: this.state.ListaProdutos  
      
        };  
        axios.put('http://localhost:52691/api/meuprojeto/AtualizarPedido/'+this.props.match.params.id, obj)  
            .then(res => console.log(res.data));  
            debugger;  
            alert('Peido Atualizado com Sucesso');
            window.location.href ='/Pedido'
      }  

      DeletarLista = (id) => {
        console.log(id)
      }
    
        render() {  
            debugger;
          
            let listaGrupos = this.state.ListaProdutos.map( (ps, key) =>(
                <ListGroupItem key={key} >{ps.nome} - {ps.valor}  </ListGroupItem> 
              ));
              

             
                
              let optionProdutos = this.state.produto.map(p =>(
                <option value={p.id}>{p.nome} - {p.valor}</option>
              ));

            return (  


      
                <Container className="App">  
                        <h4 className="PageHeading">Informaçoes do seu Pedido</h4>  
                        <Form className="form" onSubmit={this.onSubmit}>  
                          <Col>  
                          <FormGroup row>
                              <Label for="clienteSelecionado"  sm={2}>Cliente</Label>
                              <Col  sm={10}>
                                <p>{this.state.Cliente.nome}</p>
                              </Col>
                            </FormGroup>

                            <FormGroup row>  
                              <Label for="dataCriaco" sm={2}>Data Criacao</Label>  
                              <Col sm={10}>  
                                  <p>{this.state.DataCriacao}</p>
                               </Col>  
                            </FormGroup>  
                        <FormGroup>
                          
                        </FormGroup>
                          
                          
                          
                           <FormGroup row>
                              <Label for="produtoSelecionado"  sm={2}>Selecione os Itens </Label>
                              <Col  sm={10}>
                              <Input type="select" name="produtoSelecionado" id="produtoSelecionado" value={this.state.produtoSelecionado} onChange={this.handleChange2}  multiple >
                             
                                {optionProdutos}


                              </Input>
                              </Col>
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
                              <Label for="valor" sm={2}>Total do Pedido</Label> 
                              <Col sm={10}>

                              <ListGroupItem>  {this.state.ValorTotal}</ListGroupItem>
                                
                               </Col>                           
                              </ListGroup>

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

    export default EditarPedido;