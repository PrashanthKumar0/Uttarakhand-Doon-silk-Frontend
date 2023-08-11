import React from 'react'
import Heading from "@/components/Heading/Heading";
export default function page() {
  return (
    <div className='container mb-24 lg:mb-32'>
        <div className='px-6 pt-10 pb-5'>
        <Heading
        desc=" We’re impartial and independent, and every day we create distinctive,
          world-class programmes and content"
      >
        🚀 Updates
      </Heading>
        </div>
      
        <div className='row'>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 text-center'>
                <div className='py-4 px-2' style={{backgroundColor:'#e5e7eb6e'}}>
                <h4 class="text-2xl font-semibold leading-none p-3 text-neutral-900 md:text-3xl dark:text-neutral-200">Tender</h4>
                <div className='py-2'>
                <div style={{backgroundColor:'white', borderRadius:'10px'}} className='p-1 mx-1 text-neutral-800 '>
                 get pancakes
                </div>
                </div>
               
                </div>
                <div className='p-5' style={{backgroundColor:'#e5e7eb6e'}}>
                <h4 class="text-2xl font-semibold leading-none p-3 text-neutral-900 md:text-3xl dark:text-neutral-200">Notices</h4>
                <div className='py-2'>
                <div style={{backgroundColor:'white', borderRadius:'10px'}} className='p-1 mx-1 text-neutral-800 '>
                 get pancakes
                </div>
                </div>
                </div>
                <div className='p-6' style={{backgroundColor:'#e5e7eb6e'}}>
                <h4 class="text-2xl font-semibold leading-none p-3 text-neutral-900 md:text-3xl dark:text-neutral-200">Announcement</h4>
                <div className='py-2'>
                <div style={{backgroundColor:'white', borderRadius:'10px'}} className='p-1 mx-1 text-neutral-800 '>
                 get pancakes
                </div>
                </div>
                </div>

            </div>
        </div>
    </div>
  )
}
