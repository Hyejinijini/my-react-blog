import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { v4 as uuidv4 } from 'uuid'

import EventModal from '@pages/calendar/components/EventModal.jsx'

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
      <h1 className="text-2xl font-bold mb-4">원하는 일정을 만들어봐.</h1>
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
      <EventModal
        currentEvent={currentEvent}
        setCurrentEvent={setCurrentEvent}
        showModal={showModal}
        setShowModal={setShowModal}
        handleSaveEvent={handleSaveEvent}
        handleDeleteEvent={handleDeleteEvent}
      />
    </div>
  )
}

export default Calendar
