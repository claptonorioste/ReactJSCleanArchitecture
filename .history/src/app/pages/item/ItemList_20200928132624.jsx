import React, { Components } from "react";
import { connect } from "react-redux";
import { refreshList } from "./Item.actions";

class ItemList extends Components {
  render(){
    return (
      <div>
        <button>Refresh</button>
        <ul>
    
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
