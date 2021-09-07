import React from 'react'
import './button.css'

function Button (props) {
const {variant='primary',children, ...rest} = props

return(
    <div className='wrapper'>
        <button className={`button ${variant}`} {...rest}>
{children}

        </button>
    </div>
)


}

export default Button