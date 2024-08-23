import React, { useState, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

// css
// 달력의 스타일을 설정
import '@assets/styles/css/calendar/calendar.css'

// commons
import Header from '@common/components/header/Header.jsx'
import Footer from '@common/components/footer/Footer.jsx'
import MetaTags from '@common/components/etc/MetaTags.jsx'

// components
import EventModal from '@pages/calendar/components/EventModal.jsx'
import EditEventModal from '@pages/calendar/components/EditEventModal.jsx'

const Calendar = () => {
  // 이벤트 상태를 로컬스토리지에서 불러오거나 기본 이벤트 배열로 초기화
  const [events, setEvents] = useState(() => {
    const storedEvents = localStorage.getItem('events')
    return storedEvents
      ? JSON.parse(storedEvents) // 로컬스토리지에서 저장된 이벤트를 불러옴
      : [
          // 로컬스토리지에 저장된 이벤트가 없을 경우 기본 이벤트를 설정
          { title: '알바', date: '2024-08-20', completed: false, id: '1', color: '#fecdd3' },
          { title: '알바', date: '2024-08-21', completed: false, id: '2', color: '#fecdd3' },
          { title: '알바', date: '2024-08-22', completed: false, id: '3', color: '#fecdd3' },
          { title: '배드민턴치기', date: '2024-08-24', completed: false, id: '4', color: '#bae6fd' },
          { title: '과외', date: '2024-08-25', completed: false, id: '5', color: '#fed7aa' },
          { title: '롯데마트가기', date: '2024-08-30', completed: false, id: '6', color: '#ddd6fe' }
        ]
  })

  // 새 이벤트 입력 상태를 관리
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    color: '#000000'
  })

  // 선택된 이벤트 상태를 관리
  const [selectedEvent, setSelectedEvent] = useState(null)

  // 모달 표시 상태를 관리
  const [showModal, setShowModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)

  // events 상태가 변경될 때마다 로컬스토리지에 이벤트를 저장
  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events))
  }, [events])

  // 날짜 클릭 시 새 이벤트 모달을 표시하고 선택된 날짜를 설정
  const handleDateClick = (info) => {
    setNewEvent((prevNewEvent) => ({
      ...prevNewEvent,
      date: info.dateStr // 클릭한 날짜를 새 이벤트 날짜로 설정
    }))
    setShowModal(true)
  }

  // 이벤트 클릭 시 수정 모달을 표시하고 선택된 이벤트 정보를 설정
  const handleEventClick = (info) => {
    setSelectedEvent({
      id: info.event.id,
      title: info.event.title,
      date: info.event.startStr,
      completed: info.event.extendedProps.completed,
      color: info.event.backgroundColor
    })
    setShowEditModal(true)
  }

  // 새 이벤트 추가 버튼 클릭 시 호출
  const handleAddEvent = (data) => {
    const { title, color } = data
    const { date } = newEvent

    // 제목이나 날짜가 비어있는 경우 추가하지 않음
    if (!title.trim() || !date) return

    setEvents((prevEvents) => [
      ...prevEvents,
      { title, date, id: new Date().getTime().toString(), completed: false, color }
    ])
    setNewEvent({ title: '', date: '', color: '#000000' }) // 새 이벤트 상태 초기화
    setShowModal(false) // 모달 닫기
  }

  // 선택된 이벤트 수정 버튼 클릭 시 호출
  const handleUpdateEvent = (selectedEvent) => {
    if (!selectedEvent.title.trim()) return // 제목이 비어있으면 수정하지 않음

    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === selectedEvent.id
          ? { ...event, title: selectedEvent.title, completed: selectedEvent.completed, color: selectedEvent.color }
          : event
      )
    )
    setShowEditModal(false) // 수정 모달 닫기
    setSelectedEvent(null) // 선택된 이벤트 초기화
  }

  // 선택된 이벤트 삭제 버튼 클릭 시 호출
  const handleDeleteEvent = () => {
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== selectedEvent.id))
    setShowEditModal(false) // 수정 모달 닫기
    setSelectedEvent(null) // 선택된 이벤트 초기화
  }

  // 새 이벤트 모달 닫기 버튼 클릭 시 호출
  const handleCloseModal = () => {
    setShowModal(false)
  }

  // 이벤트 완료 상태 토글 함수
  const handleToggleCompleted = (eventId) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) => (event.id === eventId ? { ...event, completed: !event.completed } : event))
    )
  }

  // 이벤트 콘텐츠를 렌더링하는 함수
  const renderEventContent = (eventInfo) => (
    <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
      {/* 
      체크박스와 제목을 포함하여 이벤트의 완료 상태를 표시
      이 함수는 FullCalendar의 이벤트 콘텐츠를 렌더링하기 위해 사용
    */}
      <input
        type="checkbox"
        checked={eventInfo.event.extendedProps.completed} // 이벤트의 완료 상태에 따라 체크 여부 설정
        onChange={(e) => {
          e.stopPropagation()
          handleToggleCompleted(eventInfo.event.id) // 완료 상태 토글
        }}
        className="mr-2"
      />
      <span
        style={{
          textDecoration: eventInfo.event.extendedProps.completed ? 'line-through' : 'none',
          color: eventInfo.event.extendedProps.completed ? 'gray' : 'black'
        }}
      >
        {/* // 이벤트 제목 표시 */}
        {eventInfo.event.title}
      </span>
    </div>
  )

  return (
    <>
      {/* 메타 태그를 설정하여 SEO 및 브라우저 탭 제목을 설정 */}
      <MetaTags subTitle={' | Calendar'} description={'달력 페이지입니다.'} keywords={'calendar'} />

      {/* // 헤더 */}
      <Header />
      <div className="p-8 md:px-20 md:py-12 lg:px-32 lg:pb-28 xl:px-60 xl:py:30 sm:px-12 sm:p-16">
        {/* FullCanlendar 컴포넌트를 사용하여 달력을 렌더링 */}
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth" // 기본 뷰 설정(월별)
          events={events.map((event) => ({
            ...event, // 이벤트 색상 설정
            backgroundColor: event.color,
            borderColor: event.color
          }))}
          dateClick={handleDateClick} // 날짜 클릭 이벤트 핸들러
          eventClick={handleEventClick} // 이벤트 클릭 이벤트 핸들러
          eventContent={renderEventContent} // 이벤트 내용 렌더링 함수
        />
        {showModal && (
          <EventModal
            newEvent={newEvent} // 새 이벤트 상태를 전달
            handleAddEvent={handleAddEvent} // 새 이벤트 추가 함수를 전달
            handleCloseModal={handleCloseModal} // 모달 닫기 함수를 전달
          />
        )}
        {showEditModal && selectedEvent && (
          <EditEventModal
            selectedEvent={selectedEvent} // 선택된 이벤트 정보를 전달
            handleUpdateEvent={handleUpdateEvent} // 이벤트 수정 함수를 전달
            handleDeleteEvent={handleDeleteEvent} // 이벤트 삭제 함수를 전달
          />
        )}
      </div>
      <Footer />
    </>
  )
}

export default Calendar
