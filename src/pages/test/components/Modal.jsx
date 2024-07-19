import React from 'react'

const Modal = ({ modalOpen, closeModal, item }) => {
  return (
    <>
      {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-xl font-bold mb-4">{item.title}</h2>
            <img src={item.thumbnailUrl} alt={item.title} className="w-full h-auto mb-4" />
            <p className="text-gray-700">{item.title}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
