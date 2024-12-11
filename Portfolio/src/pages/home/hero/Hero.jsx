import React from 'react'

const Hero = () => {
  return (
    <div className='hero-container'>

    {/*  hero content section */}
    <div className="hero-content">
        {/* full name */}
        <h1 className="fullname">HI, I AM KHEM RAJ BAJGAIN</h1>
        {/* postition */}
        <h2 className="position">I am full stack developer</h2>
        {/* description */}
        <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tenetur, doloribus suscipit velit expedita asperiores neque similique eaque illo quaerat veritatis quos totam veniam odio!
        </p>
        {/* button */}
        <div className="hero-btn-group">
            <button className='btn-primary'>Download CV</button>
            <button className='btn-secondary'>Hire Me</button>
        </div>
    </div>
    {/* hero image section */}
    </div>
  )
}

export default Hero
