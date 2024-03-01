import React from 'react'
import { useSelector } from 'react-redux'

const DisplayUsers = () => {
    const data = useSelector((store) => store.user);
    console.log(data);
    const data2 = useSelector((store) => store.shop)
    console.log(data2)
    const data3= useSelector((store) => store.school)
    console.log(data3)
  return (
    <div>
      
    </div>
  )
}

export default DisplayUsers