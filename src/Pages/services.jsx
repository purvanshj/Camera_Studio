import React, { useEffect, useState } from 'react'
import Title from '../Components/Title/Title'
import About from '../Components/About/About'
import { useParams } from "react-router-dom";

const services = () => {
    const { id } = useParams(); // Get the id parameter from URL
    const [servicesData, setServicesData] = useState(null);
  console.log(id);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('/data.json');
          const jsonData = await response.json();
          console.log(jsonData.Services);
          const filteredService = jsonData.Services.filter(service => service.id === parseInt(id));
  console.log(filteredService);
          setServicesData(filteredService);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, [id]);
  console.log(servicesData);
  return (
    <div className='container'>

    {servicesData ? (
            <>
                <Title title={servicesData[0].name}/>
                <About data={servicesData[0]}/>
            </>
        ) : (
            <p>Loading...</p>
        )}
    
    </div>
  )
}

export default services