import React, {Component} from 'react'
import './search.css'

class Search extends Component {
    render(){
        return(
            <div className='search-container'>
                <div className='search'></div>
                <div className='laptops'></div>
                <div className='compare'></div>
            </div>
        )
    }
}

export default Search