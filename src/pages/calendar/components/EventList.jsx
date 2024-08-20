import React from 'react'

const EventList = ({ events, handleToggleCompleted }) => (
  <div>
    {events.map((event) => (
      <div key={event.id} className="event-item">
        <input type="checkbox" checked={event.completed} onChange={() => handleToggleCompleted(event.id)} />
        <span
          style={{
            textDecoration: event.completed ? 'line-through' : 'none',
            color: event.color || 'black'
          }}
        >
          {event.title}
        </span>
      </div>
    ))}
  </div>
)

export default EventList
