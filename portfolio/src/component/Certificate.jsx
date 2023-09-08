import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import certificate_1 from '../images/certificate/Screenshot 2023-07-02 at 5.03.36 PM.png'
import certificate_2 from '../images/certificate/Screenshot 2023-07-02 at 5.03.40 PM.png'
import certificate_3 from '../images/certificate/Screenshot 2023-07-02 at 5.03.45 PM.png'
import certificate_4 from '../images/certificate/Screenshot 2023-07-02 at 5.03.48 PM.png'
import certificate_5 from '../images/certificate/Screenshot 2023-07-02 at 5.04.35 PM.png'
import certificate_6 from '../images/certificate/Screenshot 2023-07-02 at 5.04.57 PM.png'
import certificate_7 from '../images/certificate/Screenshot 2023-07-02 at 5.05.08 PM.png'
import certificate_8 from '../images/certificate/Screenshot 2023-07-02 at 5.05.15 PM.png'

function Certificate() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div id='certificate'>
      <Carousel activeIndex={index} onSelect={handleSelect} 
      // style={{height:"400px", padding:"20px", display:"flex", alignItems:"center"}}
      >
        <Carousel.Item>
          <img
            className='certificates'
            src={certificate_1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='certificates'
            src={certificate_2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='certificates'
            src={certificate_3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='certificates'
            src={certificate_4}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='certificates'
            src={certificate_5}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='certificates'
            src={certificate_6}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='certificates'
            src={certificate_7}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='certificates'
            src={certificate_8}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>

  );
}

export default Certificate;