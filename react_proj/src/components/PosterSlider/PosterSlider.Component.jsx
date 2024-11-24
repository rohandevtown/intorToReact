import React from 'react'
import Slider from 'react-slick'
import Poster from '../Poster/Poster.Component'

const PosterSlider = (props) => {
    const {posters, title, subtitle, isDark} = props;
    const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 4,
    };

  return (
    <>
        <div className=' flex flex-col items-start sm:ml-3 my-2'>
            <h3 className={`text-2xl font-bold ${isDark ? 'text-white': 'text-black'}`}>{title}</h3>
            <p className={`text-sm  ${isDark ? 'text-white': 'text-black'}`}>{subtitle }</p>
        </div>
        <Slider {...settings}>
            {posters.map((each)=> (
                <Poster {...each} isDark={isDark} />
            ))}
        </Slider>
    </>
  )
}

export default PosterSlider