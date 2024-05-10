

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './Home';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Navbar2 from './Navbar2';
// import { links } from './Navbar2';
// import styles from '~/styles/home.css'
// import Demo from '~/routes/demo'


const Fetch = () => {
  const [data, setData] = useState([]);
  const [data2,setData2]=useState(true);
  // interface Product {
  //   id: number;
  //   title: string;
  //   description: string;
  //   image: string;
  //   price:number
    
  // }

  function filterItems(){
    let filteredData=data.filter((item)=>{
      return item.price>100&&item.price<500
    })
    setData(filteredData)

  }
 
  

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products/");
      setData(response.data);
    } catch (error) {
      console.log(error, "Error fetching data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(()=>{
    fetchData()
  },[data2])

  return (
    <>
    <Home/>
    <button onClick={filterItems}>Filter</button>
    <button onClick={()=>setData2(!data2)}>Display All</button>
    {/* <Demo/> */}
    <div className="flex flex-wrap justify-center">
      {data.map((item, index) => (
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" src={item.image} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{item.title}</div>
    <p className="text-gray-700 text-base">
     {item.description}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
      ))}
    </div>
    </>
  );
};

export default Fetch;
