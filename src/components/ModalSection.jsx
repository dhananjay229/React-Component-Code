import React, { useState } from 'react'
import Modal from './Modal';

const ModalSection = () => {

  const [showModal, setShowModal] = useState(false);

  function handleToggleModal(){
    setShowModal(!showModal);
  }

  function onClose(){
    setShowModal(false);
  }

  return (
    <div className='max-w-md mx-auto m-4'>
      <button onClick={handleToggleModal} 
      className='border-2 text-white bg-slate-600 p-2 rounded-md'>Open Modal</button>
        {
          showModal && (
            <Modal
              header = {<h1>This is body section</h1>}
              body={<h1>This is body section</h1>}
              footer={<h1>This is footer section</h1>}
              onClose = {onClose}
            />
          )
        }
      
    </div>
  )
}

export default ModalSection