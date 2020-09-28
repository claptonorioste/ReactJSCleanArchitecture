import React, { Components } from "react";
import { connect } from "react-redux";
import { refreshList } from "./Item.actions";

class ItemList extends Components {


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
