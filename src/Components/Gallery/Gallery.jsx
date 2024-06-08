import React from 'react'
import './Gallery.css'
import img1 from '../../assets/program-1.png'
import img2 from '../../assets/program-2.png'
import img3 from '../../assets/program-3.png'


const Gallery = () => {
  let data = [
    {
      id:1,
      imgSrc:img1
    },
    {
      id:2,
      imgSrc:img2
    },
    {
      id:3,
      imgSrc:img3
    },
    {
      id:4,
      imgSrc:'https://www.lieben.no/wp-content/uploads/2019/11/petalvelvetaria10.jpg'
    },
    {
      id:5,
      imgSrc:'https://www.lieben.no/wp-content/uploads/2019/11/petalvelvetaria8.jpg'
    },
    {
      id:6,
      imgSrc:'https://www.lieben.no/wp-content/uploads/2019/12/albumbilder-4_web.jpg'
    },
    {
      id:7,
      imgSrc:'https://www.lieben.no/wp-content/uploads/2019/12/albumbilder-9_web.jpg'
    },
    {
      id:8,
      imgSrc:'https://www.lieben.no/wp-content/uploads/2019/11/petalvelvetaria8.jpg'
    },
    {
      id:9,
      imgSrc:'https://www.lieben.no/wp-content/uploads/2019/12/albumbilder-4_web.jpg'
    },
    {
      id:10,
      imgSrc:'https://www.lieben.no/wp-content/uploads/2019/12/albumbilder-9_web.jpg'
    },
    {
      id:11,
      imgSrc:img1
    },
    {
      id:12,
      imgSrc:img2
    },
    {
      id:13,
      imgSrc:img3
    },
  ]
  return (
    <div className="gallery ">
      {data.map((item,index)=>{
        return(
          <div className="pics" key={index}>
            <img src={item.imgSrc} style={{width:"100%"}} />
          </div>
        )
      })}
    </div>
  )
}

export default Gallery