import React from 'react'
import AccordianSection from './AccordianSection'

const Accordian = () => {

  const accordianItems = [
    {title:'section 1', heading: 'Content for section 1'},
    {title:'section 2', heading: 'Content for section 2'},
    {title:'section 3', heading: 'Content for section 3'},
    {title:'section 4', heading: 'Content for section 4'},
  ]

  return (
    <div className='mx-auto m-8'>
      <AccordianSection items={accordianItems}/>
    </div>
  )
}

export default Accordian