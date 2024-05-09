import React, { useState } from 'react'

const AccordianSection = ({items}) => {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordian = (index) => {
    setActiveIndex(index === activeIndex ? null: index);
  }

  return (
    <div className=' mx-auto max-w-md divide-y m-8 divide-emerald-500'>
      {items.map((item, index) => (
        <div key={index} className='flex flex-col space-x-2 items-center justify-between p-4'>
          <button onClick={() => toggleAccordian(index)}>
          <span>{item.title}</span>
          <span className={`ml-11 ${index === activeIndex ? 'rotate-180' : ''}`}>+</span>
          </button>
          <div className={`overflow-hidden ${index === activeIndex ? 'max-h-96' : 'max-h-0'}`}>
            <div >{item.heading}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AccordianSection