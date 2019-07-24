import React, {Component} from 'react'

class FilteredLaptop extends Component {
    render(){
        const {model, display, processor, video_card, memory, storage, battery, weight, price, image} = this.props.queries
        return(
            <div className='laptop-container'>
                <img src={image} alt='item' className='laptopImage'></img>
                <h5>{model}</h5>
                {/* <p>Display: {display}</p>
                <p>Processor: {processor}</p>
                <p>Video Card: {video_card}</p>
                <p>Memory: {memory}</p>
                <p>Storage: {storage}</p>
                <p>Battery: {battery}</p>
                <p>Weight: {weight}</p> */}
                <p className='price'>${price}</p>
            </div>
        )
    }
}

export default FilteredLaptop