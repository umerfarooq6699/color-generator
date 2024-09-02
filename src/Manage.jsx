import React, { useState } from 'react'
import Render from './Render'
import Values from 'values.js'
import Single from './Single'

const Manage = () => {
    const [list, setlist] = useState(new Values('#f15025').all(10))
    const [searchValue,setsearchValue]=useState("")
    console.log(list)
    const change = (e) => {
        setsearchValue(e.target.value)
    }
    const submit = () => {
        setlist(new Values(searchValue).all(10))
    }
    return (
        <>
            <Render input={change} click={submit} />
            <div className='flex flex-wrap mt-5'>
                {
                    list.map((e, i) => {
                        return (
                            <>
                                <Single {...e} hexvalue={e.hex} index={i} />
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Manage