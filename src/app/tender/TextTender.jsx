import Link from 'next/link';
import React from 'react'

export default function TextTender({ txt }) {
  const url = (new RegExp("(http[s]?:\/\/.{0,})")).exec(txt)[0];
  txt = txt.split(url);
  const linksvg = <svg class="h-6 w-6 text-indigo-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />  <polyline points="15 3 21 3 21 9" />  <line x1="10" y1="14" x2="21" y2="3" /></svg>

  return (
    <div className='py-2'>
      <div style={{ backgroundColor: 'white', borderRadius: '10px' }} className='p-1 mx-1 text-neutral-800 '>
        <div className='px-2 break-all'>
          {txt[0]}
          {url ?
            (
              <a className='downloadbtn text-blue-700 px-2 break-all' href={url}>
                {url} <span>{linksvg}</span>
              </a>
            ) : ''
          }
          {txt[1] ? txt[1] : ''}
        </div>
      </div>
    </div>
  )
}
