import React from 'react'
import DropdownMenu from './DropdownMenu'

export default function questions() {
  return (
    <div>
        <h1 className="text-black mt-20 mb-9 text-6xl text-center">Frequently Asked <span className="mb-2  inline-block">Questions</span></h1>
        <DropdownMenu/>
        <DropdownMenu/>
        <DropdownMenu/>
        <DropdownMenu/>

    </div>
  )
}
