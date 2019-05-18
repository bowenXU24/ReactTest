import React, { Component } from 'react';
import uuid from 'uuid/v4';


class BoxForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            height: "",
            width: "",
            color: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.hadnleSubmit = this.hadnleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState(
            {
                [evt.target.name] : [evt.target.value]
            }
        );
    }

    // pass state values upwards
    hadnleSubmit(evt){
        evt.preventDefault();
        const newbox = {...this.state, id : uuid()};
        this.props.createBox(newbox);
        this.setState({
            height : "",
            width: "",
            color : ""
        });
    }


    render() {
        return (
            <div>
                <form onSubmit={this.hadnleSubmit} >
                    <label htmlFor='height'>Height</label>
                    <input 
                        type='text' 
                        name='height' 
                        value={this.state.height} 
                        onChange={this.handleChange} 
                        id='height' 
                    />

                    <label htmlFor='width'>Width</label>
                    <input 
                        type='text'
                        name='width'
                        value={this.state.width}
                        onChange ={this.handleChange}
                        id='width'
                    />

                    <label htmlFor='color'>Color</label>
                    <input 
                        type='text'
                        name='color'
                        value={this.state.color}
                        onChange ={this.handleChange}
                        id='color'
                    />
                    <button>Create Box</button>
                </form>
            </div>
        );
    }

}
export default BoxForm;