import React from 'react'

export const LinkedFooter = () => {
  return (
    <div>
        <div className='flex gap-20'>
            <ul className='font-bold text-gray-300 space-y-8 py-6'>
            <h1 className='font-bold text-white text-3xl'>Company</h1>
                <li>About</li>
                <li>Pricing</li>
                <li>Blog</li>
                <li>Interation</li>
            </ul>
            <ul className='font-bold text-gray-300 space-y-8 py-6'>
            <h1 className='font-bold text-white text-3xl'>Resource</h1>
                <li>Help Center</li>
                <li>Partner Program</li>
                <li>SaaS Comparation</li>
                <li>Academy</li>
            </ul>
            <ul className='font-bold text-gray-300 space-y-8 py-6'>
            <h1 className='font-bold text-white text-3xl'>Support</h1>
                <li>Community</li>
                <li>Knowledge Base</li>
                <li>NewsLetter</li>
            </ul>
        </div>
    </div>
  )
}
