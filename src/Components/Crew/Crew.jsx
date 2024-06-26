import React from 'react'
import './Crew.css'
import crew_1 from '../../assets/program-1.png'
import crew_2 from '../../assets/program-2.png'
import crew_3 from '../../assets/program-3.png'

const Crew = () => {
  return (
    <div className="crew-container">
    <div className="box">
        <div className="imgBox">
            <img src={crew_1} alt=""/>
        </div>
        <div className="content">
            <h2>Karan Singh <br />
            <span>Graphic Designer</span></h2>
        </div>
    </div>
    <div className="box">
        <div className="imgBox">
            <img src={crew_2} alt=""/>
        </div>
        <div className="content">
            <h2>Dolly Seth <br />
            <span>Digital Marketing</span></h2>
        </div>
    </div>
    <div className="box">
        <div className="imgBox">
            <img src={crew_3} alt=""/>
        </div>
        <div className="content">
            <h2>Aakash Agrawal<br/>
            <span>Chartered Accountant</span></h2>
        </div>
    </div>
    <div className="box">
        <div className="imgBox">
            <img src={crew_1} alt=""/>
        </div>
        <div className="content">
            <h2>Karan Singh <br />
            <span>Graphic Designer</span></h2>
        </div>
    </div>
    <div className="box">
        <div className="imgBox">
            <img src={crew_2} alt=""/>
        </div>
        <div className="content">
            <h2>Dolly Seth <br />
            <span>Digital Marketing</span></h2>
        </div>
    </div>
    <div className="box">
        <div className="imgBox">
            <img src={crew_3} alt=""/>
        </div>
        <div className="content">
            <h2>Aakash Agrawal<br/>
            <span>Chartered Accountant</span></h2>
        </div>
    </div>
</div>
  )
}

export default Crew