import { useState, useRef, useReducer, act } from 'react'
import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime()
  },
  {
    id: 1,
    isDone: false,
    content: "누워서 자기",
    date: new Date().getTime()
  },
  {
    id: 2,
    isDone: false,
    content: "빨래 정리하기",
    date: new Date().getTime()
  },
]

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state]
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetID
          ? {
            ...item, isDone: !item.isDone
          } : item)
    case "DELETE":
      return state.filter((item) => item.id !== action.targetID)
    default:
      return state
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData)
  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime()
      }
    })
  }

  const onUpdate = (targetID) => {
    // todos State의 값들 중에
    // targetId와 일치하는 id를 갖는 투두 아이템의 isDone 변경

    // 인수 : todos배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열
    dispatch({
      type: "UPDATE",
      targetID: targetID
    })
  };

  const onDelete = (targetID) => {
    dispatch({
      type: "DELETE",
      targetID: targetID
    })
  };

  return (
    <div className='App'>
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  )
}


export default App
