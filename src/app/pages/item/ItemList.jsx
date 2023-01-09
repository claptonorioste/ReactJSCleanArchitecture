import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { fetchItems, addItem, deleteItem, updateItem } from "../../redux/item/item.action"

function itemList() {
    const dispatch = useAppDispatch()
    const { items, loading } = useAppSelector((state) => {
        console.log(state)
        return { items: state.itemReducer.items, loading: state.itemReducer.loading }
    })

    useEffect(() => {
        dispatch(fetchItems())
    }, [])

    useEffect(() => {
        console.log(loading)
    }, [loading])

    const addClick = () => {
        var data = {
            id: 1,
            name: "test",
        }

        dispatch(
            addItem({
                data,
            }),
        )
            .unwrap()
            .then(() => {
                dispatch(fetchItems())
            })
    }

    const deleteClick = () => {
        var data = {
            id: 1,
            name: "test",
        }

        dispatch(
            deleteItem({
                data,
            }),
        )
            .unwrap()
            .then(() => {
                dispatch(fetchItems())
            })
    }

    const updateClick = () => {
        var data = {
            id: 1,
            name: "updated",
        }

        dispatch(
            updateItem({
                data,
            }),
        )
            .unwrap()
            .then(() => {
                dispatch(fetchItems())
            })
    }

    return (
        <>
            <div>
                <div>
                    <div>
                        <label htmlFor="title"></label>
                    </div>
                    <input type="text" id="text" />
                    <button onClick={addClick}>ADD TODO</button>
                </div>
            </div>
            {items.map((item) => (
                <div key={item.id}>
                    {item.name}
                    <button onClick={deleteClick}>Delete</button>
                    <button onClick={updateClick}>Update</button>
                </div>
            ))}
        </>
    )
}

export default itemList

// class TodoList extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             text: "TRY",
//             id: -1,
//         }
//     }

//     componentDidMount() {
//         // this.props.refreshList()
//     }
//     onChange = (event) => {
//         // this.setState({ text: event.target.value })
//     }
//     addClick = (event) => {
//         // this.state.id ++
//         // var data = {
//         //   id: this.state.id,
//         //   text: this.state.text
//         // }
//         // addTodo(data)
//         // this.props.refreshList()
//     }

//     deleteClick = (id) => {
//         // var data = {
//         //   id: id,
//         //   text: this.state.text
//         // }
//         // deleteTodo(data)
//         // this.props.refreshList()
//     }

//     updateClick = (id) => {
//         // var data = {
//         //   id: id,
//         //   text: this.state.text
//         // }
//         // console.log(data)
//         // updateTodo(data)
//         // this.props.refreshList()
//     }
//     render() {
//         return (
//             <div>
//                 <div>
//                     <div>
//                         <label htmlFor="title"></label>
//                     </div>
//                     <input type="text" id="text" value={this.text} onChange={this.onChange} />
//                     <button onClick={this.addClick}>ADD TODO</button>
//                 </div>

//                 {this.props.items.map((item) => (
//                     <div key={item.id}>
//                         {item.name}
//                         <button
//                             onClick={() => {
//                                 this.deleteClick(item.id)
//                             }}
//                         >
//                             Delete
//                         </button>
//                         <button
//                             onClick={() => {
//                                 this.updateClick(item.id)
//                             }}
//                         >
//                             Update
//                         </button>
//                     </div>
//                 ))}
//             </div>
//         )
//     }
// }
