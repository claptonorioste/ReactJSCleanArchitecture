import React, { Component } from "react";
import { connect } from "react-redux";
import { refreshList, addTodo } from "./Item.actions";


class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "TRY"
    };
    
  }

  componentDidMount() {
    this.props.refreshList()
  }
  onChange = event => {
    this.setState({ text: event.target.value });
  }
  addClick = event => {
    addTodo(this.state.text)
    this.props.refreshList()
  }
  render() {
    return (
      <div>
  
          <div>
            <div>
              <label htmlFor="title">CRUD</label>
            </div>
            <input
              type="text"
              id="text"
              value={this.text}
              onChange={this.addClick}
            />
            <button onClick = {this.onClick}>ADD TODO</button>
          </div>
   
        <ul>
          {this.props.items.map(item => (
            <li key={item.id}>{item.name} <button onClick = {this.onClick}>Delete</button> </li>
          ))}
        </ul>
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
)(ItemList);
