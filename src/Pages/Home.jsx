import React from 'react'
import Services from '../Components/Services/Services'
import Contact from '../Components/Contact/Contact'
import img1 from '../assets/Commercial/_KVB8886.jpg'
import img2 from '../assets/Commercial/_KVB8889.jpg'
import img3 from '../assets/Commercial/_KVB8891.jpg'
import img4 from '../assets/Commercial/_KVB8911.jpg'
import Carousel from '../Components/Carousel/Carousel'
import CTA from '../Components/CTA/CTA';

// import { Parallax } from 'react-scroll-parallax';
// import { useParallax } from '../hooks/useparallax';

const Home = () => {
  const images=[img1,img2,img3,img4,img1,img2,img3,img4]
  // const parallaxProps = useParallax(0.5);

  return (
    <div className="container">
      {/* <Parallax y={[-20, 20]} tagouter="figure">
        <Carousel images={images} />
      </Parallax>
      <Parallax y={[-30, 30]} tagouter="figure">
        <Services />
      </Parallax>
      <Parallax y={[-30, 30]} tagouter="figure">
        <Contact />
      </Parallax> */}
      <Carousel images={images} />
      <Services />
      <CTA />
      <Contact />
    </div>
  );
}

export default Home