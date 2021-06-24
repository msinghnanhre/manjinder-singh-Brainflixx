import { Component } from 'react'
import './App.scss'

import Header from "./components/Header/Header"
import Upload from "./components/Upload/Upload"
import Home from "./components/Home/Home"

import {BrowserRouter, Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/upload" component={Upload} />
          <Route path="/videos/:id" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;


