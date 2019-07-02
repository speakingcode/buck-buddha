import React, { useState, useEffect, useRef } from 'react'

import ParallaxJS from 'parallax-js'

export const useParallax = () => {
  const [ref, sceneRef] = useState(null)
  let parallax

  useEffect(
    () => {
      if (ref) {
        parallax = new ParallaxJS(ref)
        return () => { parallax.disable() }
      }
    },
    [ref]
  )

  return {parallax, sceneRef}
}

export const Parallax = ({children}) => {
  const {parallax, sceneRef} = useParallax(sceneRef)

  return (
    <>
      {children(parallax, sceneRef)}
    </>
  )
}

