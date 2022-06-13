import doImg from '../img/Портфолио/1до.jpg';
import posleImg from '../img/Портфолио/1после.jpg';
import img from '../img/Портфолио/IMG_0771.JPG';


export default function Portfolio() {
    console.log(img);
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
                <div className="portfolio_slider_item" style={{background: `url(${img}) center center/cover no-repeat`}}>sssss</div>
                <div className="portfolio_slider_item" style={{background: `url(${img}) center center/cover no-repeat`}}>sssss</div>
                <div className="portfolio_slider_item" style={{background: `url(${img}) center center/cover no-repeat`}}>sssss</div>
                {/* <div className="portfolio_slider_item">sssss</div>
                <div className="portfolio_slider_item">sssss</div>
                <div className="portfolio_slider_item">sssss</div> */}
            </div>
    </section>
  )
}
