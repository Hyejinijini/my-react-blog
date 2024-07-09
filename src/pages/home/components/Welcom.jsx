import React from 'react'

const Welcome = ({ welcome = 'Welcom to My App' }) => (
  <div className="mb-8">
    <h1 className="text-4xl font-bold mb-6">{welcome}</h1>
    <p className="text-xl">다양한 서비스를 경험해보세요!</p>
  </div>
)

export default Welcome
