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
                <div className="price">{price}</div>
              </div>
            </div>
            <div className="spec-container">
              <div>Processor: {processor}</div>
              <div>Video Card: {video_card}</div>
              <div>Display: {display}</div>
              <div>Memory: {memory}</div>
              <div>Storage: {storage}</div>
              <div>Battery: {battery}</div>
              <div>Weight: {weight}</div>
            </div>
          </div>
        );
    }
}

export default ComparedLaptops