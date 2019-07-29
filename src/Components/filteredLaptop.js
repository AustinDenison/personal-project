import React, {Component} from 'react'

class FilteredLaptop extends Component {

    handleCompare = (laptop) => {
        this.props.compareLaptop(laptop)    
    }

    handleAdd = (laptop) => {
        this.props.addToCart(laptop)
    }

    render(){
        const {model, display, processor, video_card, memory, storage, battery, weight, price, image} = this.props.queries
        return(
            <div className='laptop-container'>
                <div className='image-container'>
                <img src={image} alt='item' className='laptopImage'></img>
                </div>
                <div className='spec'>
                <h5>{model}</h5>
                <p className='price'>${price}</p>
                <div>
                <button onClick={() => this.handleCompare(this.props.queries)}>Compare</button>
                <button onClick={() => this.handleAdd(this.props.queries)}>Add To Cart</button>
                </div>
                </div>
            </div>
        )
    }
}

export default FilteredLaptop