import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(()=> {
        fetch("https://api.github.com/users/hiteshchoudhary")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    }, [])
  return (
    <div className='bg-gray-700 text-center text-white text-4xl p-5 m-4'>
      Github Followers : {data.followers}
      <img src={data.avatar_url} alt='Github Picture' width={300} />
    </div>
  )
}

export default Github
