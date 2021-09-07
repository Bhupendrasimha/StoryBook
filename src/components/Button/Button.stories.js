import React from 'react'
import Button from './Button.js'

export default {
    title:"Form/button",
    component:Button
}

export const primary = () => <Button variant='primary'>Primary</Button>

export const danger = () => <Button variant='danger'>Danger</Button>