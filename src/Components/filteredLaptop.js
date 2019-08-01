import React, {Component} from 'react'

class FilteredLaptop extends Component {

    handleCompare = (laptop) => {
        this.props.compareLaptop(laptop)    
    }

    handleAdd = (laptop) => {
        this.props.addToCart(laptop)
    }

    render(){
<<<<<<< HEAD
        const {model, display, processor, video_card, memory, storage, battery, weight, price, image} = this.props.queries
=======
        const {model, price, image} = this.props.queries
>>>>>>> 83a29f28b0cad2164bb26e8f9d2c40f2b9fd4685
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