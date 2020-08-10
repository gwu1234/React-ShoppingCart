import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import cartReducer from './components/reducers/cartReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(cartReducer);

class ShoppingCart extends Component {
  render() {
    return (
      <Provider store={store}>
            <BrowserRouter>
                  <div className="App">
                    <Navbar/>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/cart" component={Cart}/>
                        </Switch>
                  </div>
            </BrowserRouter>
       </Provider>
      
    );
  }
}

export default ShoppingCart;
