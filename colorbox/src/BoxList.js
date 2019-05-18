import React, {Component} from 'react';
import BoxForm from './BoxForm';
import Box from './Box';

class BoxList extends Component{
    
    constructor(props){
        super(props);
        this.state ={
            boxes: [
                
            ]
        };

        this.createBox = this.createBox.bind(this);
        this.deleteBox = this.deleteBox.bind(this);
    }
    //take boxes passed from form and add into box list
    createBox(newBox){
        this.setState({
            boxes : [...this.state.boxes, newBox]
        });
    }

    deleteBox(id){
        this.setState({
            boxes : this.state.boxes.filter(box => box.id !== id)
        });
    }

    render(){

        const boxes = this.state.boxes.map( b => (
            <Box 
                key = {b.id}
                id = {b.id}
                height = {b.height} 
                width={b.width} 
                color={b.color}  
                delete = {this.deleteBox}
            />
        ));

        return(
            <div>
                
                {/* pass fucntion as property to child component */}
                <BoxForm createBox={this.createBox} />
                <hr />
                {boxes}
            </div>
        );
        
    }

}
export default BoxList;