import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

export const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
        <div className="flex flex-col items-center">
  <a
    href="#"
    className={`font-bold text-[32px] sm:text-[20px] md:text-[28px] lg:text-[32px] ${
      isDarkMode ? "text-white" : "text-[#1a1a1a]"
    }`}
  >
    Deepak.dev
    <span
      className={`leading-none ${
        isDarkMode ? "text-white" : "text-[#e51b5a]"
      }`}
    >
      .
    </span>
  </a>

  <div className="flex items-center gap-2 mt-2">
    <Image
      src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
      alt="mail"
      className="w-6"
    />
    imdeepak.info@gmail.com
  </div>
</div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>Copyright &copy; 2025 Deepak.dev.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a href="https://github.com/dipthakur" target='_blank'>GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/deepakthakur99/" target='_blank'>LinkedIn</a></li>
                <li><a href="https://www.linkedin.com/in/deepakthakur99/" target='_blank'>Twitter</a></li>
            </ul>
        </div>
    </div>
  )
}
