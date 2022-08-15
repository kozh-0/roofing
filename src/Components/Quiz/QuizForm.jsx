// import  debounce from 'lodash.debounce';
import emailjs from 'emailjs-com';
import { useState } from "react";
import Preloader from '../Help/Preloader';

export default function QuizForm({message}) {
    
    const API_KEY = process.env.REACT_APP_API_KEY;
    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;

    console.log(message.join(', '));

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [seven, setSeven] = useState('');

    const PhoneRegEx = /^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/gm;
    const [isSent, setIsSent] = useState(false);
    const [isFormGood, setIsFormGood] = useState(true);
    const [preloader, setPreloader] = useState(false);



    const sendEmail = (e) => {
        e.preventDefault();

        if (PhoneRegEx.test(phone)) {

            setPreloader(true);

            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, API_KEY)
                .then((result) => console.log(result), (error) => console.log(error))
                .then(() => setIsSent(true))
        }
        setIsFormGood(false);
        
    };


    return (
            <div style={{height: '100%', color: 'black'}}>
                { !isSent ? <form className="forma" onSubmit={sendEmail}>
                    <h4 style={{marginBottom: '25px', textAlign: 'center'}}>Оставьте заявку и узнайте вашу скидку</h4>
                    <div>
                        <div className='flex_center'>
                            <i className="material-icons prefix">account_circle</i>
                            <input 
                                required 
                                placeholder="Имя" 
                                type="text" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                name="name"
                                style={{color: 'black'}}
                            />
                        </div>
                        <div className='flex_center' style={{position: 'relative', color:'black !important'}}>
                            <i className="material-icons prefix">phone</i>
                            {(!!phone.length || seven) && <span className='phone_span_plus_7'>+7</span>}
                            <input 
                                required 
                                placeholder={!seven ? "Телефон" : null} 
                                type="tel" 
                                value={phone}
                                onChange={(e) => setPhone(e.target.value.replace(/[^\d.]/g, ''))}
                                onFocus={() => {phone.length === 0 ? setSeven(true) : setSeven(false)}}
                                onBlur={() => {phone.length === 0 && setSeven(false)}}
                                maxLength={10}
                                name="phone"
                                style={!!phone.length ? {paddingLeft: '10px'} : null}
                            />
                        </div>
                        <textarea name="message" defaultValue={message.join(', ')} style={{display: 'none'}}></textarea>
                        <div className='form_btn'>
                            { !preloader ? (
                                <div className='flex_center form_btn'>
                                    {!isFormGood && <p>Некорректная форма!</p>}
                                    <button className="btn orange" style={{ display: 'block', marginLeft: 'auto' }}>Отправить</button>
                                </div>
                            ) : <Preloader/> }
                        </div>
                    </div>
                        <div className='form_btn_2'>
                            { !preloader ? (
                                <div className='flex_center'>
                                    {!isFormGood && <p>Некорректная форма!</p>}
                                    <button className="btn orange" style={{ display: 'block', marginLeft: 'auto' }}>Отправить</button>
                                </div>
                            ) : <Preloader/> }
                        </div>
                </form> : <h2 style={{textAlign: 'center', padding: '70px 0'}}>С вами скоро свяжутся<span style={{color: 'green'}}>&#10004;</span></h2>}
            </div>
    )
}
