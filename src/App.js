import React,{Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { a: '', b: '', c: 0 };
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    
  }
  handleChange1(e) {
    this.setState({ a: Number(e.target.value)});
  }
  handleChange2(e) {
    this.setState({  b: Number(e.target.value)});
  }
  
  
  Sum = (event) => {
    this.setState(state => ({
      c : state.a + state.b
    }));
  }
  
  
  render()
  {
    return (
      <div className="App">
        <input name="" id="" type="number"  onChange={this.handleChange1} onKeyUp = {this.Sum} value={this.state.a}/>
        <p>+</p>
        <input name="" id="" type="number" onChange={this.handleChange2} onKeyUp = {this.Sum} value={this.state.b} />
        <p>=</p>
        <input name="" id="" readOnly value = {this.state.c}/>
      
      </div>
    );
  }
 
}

export default App;
