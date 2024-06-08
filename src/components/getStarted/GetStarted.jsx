import React from 'react'

function GetStarted() {
  return (
    <div className="bg-black  text-white p-10 flex flex-col md:flex-row items-center justify-center m-10 h-screen">
            <div className="mb-8 md:mb-0 md:w-1/2">
                <h2 className="text-5xl font-bold mb-6">Ready To Get Started?</h2>
                <p className="text-lg mb-4">Risus Habitant Leo Egestas Mauris Diam Eget Morbi Tempus Vulputate.</p>
                <button className="bg-white text-black font-semibold py-2 px-4 rounded flex items-center">
                    <span>Download App</span>
                    <img className="ml-2 h-6" src="/apple.png" alt="Apple logo" />
                </button>
            </div>
            <div className="md:w-1/2 flex justify-center">
                <img src="/phones.png" alt="App preview" className=" h-auto object-contain" />
            </div>
        </div>
  )
}

export default GetStarted
