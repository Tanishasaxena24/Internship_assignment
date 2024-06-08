import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white text-black py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
                <div>
                <div className="flex items-center mb-4">
                        <img className='object-contain h-7 mr-2' src="/logo.png" alt="logo" />
                        <h3 className="text-lg font-bold">Uifry</h3>
                    </div>
                    <div className="flex items-center mb-4">
                        <img className='object-contain h-5 mr-2' src="/email.png" alt="logo" />
                        <h3 className="text-sm ml-2 font-semibold">Help@FryBox.Com</h3>
                    </div>
                    <div className="flex items-center mb-4">
                        <img className='object-contain h-5 mr-2' src="/phn.png" alt="logo" />
                        <h3 className="text-sm ml-2 font-semibold">+1234 456 678 89</h3>
                    </div>
                    
                </div>
                <div>
                    <h3 className="text-2xl font-semibold mb-4">Links</h3>
                    <ul className='font-semibold'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Bookings</a>
                        </li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold mb-4">Legal</h3>
                    <ul className='font-semibold'>
                    <li><a href="#">Terms of use </a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Cookie Policy</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold mb-4">Product</h3>
                    <ul className='font-semibold'>
                        <li><a href="#">Take tour</a></li>
                        <li><a href="#">Live chats</a></li>
                        <li><a href="#">Reviews chats</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold mb-4">Newsletter</h3>
                    <p className='font-semibold'>Stay up to date</p>
                    <form className="mt-2 flex">
                        <input type="email" placeholder="Your email" className="bg-white rounded-md px-4 py-2 w-full" />
                        <button type="submit" className="bg-black text-white rounded-sm px-4 py-2 mt-2">Subscribe</button>
                    </form>
                </div>
              
            </div>
<hr className='mt-10' />
            <div className='flex justify-center text-center mt-10 font-semibold'>
        <p>Copyright 2022 Uifry.com. All Rights Reserved</p>
      </div>
        </footer>
    );
};

export default Footer;
