import React, { Component } from "react";
import { connect } from "react-redux";
import { refreshList, addTodo } from "./Item.actions";


class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({text: event.target.value});
    console.log(this.text)
  }

  handleSubmit(event) {
    event.preventDefault();
    const { text } = this.state;
    this.props.addTodo({ text });
    this.setState({ text: "" });
  }
  componentDidMount() {
    this.props.refreshList()
  }
  render() {
    return (
      <div>
        <form onSubmit={console.log(this.text)}>
          <div>
            <div>
              <label htmlFor="title">CRUD</label>
            </div>
            <input
              type="text"
              id="text"
              value={this.text}
              placeholder="Todo"
              onChange={this.handleChange}
            />
            <button type="submit">ADD TODO</button>
          </div>
        </form>
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
