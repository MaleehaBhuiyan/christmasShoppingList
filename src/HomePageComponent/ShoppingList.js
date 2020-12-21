import React from 'react' 



class ShoppingList extends React.Component{

    handleEdit = (name, gift, price) => {
        this.props.editItem(name, gift, price)
    }

    handleDelete = (id) => {
        this.props.deleteItem(id)
    }

    render(){
        const { list } = this.props
        let listItems = list.map(item => {
            return(
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.gift}</td>
                    <td>{item.price}</td>
                    <td>
                        <i className="fa fa-trash" onClick={() => this.handleDelete(item.id)}></i>
                    </td>
                </tr>
            )
        })
        return(
            <>
            <h1> {this.props.userName}'s Shopping List </h1>
            <table id="shoppingList">
                <tr>
                    <th>Name</th>
                    <th>Gift</th>
                    <th>Price</th>
                    <th>Delete</th>
                </tr>
                {listItems}
            </table>
            </>
        )
    }
}

export default ShoppingList