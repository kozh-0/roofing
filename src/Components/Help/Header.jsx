import whatsapp from '../../img/whatsapp.png';
import logo from '../../img/logo1.png'

export default function Header() {
  return (
    <header>
        <div className="header container">
            <div>
                <a className='pulsate' href="tel:89373146400">+7 (937) 314-64-00</a>
            </div>
            <img className='header_logo' src={logo} alt="logo" />
            <a 
                className='whatsapp' 
                style={{color: 'black', fontWeight: '500'}} 
                rel="noreferrer" target="_blank"
                href="https://wa.me/+79373146400">
                    <img src={whatsapp} alt="whatsapp" />WhatsApp
            </a> 
        </div>
    </header>
    )
}
// href="https://web.whatsapp.com/send?phone=%2B79373146400&text&app_absent=0">

   