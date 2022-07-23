import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import doImg from '../img/Портфолио/before.webp';
import posleImg from '../img/Портфолио/after.webp';
import { portfolio } from '../imgData';

export default function Swiper() {
    const [width, setWidth] = useState(0);
    const slider = useRef();
    
    useEffect(() => {
        setWidth(slider.current.scrollWidth - slider.current.offsetWidth)
    }, [])
    
  return (
    <section>
        <h3 className='container' style={{padding: '20px 0'}}>Примеры наших работ</h3>
            <div className='portfolio_doposle'>
                <div>
                    <img src={doImg} alt="portfolioIMG" />
                    <h5>ДО</h5>
                </div>
                <div>
                    <img src={posleImg} alt="portfolioIMG" />
                    <h5>После</h5>
                </div>
            </div>

            <motion.div ref={slider} className='myslider' whileTap={{cursor: 'grabbing'}}>
                <motion.div drag='x' dragConstraints={{right: 0, left: -width}} className='myslider_inner'>
                    {portfolio.map((el, i) => (
                        <motion.div 
                            key={el}
                            className="myslider_inner_item" 
                        >
                            <div
                                style={{background: `url(${el}) center center/cover no-repeat`}}
                            ><span>{i+1}</span></div>
                        </motion.div>
                    ))}
                </motion.div>
                <div className='myslider_indication'>&harr;</div>
            </motion.div>
   
    </section>
  )
}
