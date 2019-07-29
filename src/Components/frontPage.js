import React from "react";
import { Slide } from "react-slideshow-image";
import "./frontPage.css";
import Microlink from '@microlink/react'

function FrontPage() {
  const slideImages = [
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
    "https://images.unsplash.com/photo-1556565681-67b9cd907d20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
    'https://images.unsplash.com/photo-1528243097678-739049bbf2e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60'
  ];

  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    // onChange: (oldIndex, newIndex) => {
    //   console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    // }
  };

  const slideShow = () => {
    return (
      <div className="frontPage">
          <div >
        <Slide {...properties} className='slider'>
          <div >
            <div className='img' style={{ backgroundImage: `url(${slideImages[0]})`}}></div>
          </div>
          <div >
            <div className='img' style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
          </div>
          <div >
            <div className='img' style={{ backgroundImage: `url(${slideImages[2]})` }}></div>
          </div>
        </Slide>
        </div>
        <div className="article-container">
          <div className="article" >
              <Microlink url='https://www.laptopmag.com/articles/laptop-buying-guide' size='large' />
          </div>
          <div className="article" >
              <Microlink url='https://bytescout.com/blog/laptops-for-programming.html' size='large' />
          </div>
          <div className="article" >
              <Microlink url='https://www.cnet.com/news/best-laptops-for-college-students-in-2019/' size='large' />
          </div>
        </div>
      </div>
    );
  };

  return slideShow();
}

export default FrontPage;
