import React, { useEffect, useState } from 'react'

const Single = ({ rgb, weight, hexvalue ,index}) => {
    const [alert,setalert]=useState(false)
    const bcg = rgb.join(",")
    const hexColor=`#${hexvalue}`
    console.log(hexvalue,"hexvalue")

    useEffect(()=>{
        setTimeout(() => {
            setalert(false)
        }, 3000);
    },[alert])
    
    const getValue=()=>{
        setalert(true)
        navigator.clipboard.writeText(hexColor)
    }
    return (
        <>
            <div onClick={getValue} className={`w-full shadow-2xl border md:w-[256px] lg:w-[225px] cursor-pointer p-4 h-[120px] bg-[rgb(${bcg})]`}>
                <h1 className={index>10?"text-white":"text-black"}>{weight}%</h1>
                <h1 className={index>10?"text-white":"text-black"}>{hexColor}</h1>
                {alert && <p>Copied to Clipboard</p>}
            </div>
        </>
    )
}

export default Single