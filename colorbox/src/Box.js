import React, {Component} from 'react';

class Box extends Component{

    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);

    }

    handleDelete(){
        this.props.delete(this.props.id);
    }

    render(){
        return(
            <div>
            <div
                style={
                    {
                    height: `${this.props.height}em`,
                    width: `${this.props.width}em`,
                    backgroundColor: this.props.color
                    }
                }
            />
            <button onClick={this.handleDelete}>Delete</button>
            </div>

        );
    }

}
export default Box;