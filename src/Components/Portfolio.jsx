import { useState } from 'react';
import doImg from '../img/Портфолио/before.jpg';
import posleImg from '../img/Портфолио/after.jpg';
import { portfolio } from '../imgData';

export default function Portfolio() {
    const [current, setCurrent] = useState(0);
    const length = portfolio.length;
    
    const prev = () => setCurrent(current <= 0 ? length - 1 : current - 1);
    const next = () => setCurrent(current >= length - 1 ? 0 : current + 1);

  return (
    <section className="portfolio">
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

            <div className="portfolio_slider container">
                    <div className="portfolio_slider_inner">
                        <div 
                            className="portfolio_slider_inner_item" 
                            style={{background: `url(${portfolio[current]}) center center/cover no-repeat`}}>
                        </div>
                        
                    </div>
                    
                    <div className='portfolio_slider_controls'>
                        <h3>{current+1}<span>/{length}</span></h3>
                        <div>
                            <h3 onClick={prev}>&lt;</h3>
                            <h3 onClick={next}>&gt;</h3>
                        </div>
                    </div>
            </div>
   
    </section>
  )
}
