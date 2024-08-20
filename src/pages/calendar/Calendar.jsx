import React, { Component } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

// commons
import Header from '@common/components/header/Header.jsx'
import Footer from '@common/components/footer/Footer.jsx'

// components
import EventModal from '@pages/calendar/components/EventModal.jsx'
import EditEventModal from '@pages/calendar/components/EditEventModal.jsx'

class Calendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: JSON.parse(localStorage.getItem('events')) || [
        { title: '알바', date: '2024-08-20', completed: false, id: '1', color: '#fecdd3' },
        { title: '알바', date: '2024-08-21', completed: false, id: '2', color: '#fecdd3' },
        { title: '알바', date: '2024-08-22', completed: false, id: '3', color: '#fecdd3' },
        { title: '배드민턴치기', date: '2024-08-24', completed: false, id: '4', color: '#bae6fd' },
        { title: '과외', date: '2024-08-25', completed: false, id: '5', color: '#fed7aa' },
        { title: '롯데마트가기', date: '2024-08-30', completed: false, id: '6', color: '#ddd6fe' }
      ],
      newEvent: {
        title: '',
        date: '',
        color: '#000000'
      },
      selectedEvent: null,
      showModal: false,
      showEditModal: false
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.events !== this.state.events) {
      localStorage.setItem('events', JSON.stringify(this.state.events))
    }
  }

  handleDateClick = (info) => {
    this.setState({
      showModal: true,
      newEvent: {
        ...this.state.newEvent,
        date: info.dateStr
      }
    })
  }

  handleEventClick = (info) => {
    this.setState({
      selectedEvent: {
        id: info.event.id,
        title: info.event.title,
        date: info.event.startStr,
        completed: info.event.extendedProps.completed,
        color: info.event.backgroundColor
      },
      showEditModal: true
    })
  }

  handleInputChange = (e) => {
    this.setState({
      newEvent: {
        ...this.state.newEvent,
        title: e.target.value
      }
    })
  }

  handleColorChange = (e) => {
    this.setState({
      newEvent: {
        ...this.state.newEvent,
        color: e.target.value
      }
    })
  }

  handleAddEvent = () => {
    const { title, date, color } = this.state.newEvent

    if (!title.trim() || !date) return

    this.setState((prevState) => ({
      events: [...prevState.events, { title, date, id: new Date().getTime().toString(), completed: false, color }],
      newEvent: { title: '', date: '', color: '#000000' },
      showModal: false
    }))
  }

  handleUpdateEvent = () => {
    const { selectedEvent } = this.state

    if (!selectedEvent.title.trim()) return

    this.setState((prevState) => ({
      events: prevState.events.map((event) =>
        event.id === selectedEvent.id
          ? { ...event, title: selectedEvent.title, completed: selectedEvent.completed, color: selectedEvent.color }
          : event
      ),
      showEditModal: false,
      selectedEvent: null
    }))
  }

  handleDeleteEvent = () => {
    const { selectedEvent } = this.state

    this.setState((prevState) => ({
      events: prevState.events.filter((event) => event.id !== selectedEvent.id),
      showEditModal: false,
      selectedEvent: null
    }))
  }

  handleCloseModal = () => {
    this.setState({ showModal: false })
  }

  handleEditInputChange = (e) => {
    this.setState({
      selectedEvent: {
        ...this.state.selectedEvent,
        title: e.target.value
      }
    })
  }

  handleEditColorChange = (e) => {
    this.setState({
      selectedEvent: {
        ...this.state.selectedEvent,
        color: e.target.value
      }
    })
  }

  handleToggleCompleted = (eventId) => {
    this.setState((prevState) => ({
      events: prevState.events.map((event) =>
        event.id === eventId ? { ...event, completed: !event.completed } : event
      )
    }))
  }

  renderEventContent = (eventInfo) => (
    <div>
      <input
        type="checkbox"
        checked={eventInfo.event.extendedProps.completed}
        onChange={(e) => {
          e.stopPropagation()
          this.handleToggleCompleted(eventInfo.event.id)
        }}
        className="mr-2"
      />
      <span
        style={{
          textDecoration: eventInfo.event.extendedProps.completed ? 'line-through' : 'none',
          color: eventInfo.event.extendedProps.color || 'black'
        }}
      >
        {eventInfo.event.title}
      </span>
    </div>
  )

  render() {
    const { events, newEvent, showModal, showEditModal, selectedEvent } = this.state

    return (
      <>
        <Header />
        <div className="py-4">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={events.map((event) => ({
              ...event,
              backgroundColor: event.color,
              borderColor: event.color
            }))}
            dateClick={this.handleDateClick}
            eventClick={this.handleEventClick}
            eventContent={this.renderEventContent}
          />
          {showModal && (
            <EventModal
              newEvent={newEvent}
              handleInputChange={this.handleInputChange}
              handleColorChange={this.handleColorChange}
              handleAddEvent={this.handleAddEvent}
              handleCloseModal={this.handleCloseModal}
            />
          )}
          {showEditModal && selectedEvent && (
            <EditEventModal
              selectedEvent={selectedEvent}
              handleEditInputChange={this.handleEditInputChange}
              handleEditColorChange={this.handleEditColorChange}
              handleUpdateEvent={this.handleUpdateEvent}
              handleDeleteEvent={this.handleDeleteEvent}
            />
          )}
        </div>
        <Footer />
      </>
    )
  }
}

export default Calendar
