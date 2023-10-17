import {useEffect, useState} from 'react';
import Frame from './Frame'
import Mobile from './Mobile';

export default function Dimensions(props) {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div>
      {/* <h2>Width: {windowSize.innerWidth}</h2> */}
      {windowSize.innerWidth >= 1280 ? 
      <Frame/> : 
      <Mobile/>}
      {/* <h2>Height: {windowSize.innerHeight}</h2> */}
    </div>
  );
}

function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}