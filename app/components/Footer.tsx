import React from 'react'

function Footer() {
  return (
    <footer className='text-center flex flex-col mb-10 px-4 py-1 text-gray-500 '>
        <small className='mb-2 text-xs block'>
            &copy; 2024 Noah Barkat. All rights reserved.
        </small>

        <p className='text-xs'>
            <span className='font-semibold'>About this website</span> built with React & Next.js(App Router & Server Actions),
            typescript, tailwindcss, framer-motion, react-email & resend, Vercel hosting. 
        </p>
      
    </footer>
  )
}

export default Footer
