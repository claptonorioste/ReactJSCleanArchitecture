import React, { Component } from "react";
import { connect } from "react-redux";
import { refreshList, addTodo , deleteTodo , updateTodo } from "./Item.actions";


class TodoList extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
      text: "TRY",
      id: -1
    };
    
  }

  componentDidMount() {
    console.log(this.props.items)
    this.props.refreshList()
  }
  onChange = event => {
    this.setState({ text: event.target.value });
  }
  addClick = event => {
    this.state.id ++

    var data = {
      id: this.state.id,
      text: this.state.text
    }

    addTodo(data)
    this.props.refreshList()   
  }

  deleteClick = id => {
    
    var data = {
      id: id,
      text: this.state.text
    }
    deleteTodo(data)
    this.props.refreshList()  
  }

  updateClick = (id) => {
    var data = {
      id: id,
      text: this.state.text
    }
    console.log(data)
    updateTodo(data)
    this.props.refreshList() 
  }
  render() {
    return (
      <div>
  
          <div>
            <div>
              <label htmlFor="title"></label>
            </div>
            <input
              type="text"
              id="text"
              value={this.text}
              onChange={this.onChange}
            />
            <button onClick = {this.addClick}>ADD TODO</button>
          </div>
   
        
          {this.props.items.map(item => (
          
              <div key={item.id}>
                {item.name}
                <button onClick = {() => {this.deleteClick(item.id)} }>Delete</button> 
                <button onClick = {() => {this.updateClick(item.id)} }>Update</button> 
              </div>
              
            
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items.items
});

const mapDispatchToProps = dispatch => ({
  refreshList: () => dispatch(refreshList)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
