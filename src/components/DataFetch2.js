import React, { useEffect, useState } from "react";
import axios from "axios";
const DataFetch2 = () => {
  const [data, setData] = useState({});
  const [id,setId] = useState()
  const [btnclick,setBtnClick] =useState()

  const handlebtnclick =()=>{
    setBtnClick(id)
  }


  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setBtnClick]);

  return (
  <div>
    <input type="text" value={id} onChange={e => setData(e.target.value)}/>
    <button type="button" onClick={handlebtnclick}>Fetch Post</button>
    <div>{data.title}</div>
  </div>
  )
};

export default DataFetch2;
