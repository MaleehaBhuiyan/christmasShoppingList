import React from 'react' 

class ShoppingList extends React.Component{
    render(){
        const { list } = this.props
        let listItems = list.map(item => {
            return(
                <div key={item.id}>
                    <div>{item.name}</div>
                    <div>{item.gift}</div>
                    <div>{item.price}</div>
                </div>
            )
        })
        return(
            <>
            <h1> {this.props.userName}'s Shopping List </h1>
            {listItems}
            </>
        )
    }
}

export default ShoppingList