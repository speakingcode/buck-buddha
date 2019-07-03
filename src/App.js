import React, { useEffect } from 'react';

import background    from './assets/images/background.png'
import mountainRight from './assets/images/mountain-right.png'
import mountainLeft  from './assets/images/mountain-left.png'
import ground        from './assets/images/ground.png'
import plant1        from './assets/images/plant1.png'
import plant2        from './assets/images/plant2.png'
import plant3        from './assets/images/plant3.png'
import plant4        from './assets/images/plant4.png'
import plant5        from './assets/images/plant5.png'
import plant6        from './assets/images/plant6.png'
import plant7        from './assets/images/plant7.png'
import plant8        from './assets/images/plant8.png'
import plant9        from './assets/images/plant9.png'
import plant10       from './assets/images/plant10.png'
import temple        from './assets/images/temple.png'
import blackPlantRight from './assets/images/black-plant-right.png'
import blackPlantLeft  from './assets/images/black-plant-left.png'

import './App.css'
import './assets/styles/images.css'

import { useParallax} from './Parallax'

function App() {
  let {parallax, sceneRef} = useParallax()

  console.log(sceneRef)
  console.log(parallax)

  return (
    <div className="App">
      <div ref={sceneRef} className="scene">

        <div className="layer bottom">

          <div className="ground" />
        </div>

        <div data-depth="0.2" className="background-area">
            <img src={background} className="background"/>
            <img src={mountainRight} className="mountain-right" />
            <img src={mountainLeft} className="mountain-left" />

        </div>

      <div data-depth="0.35" className="layer">
          <img src={temple} className="temple" />
        </div>

        <div data-depth="0.25" className="layer">
          <img src={plant1}  className="plant1"/>
        </div>

        <div data-depth="0.3" className="layer">
          <img src={plant2} className="plant2" />
        </div>

        <div data-depth="1.35" className="layer bottom">
          <img src={blackPlantRight} className="black-plant-right bottom" />
        </div>

        <div data-depth="0.7" className="layer bottom">
          <img src={blackPlantLeft} className="black-plant-left bottom" />
        </div>

      </div>
    </div>
  );
}

export default App;
