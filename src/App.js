import React, { useEffect } from 'react'
import ColorList from "./ColorList"
import AddColorForm from "./AddColorForm"
import {useAnyKeyToRender} from "./useAnyKeyToRender"

export default function App() {
  useAnyKeyToRender()

  useEffect(() => {
    console.log("fresh render")
  })
  
  return (
    <>
      <AddColorForm />
      <ColorList />
    </>
  )
}
