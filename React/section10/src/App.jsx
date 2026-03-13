import { useState, useRef, useReducer, useCallback, createContext, useMemo } from 'react'
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

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();


function App() {
  const [todos, dispatch] = useReducer(reducer, mockData)
  const idRef = useRef(3);

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime()
      }
    });
  });

  const onUpdate = useCallback((targetID) => {
    dispatch({
      type: "UPDATE",
      targetID: targetID
    })
  });

  const onDelete = useCallback((targetID) => {
    dispatch({
      type: "DELETE",
      targetID: targetID
    })
  }, [])

  const memoizedDispatch = useMemo(() => {
    return ({
      onCreate,
      onUpdate,
      onDelete
    });
  }, [])

  return (
    <div className='App'>
      <Header />
      <TodoStateContext.Provider
        value={todos}>
        <TodoDispatchContext.Provider
          value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>


    </div>
  )
}


export default App
