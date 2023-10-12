import Link from 'next/link';
import React from 'react'

export default function TextTender({txt}) {
  const url = (new RegExp("(http[s]?:\/\/.{0,})")).exec(txt)[0];
  txt = txt.split(url);
  return (
    <div className='py-2'>
    <div style={{backgroundColor:'white', borderRadius:'10px'}} className='p-1 mx-1 text-neutral-800 '>
   <div className='px-2 downloadbtn'>
    {txt[0]}
      { url?
        <Link href={url}>url</Link>:''
      }
    {txt[1]}
   </div>
   </div>
   </div>
  )
}
