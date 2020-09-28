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
              placeholder="Todo"
              onChange = {
                this.setState({
                  text: "NO"
                })
              }
            />
            <button onClick = {() => addTodo("YES")}>ADD TODO</button>
          </div>
   
        <ul>
          {this.props.items.map(item => (
            <li key={item.id}>{item.name}</li>
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
