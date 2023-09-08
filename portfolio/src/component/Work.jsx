import React from 'react'
// import weatherApp from '../../image/weatherApp.png'
// import todoListApp from '../../image/todoList.png'

const Work = () => {
  return (
    <div id='work'>
      <div style={{textAlign:"center"}}>
        <p className='sectionName'>My Work</p>
      </div>

      <div className='content'
      // style={{margin:"auto", width:"90vw", height:"70vh", alignItems:"center",justifyContent:"space-around", display:"flex"}}
      >
        <div className='workContent'
        // style={{margin:"20px", position:"relative", height:"40vh"}}
        >
          <a href='https://github.com/Manish-Chatterjee' target='_blank'>
            <img
              className='works'
              src=''
              alt='weather app'
              height="100%"
            />
            <div className='app'>
              <p>Weather App</p>
            </div>
          </a>
        </div>
        <div className='workContent'
        // style={{margin:"20px", position:"relative", height:"40vh"}}
        >
          <a href='https://github.com/Manish-Chatterjee' target='_blank'>
            <img
              className='works'
              src=''
              alt='weather app'
              height="100%"
            />
            <div className='app'>
              <p>TO-DO List</p>
            </div>
          </a>
        </div>
      </div>
      
    </div>
  )
}

export default Work
