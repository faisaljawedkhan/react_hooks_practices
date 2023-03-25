import React from 'react'
import useScreen from '../Hooks/useScreen';

const ScreenComponent = () => {
    const screenSize = useScreen();
  return (
    <>
    <div className="screenSize">
        <h2>How to know the screen size of this device?</h2>
        <h3>This is for {screenSize} device screen.</h3>
    </div>
    </>
  )
}

export default ScreenComponent;