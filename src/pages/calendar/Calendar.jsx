import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { v4 as uuidv4 } from 'uuid'

const Calendar = () => {
  const [events, setEvents] = useState([])
  const [currentEvent, setCurrentEvent] = useState({})
  const [showModal, setShowModal] = useState(false)

  const handleDateClick = (info) => {
    setCurrentEvent({
      id: uuidv4(),
      title: '',
      start: info.dateStr,
      end: info.dateStr,
      allDay: true
    })
    setShowModal(true)
  }

  const handleEventClick = (info) => {
    setCurrentEvent({
      id: info.event.id,
      title: info.event.title,
      start: info.event.startStr,
      end: info.event.endStr
    })
    setShowModal(true)
  }

  const handleSaveEvent = () => {
    setEvents((prevEvents) =>
      prevEvents.some((event) => event.id === currentEvent.id)
        ? prevEvents.map((event) => (event.id === currentEvent.id ? currentEvent : event))
        : [...prevEvents, currentEvent]
    )
    setShowModal(false)
  }

  const handleDeleteEvent = () => {
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== currentEvent.id))
    setShowModal(false)
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Todolist with FullCalendar</h1>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          dateClick={handleDateClick}
          eventClick={handleEventClick}
          editable={true}
        />
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-xl font-bold mb-4">{currentEvent.id ? 'Edit Event' : 'Add Event'}</h2>
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
    </div>
  )
}

export default Calendar
