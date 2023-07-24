import React from 'react'
import placeholder from '../assets/imageplaceholder.jpg'

function About() {
    return (
        <div>
            <h1>About Us</h1>
            <div className='bios'>
                <div className='taylan-about'>
                    <img className='taylan image' src={placeholder} alt="taylan image" />
                    <h2 className='taylan-name'>Taylan Dobbs</h2>
                    <p className='taylan-bio'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque excepturi vero facilis alias officia veniam enim numquam quae qui odit neque culpa consequuntur corrupti, nam magni itaque molestias voluptates. Voluptas.</p>
                </div>
                <div className='alex-about'>
                    <img className='alex-image' src={placeholder} alt="alex image" />
                    <h2 className='alex-name'>Alex Clayton</h2>
                    <p className='alex-bio'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae inventore laborum molestias autem ducimus dignissimos provident ullam magnam facilis qui sunt vitae ipsum, corrupti impedit praesentium cum unde minima omnis?</p>
                </div>
            </div>
        </div>
    )
}

export default About