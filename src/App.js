import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  render() {
    return (
      <div>        
        <div className="container">
          <ProductCatalog/>          
        </div>
      </div>  
    );
  }
}

class ProductListItem extends React.Component {    
  render() {      
    return ( 
      <div className="col-xs-12 col-sm-6 col-md-4">       
        <div className="card">
          <div className="card-body text-center">
              <p><img className=" img-fluid product-image" src={this.props.product.imageSrc} alt="card" /></p>
              <h4 className="card-title">{this.props.product.title}</h4>
              <p className="text-muted product-price">${this.props.product.price} </p>                
              <small className="card-text">{this.props.product.description}</small>                              
          </div>
        </div>            
      </div>            
    )
  }
}

class ProductCatalog extends React.Component {
  state = {
    products: []
  }
  componentDidMount() {    
    axios.get(`product-data/json-files/fashion-small.json`)
      .then(res => {        
        const products = res.data;
        this.setState({ products });
      })
  }

  render() {    
    var rows = [];    
    this.state.products.forEach((product) => {
      rows.push(<ProductListItem key={product.key} product={product} />);            
    });
    return (
      <section id="team" className="pb-5">
        <div className="container">
          <h5 className="section-title h1">Simple Product Catalog</h5>
          <div className="row">
            {rows}
          </div>
        </div>          
      </section>     
    );
  }
}

export default App;