import React from 'react'
import "./index.scss"
import axios from "axios"
import { useEffect, } from 'react'
import Header from "../../layouts/header"
import { useState } from 'react'
import logoo02 from '../../logoo02.svg'
import {Helmet} from 'react-helmet'

const Home = () => {

  const [users,setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [input, setInput] =useState("")
 
  useEffect(()=>{
    getUsers()
  },[])
  const getUsers = async () => {
    try {
      setLoading(true);
      let response = await axios.get("http://localhost:8000/users/");
      setLoading(false);
      setUsers( response.data);
    } catch (error) {
      // setLoading(false);
      // console.log(error);
    }
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/users/${id}`).then(() => getUsers());
  };


  return (
    <div className='home'>
      <Helmet>
        <title>
          Home
        </title>
      </Helmet>
        <div className='container'>
          
          <div className='homes'>
            <div className='header1'>
            <Header/>
            </div>
            <div className='headerwrite'>
            <h1>GET YOUR</h1>
            <h1 className='hedertag'>EDUCATION</h1>
            <h1>TODAY!</h1>
            </div>
            </div>
            <input type="text" onChange={(e)=>setInput(e.target.value)} /> 
          <div className='map'>
          
            {
              users
              .filter((users)=>{
                return input.toLowerCase()===''
                ?users
                :users.data.toLowerCase().includes(input)
              })
              .map(q=>{
                return(
                  <>
                <div className='mapp' >
                  <img src={q.imgUrl} alt="" />
                  <p>{q.data}<br/>{q.data2}</p>
                  <button onClick={() => handleDelete(q._id)}>DeLeTe</button>
                </div>
                  
                
                </>
                )
                
              }
            )}
          </div>


          <div className='mains'>
            <div className='main1'>
              <h1>Register now and get a discount 50% discount until 1 January</h1>
              <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempo.</p>
              <button>REQISTER NOW</button>
            </div>
            <div className='main2'>
              <h1>Search for your course</h1>
              <input type="text" placeholder='Course Name' /><br/>
              <input type="text" placeholder='Category' /><br />
              <input type="text" placeholder='Deggre' /><br />
              <button>SEARCH COURSE</button>
            </div>
          </div>

          <div className='cardd'>
            <h1>Our Services</h1>
            <div className='cards'>
            <div className='card'>
              <img src={logoo02} alt="" />
              <h3>Online Courses</h3>
              <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
            </div>
            <div className='card'>
              <img src={logoo02} alt="" />
              <h3>Online Courses</h3>
              <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
            </div>
            <div className='card'>
              <img src={logoo02} alt="" />
              <h3>Online Courses</h3>
              <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
            </div>
            <div className='card'>
              <img src={logoo02} alt="" />
              <h3>Online Courses</h3>
              <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
            </div>
            <div className='card'>
              <img src={logoo02} alt="" />
              <h3>Online Courses</h3>
              <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
            </div>
            <div className='card'>
              <img src={logoo02} alt="" />
              <h3>Online Courses</h3>
              <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
            </div>
            </div>
          </div>

          

          
            

        </div>
    </div>
  )
}

export default Home