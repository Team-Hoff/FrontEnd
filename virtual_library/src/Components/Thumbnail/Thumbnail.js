import React from 'react';
import './Thumbnail.css'
import { data } from './PicData'

export default function Thumbnail (){
    return<div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth'>
        <div className='relative flex items-center'>
            { data.map((item)=>(
                <img className='w-[320px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300' src={item.img} alt='/' /> 
            ))}
        </div>
    </div>
}