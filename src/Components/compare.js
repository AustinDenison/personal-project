import React, {Component} from 'react'
import './compare.css'

class Compare extends Component {
    render(){
        const {model, display, processor, video_card, memory, storage, battery, weight, price, image} = this.props.compare
        return(
            <div className='mini-compare'>
                {model}
            </div>
        )
    }
}

export default Compare