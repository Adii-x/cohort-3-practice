import React from 'react'
import Card from './Card'

const App = () => {
  return (
    <div className='container'>
      <Card name="Test 1" age={10} porf="Developer" />
      <Card name="Test 2" age={11} porf="Designer" />
      <Card name="Test 3" age={12} porf="Artist" />
      <Card name="Test 4" age={13} porf="Singer" />
      <Card name="Test 5" age={14} porf="Coder" />
    </div>
  )
}

export default App
