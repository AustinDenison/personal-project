import React, {Component} from 'react'
import './comparedLaptops.css'

class ComparedLaptops extends Component {
    render(){
        const {model, display, processor, video_card, memory, storage, battery, weight, price, image} = this.props.compare
        return (
          <div className='display-compare'>
            <div className="top-container">
              <div className="compare-laptops">
                <img src={image} alt="item" className="laptopImage" />
                <h5>{model}</h5>
                <div className="price">${price}</div>
              </div>
            </div>
            <div className="spec-container">
              <div className='compared-spec'>Processor: {processor}</div>
              <div className='compared-spec'>Video Card: {video_card}</div>
              <div className='compared-spec'>Display: {display}</div>
              <div className='compared-spec'>Memory: {memory}</div>
              <div className='compared-spec'>Storage: {storage}</div>
              <div className='compared-spec'>Battery: {battery}</div>
              <div className='compared-spec'>Weight: {weight}</div>
            </div>
          </div>
        );
    }
}

export default ComparedLaptops