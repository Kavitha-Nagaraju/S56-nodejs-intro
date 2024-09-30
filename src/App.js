import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [product,setProducts]=useState([]);
  let requestType=async()=>{
   let request={
      method:"GET",
    };
    let JSONData = await fetch("https://reqres.in/api/users?page=2",request);
    let JSOData = await JSONData.json();
    console.log(JSOData.data);
    setProducts(JSOData.data);
  };
  return (
    <div className="App">
    <button onClick={()=>{
       requestType();
    }}>Get Data</button>
    {product.map((ele,i)=>{
        return <div>
          <h4>{ele.total}</h4>
          <h2>{ele.first_name},{ele.last_name}</h2>
          <img src={ele.avatar}></img>
          </div>
    })}

    </div>
  );
}

export default App;
