import React from 'react'

const EventList = ({ events, handleToggleCompleted }) => (
  <div>
    {events.map((event) => (
      <div key={event.id} className="event-item">
        {/* 체크박스: 이벤트의 완료 상태를 표시하고, 변경 시 상태를 토글하는 함수 호출 */}
        <input
          type="checkbox"
          checked={event.completed} // 이벤트가 완료된 상태인지 체크
          onChange={() => handleToggleCompleted(event.id)} // 체크박스 상태가 변경될 때 완료 상태 토글 함수 호출
        />

        {/* 이벤트 제목: 완료된 경우 텍스트에 취소선 추가, 색상 적용 */}
        <span
          style={{
            textDecoration: event.completed ? 'line-through' : 'none', // 완료된 경우 텍스트에 취소선 추가
            color: event.color || 'black' // 이벤트 색상 적용, 색상이 없으면 검정색으로 설정
          }}
        >
          {event.title} {/* 이벤트 제목 표시 */}
        </span>
      </div>
    ))}
  </div>
)

export default EventList
