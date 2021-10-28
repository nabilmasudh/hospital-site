import React from 'react'
import {infoData} from '../../data'
import './HomeInfo.css';

function HomeInfo() {
    return (
        <section className='homeInfo-section'>
            <div className='home-info-center' id="container">
                {infoData.map((item, index)=>{
                    const {icon, title, text} = item;
                    return <div className='home-info' key={index}>
                        <div className='home-info-image'>
                            <img src={icon} alt={title}/>
                        </div>
                        <div className='home-info-text'>
                            <span>{title}</span>
                            <p>{text}</p>
                        </div>
                    </div>
                })}
            </div>
        </section>
    )
}

export default HomeInfo
