// import React from 'react'
// import { CiYoutube } from "react-icons/ci";
// import { IoNotificationsCircleSharp } from "react-icons/io5";
// import { BsFillBookmarkStarFill } from "react-icons/bs";

// function Features() {
//   return (
//     <>
//     <div className='flex mt-5 h-screen'>
//         <div className="ml-32 mt-10 flex-1 relative w-96 h-96">
//       {/* rings Image */}
//       <img
//         src="/eclipse.png"
//         alt="Background"
//         className="w-full h-auto object-cover object-center mr-96"
//       />
//       {/* phones Image */}
//       <img
//         src="features.png"
//         alt="Superimposed"
//         className="absolute ml-20 top-0 left-0 h-screen object-contain object-center"
//       />
//     </div>
//     <div className='flex-1 mr-32 h-screen mt-36'>
//     <h2 className='text-red-500 font-semibold'>FEATURES</h2>
//             <h1 className='font-extrabold text-3xl'>Uifry Premium</h1>
//             <div className='mt-10'>
//                 <h2 className='font-semibold mb-3'>✶ Budgetary Intervals</h2>
//                 <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolore itaque aperiam ad harum enim ex error quaerat eligendi illum.</p>
//                 <h2 className='font-semibold mb-3'>✶ Budgetary Intervals</h2>
//                 <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolore itaque aperiam ad harum enim ex error quaerat eligendi illum.</p>
//                 <h2 className='font-semibold mb-3'>✶ Budgetary Intervals</h2>
//                 <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolore itaque aperiam ad harum enim ex error quaerat eligendi illum.</p>
                
//     </div>
//     </div>

//     </div>
//     <div className='flex mt-10 h-screen'>
//     <div className='ml-32 mt-56 flex-1 justify-center '>
//         <h2 className='text-red-500 font-semibold'>ADVANTAGES</h2>
//         <h1 className='text-3xl font-extrabold'>Why Choose Uifry ?</h1>
//         <div className='flex'><IoNotificationsCircleSharp className='mt-7 mr-2 text-3xl text-red-500' />
//         <h2 className='text-2xl mt-7 font-bold mb-3'>Clever Notifications</h2></div>
//         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis magnam illum obcaecati quisquam mollitia? Nihil, enim sapiente asperiores possimus tempore quas illo ratione reiciendis quam pariatur voluptatibus magni corporis officia. Eaque voluptatem alias quam debitis obcaecati harum dolores ad molestiae.</p>
//         </div>

//         <div className="ml-32 mt-10 flex-1 relative w-96 h-96 justify-center ">
//       {/* rings Image */}
//       <img
//         src="/eclipse.png"
//         alt="Background"
//         className="w-full h-auto object-cover object-center mr-96 mt-20"
//       />
//       {/* phones Image */}
//       <img
//         src="advantages.png"
//         alt="Superimposed"
//         className="absolute ml-20 top-0 left-0 h-screen object-contain object-center"
//       />
//     </div>
        
//     </div>

//     <div className='flex h-screen'>
//     <div className="ml-32 mt-10 flex-1 relative w-96 h-96">
//       {/* rings Image */}
//       <img
//         src="/eclipse.png"
//         alt="Background"
//         className="w-full h-auto object-cover object-center mr-96 mt-20"
//       />
//       {/* phones Image */}
//       <img
//         src="customized.png"
//         alt="Superimposed"
//         className="absolute ml-20 top-0 left-0 h-screen object-contain object-center"
//       />
//     </div>
//     <div className='ml-32 mr-44 mt-56 flex-1 justify-center'>
//         <div className='flex'><BsFillBookmarkStarFill className='mt-7 mr-2 text-3xl text-red-500' />
//         <h2 className='text-2xl mt-7 font-bold mb-3'>Fully Customizable</h2></div>
//         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis magnam illum obcaecati quisquam mollitia? Nihil, enim sapiente asperiores possimus tempore quas illo ratione reiciendis quam pariatur voluptatibus magni corporis officia. Eaque voluptatem alias quam debitis obcaecati harum dolores ad molestiae.</p>
//         </div>
//     </div>
//     </>
//   )
// }

// export default Features



import React from 'react';
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { BsFillBookmarkStarFill } from "react-icons/bs";

function Features() {
  return (
    <>
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
    </>
  )
}

export default Features;
