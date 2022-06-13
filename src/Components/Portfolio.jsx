import doImg from '../img/Портфолио/1до.jpg';
import posleImg from '../img/Портфолио/1после.jpg';
import { portfolio } from '../imgData';


export default function Portfolio() {
    // console.log(portfolio);
  return (
    <section className="portfolio container">
        
        <h3 style={{marginTop: '0'}}>Примеры наших работ</h3>
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

            <div className="portfolio_slider">
                {portfolio.map(el => (
                    <div 
                        key={el} 
                        className="portfolio_slider_item" 
                        style={{background: `url(${el}) center center/cover no-repeat`}}></div>
                ))}
            </div>
   
    </section>
  )
}
