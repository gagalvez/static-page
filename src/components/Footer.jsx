import React from 'react'

const Footer = () => {
  return (
    <footer className="flex flex-col w-full bg-emerald-900 py-4 px-16 text-white">
      <div className="flex justify-between">
        <div className="w-[360px] flex flex-col items-center gap-2">
          <img src="/logo.png" alt="" className="w-[100px]" />
          <h5 className="">HavenGreen</h5>
          <p className="text-center">
            For more information leave yor email and an ejecutive will contact
            you
          </p>
        </div>

        <div className="w-full px-12 flex flex-row justify-around py-8">
          <div className="flex flex-col items-start gap-6">
            <h1 className="font-black">Quick menu</h1>
            <p>Home</p>
            <p>Rent</p>
            <p>Sell</p>
          </div>
          <div className="flex flex-col items-start gap-6">
            <h1 className="font-black">About us</h1>
            <p>Mission</p>
            <p>Vision</p>
            <p>Team</p>
          </div>
          <div className="flex flex-col items-start gap-6">
            <h1 className="font-black">Contacto info</h1>
            <p>123 Greenway Avenue, Springfield, USA</p>
            <p>+1 (555) 987-6543</p>
            <p>contact@havengreen.com</p>
          </div>
        </div>
      </div>

      <div className="w-[80%] border-t border-white my-6 mx-auto"></div>
      <div className="flex justify-center space-x-6">
        <p className="text-center text-sm font-light">
          © 2025 HavenGreen. All rights reserved.
        </p>
      </div>
    </footer>
  );
};


export default Footer
