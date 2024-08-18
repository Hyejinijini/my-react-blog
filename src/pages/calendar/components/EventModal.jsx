const EventModal = ({ currentEvent, setCurrentEvent, showModal, setShowModal, handleSaveEvent, handleDeleteEvent }) => {
  return (
    <>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-xl font-bold mb-4">Event Setting</h2>
            <input
              type="text"
              placeholder="Event Title"
              className="border border-gray-300 rounded-md p-2 w-full mb-4"
              value={currentEvent.title || ''}
              onChange={(e) => setCurrentEvent({ ...currentEvent, title: e.target.value })}
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveEvent}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Save
              </button>
              {currentEvent.id && (
                <button
                  onClick={handleDeleteEvent}
                  className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default EventModal
