import React from 'react'

const Modal = ({header, body, footer, onClose}) => {
  return (
    <div className='border-2 flex flex-col m-2 p-4 items-center'>
      <button className='border-2 p-2 intems-center rounded-md bg-black text-white'><span onClick={onClose}>&times;</span></button>
      <h1>{header? header: "Header" }</h1>

      <div>
        {
          body? body : <p1>this is body</p1>
        }
      </div>

      <div>
        {footer ? footer : <p1>this is footer</p1>}
      </div>

    </div>
  )
}

export default Modal