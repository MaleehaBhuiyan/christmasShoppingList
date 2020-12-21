import React from 'react' 
import FormOne from '../StartPageComponent/FormOne'

class StartPage extends React.Component{
    render(){
        return(
            <div id="startPage">
            <h1 className="glow">Create a Christmas Shopping List</h1>
            <FormOne submitHandler={this.props.submitHandler} />
            
            </div>
        )
    }
}

export default StartPage