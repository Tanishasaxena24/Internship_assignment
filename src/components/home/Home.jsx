import React from 'react'
import { Link } from 'react-router-dom'
import { CiYoutube } from "react-icons/ci";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { BsFillBookmarkStarFill } from "react-icons/bs";


function Home() {
  return (
    <>
    <div className='flex mt-10'>
    <div className='ml-44 mt-10 flex-1 max-w-2xl'>
        <h1 className=' font-extrabold text-4xl'>Make The Best
            <br />
            Financial Decisions
        </h1>
        <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, libero. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus natus deleniti quasi omnis, ea</p>
        <div className='flex'>
      <Link to="/getstarted">  <button className='bg-black text-white p-3 mt-3'> Get Started →</button></Link>
        <a href="https://www.loom.com/share/1735f90b5e464089935cd1dff4fca2b8?sid=ca423c04-d553-4631-97d7-fb84aa1766b6" target='_blank'><button className='ml-10 flex mt-7 font-bold'>
        <CiYoutube className='mr-3 text-2xl' />Watch Video</button> </a>  
    </div>
    <div className='mt-10 ml-5 mb-3'>
    <img className='object-contain' src="/time.png" alt="zigzag" />
    </div>
    </div>
<div className="flex-1 relative w-96 h-96 ml-44">
      {/* rings Image */}
      <img
        src="/rings.png"
        alt="Background"
        className="w-96 h-auto object-contain object-center ml-16 "
      />
      {/* phones Image */}
      <img
        src="herophn.png"
        alt="Superimposed"
        className="absolute top-0 left-0 h-screen object-contain object-center"
      />
    </div>


    </div>
    


    <div className='flex flex-col lg:flex-row mt-5 h-auto lg:h-screen'>
        <div className="lg:ml-32 mt-10 flex-1 relative w-full lg:w-96 h-96">
          {/* rings Image */}
          <img
            src="/eclipse.png"
            alt="Background"
            className="w-full h-auto object-cover object-center lg:mr-96"
          />
          {/* phones Image */}
          <img
            src="features.png"
            alt="Superimposed"
            className="absolute ml-0 lg:ml-20 top-0 left-0 h-full lg:h-screen object-contain object-center"
          />
        </div>
        <div className='flex-1 lg:mr-32 h-auto lg:h-screen mt-10 lg:mt-36 px-4'>
          <h2 className='text-red-500 font-semibold'>FEATURES</h2>
          <h1 className='font-extrabold text-2xl lg:text-3xl'>Uifry Premium</h1>
          <div className='mt-10'>
            <h2 className='font-semibold mb-3'>✶ Budgetary Intervals</h2>
            <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolore itaque aperiam ad harum enim ex error quaerat eligendi illum.</p>
            <h2 className='font-semibold mb-3'>✶ Budgetary Intervals</h2>
            <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolore itaque aperiam ad harum enim ex error quaerat eligendi illum.</p>
            <h2 className='font-semibold mb-3'>✶ Budgetary Intervals</h2>
            <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolore itaque aperiam ad harum enim ex error quaerat eligendi illum.</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row mt-10 h-auto lg:h-screen'>
        <div className='lg:ml-32 mt-10 lg:mt-56 flex-1 justify-center px-4'>
          <h2 className='text-red-500 font-semibold'>ADVANTAGES</h2>
          <h1 className='text-2xl lg:text-3xl font-extrabold'>Why Choose Uifry?</h1>
          <div className='flex items-center mt-7'>
            <IoNotificationsCircleSharp className='mr-2 text-3xl text-red-500' />
            <h2 className='text-xl lg:text-2xl font-bold'>Clever Notifications</h2>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis magnam illum obcaecati quisquam mollitia? Nihil, enim sapiente asperiores possimus tempore quas illo ratione reiciendis quam pariatur voluptatibus magni corporis officia. Eaque voluptatem alias quam debitis obcaecati harum dolores ad molestiae.</p>
        </div>
        <div className="lg:ml-32 mt-10 flex-1 relative w-full lg:w-96 h-96 justify-center">
          {/* rings Image */}
          <img
            src="/eclipse.png"
            alt="Background"
            className="w-full h-auto object-cover object-center lg:mr-96 mt-20"
          />
          {/* phones Image */}
          <img
            src="advantages.png"
            alt="Superimposed"
            className="absolute ml-0 lg:ml-20 top-0 left-0 h-full lg:h-screen object-contain object-center"
          />
        </div>
      </div>
      <div className='flex flex-col lg:flex-row h-auto lg:h-screen'>
        <div className="lg:ml-32 mt-10 flex-1 relative w-full lg:w-96 h-96">
          {/* rings Image */}
          <img
            src="/eclipse.png"
            alt="Background"
            className="w-full h-auto object-cover object-center lg:mr-96 mt-20"
          />
          {/* phones Image */}
          <img
            src="customized.png"
            alt="Superimposed"
            className="absolute ml-0 lg:ml-20 top-0 left-0 h-full lg:h-screen object-contain object-center"
          />
        </div>
        <div className='lg:ml-32 mr-4 lg:mr-44 mt-10 lg:mt-56 flex-1 justify-center px-4'>
          <div className='flex items-center'>
            <BsFillBookmarkStarFill className='mr-2 text-3xl text-red-500' />
            <h2 className='text-xl lg:text-2xl font-bold mb-3'>Fully Customizable</h2>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis magnam illum obcaecati quisquam mollitia? Nihil, enim sapiente asperiores possimus tempore quas illo ratione reiciendis quam pariatur voluptatibus magni corporis officia. Eaque voluptatem alias quam debitis obcaecati harum dolores ad molestiae.</p>
        </div>
      </div>

      <div className='h-auto lg:h-screen px-4 lg:px-0'>
  <div className='text-center flex flex-col justify-center mt-10 lg:mt-0'>
    <h3>TESTIMONIALS</h3>
    <h1 className='text-2xl lg:text-3xl font-extrabold'>
      What customers
      <br />
      say about us?
    </h1>
  </div>
  <div className='flex flex-col lg:flex-row mt-10 lg:mt-0'>
    <div className='flex-1'>
      <img className='object-center w-full h-60 lg:h-screen' src="links.png" alt="links" />  
    </div>
    <div className='flex-1 mt-10 lg:ml-32 lg:mr-44 lg:mt-48 justify-center px-4 lg:px-0'>
      <div className='flex'>
        <h2 className='text-xl lg:text-2xl font-extrabold mb-3'>
          The Best Financial Accounting
          <br />
          App Ever!
        </h2>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis magnam illum obcaecati quisquam mollitia? Nihil, enim sapiente asperiores possimus tempore quas illo ratione reiciendis quam pariatur voluptatibus magni corporis officia. Eaque voluptatem alias quam debitis obcaecati harum dolores ad molestiae.</p>
    </div>
  </div>
</div>


<div className='h-auto lg:h-screen lg:ml-32 px-4 lg:px-0'>
  <div className='lg:ml-20 mt-10 lg:mt-0'>
    <h2 className='text-red-500 font-bold'>FAQ</h2>
    <h1 className='text-2xl lg:text-3xl font-extrabold'>
      Frequently Asked
      <br />
      Questions
    </h1>
  </div>
  <div className='flex flex-col lg:flex-row justify-center p-5 lg:p-10 lg:ml-10'>
    <div className='flex-1 bg-red-500 rounded-lg p-3 mb-5 lg:mb-0 lg:mr-3 text-white'>
      <h1 className='text-lg lg:text-xl font-bold'>The Best Financial App Ever!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, sunt!</p>
    </div>
    <div className='flex-1 bg-white rounded-lg p-3 mb-5 lg:mb-0 lg:mr-3'>
      <h1 className='text-lg lg:text-xl font-bold'>The Best Financial App Ever!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, sunt!</p>
    </div>
  </div>
  <div className='flex flex-col lg:flex-row justify-center p-5 lg:p-10 lg:ml-10'>
    <div className='flex-1 bg-white rounded-lg p-3 mb-5 lg:mb-0 lg:mr-3'>
      <h1 className='text-lg lg:text-xl font-bold'>The Best Financial App Ever!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, sunt!</p>
    </div>
    <div className='flex-1 bg-red-500 rounded-lg p-3 mb-5 lg:mb-0 lg:mr-3 text-white'>
      <h1 className='text-lg lg:text-xl font-bold'>The Best Financial App Ever!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, sunt!</p>
    </div>
  </div>
  <div className='flex flex-col lg:flex-row justify-center p-5 lg:p-10 lg:ml-10'>
    <div className='flex-1 bg-red-500 rounded-lg p-3 mb-5 lg:mb-0 lg:mr-3 text-white'>
      <h1 className='text-lg lg:text-xl font-bold'>The Best Financial App Ever!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, sunt!</p>
    </div>
    <div className='flex-1 bg-white rounded-lg p-3 mb-5 lg:mb-0 lg:mr-3'>
      <h1 className='text-lg lg:text-xl font-bold'>The Best Financial App Ever!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, sunt!</p>
    </div>
  </div>
</div>


<div className="bg-black text-white p-10 flex flex-col md:flex-row items-center justify-center mx-4 lg:mx-10 h-auto lg:h-screen">
  <div className="mb-8 md:mb-0 md:w-1/2 text-center md:text-left">
    <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready To Get Started?</h2>
    <p className="text-base md:text-lg mb-4">Risus Habitant Leo Egestas Mauris Diam Eget Morbi Tempus Vulputate.</p>
    <button className="bg-white text-black font-semibold py-2 px-4 rounded flex items-center mx-auto md:mx-0">
      <span>Download App</span>
      <img className="ml-2 h-6" src="/apple.png" alt="Apple logo" />
    </button>
  </div>
  <div className="md:w-1/2 flex justify-center">
    <img src="/phones.png" alt="App preview" className="h-auto object-contain w-full md:w-auto" />
  </div>
</div>



    </>


  )
}

export default Home;
