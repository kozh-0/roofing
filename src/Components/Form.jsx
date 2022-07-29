// import  debounce from 'lodash.debounce';
import emailjs from 'emailjs-com';
import { useState } from "react";
import Preloader from './Help/Preloader';

export default function Form({styles}) {
    
    const API_KEY = process.env.REACT_APP_API_KEY;
    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;


    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');
    const [seven, setSeven] = useState('');

    const PhoneRegEx = /^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/gm;
    const EmailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const [isSent, setIsSent] = useState(false);
    const [isFormGood, setIsFormGood] = useState(true);
    const [preloader, setPreloader] = useState(false);



    const sendEmail = (e) => {
        e.preventDefault();

        if (PhoneRegEx.test(phone) && (email.length === 0 || EmailRegEx.test(email))) {

            setPreloader(true);

            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, API_KEY)
                .then((result) => console.log(result), (error) => console.log(error))
                .then(() => setIsSent(true))
        }
        setIsFormGood(false);
        
    };


    return (
        <section className='forma_root' style={styles?.root}>

            <div className="container" style={{height: '100%', ...styles?.modalWidth}}>
                { !isSent ? <form className="forma" onSubmit={sendEmail}>
                    <h3 style={styles?.colorBLK}>Заказать обратный звонок</h3>
                    <div className="forma_fields">
                        <div className='flex_center'>
                            <i className="material-icons prefix">account_circle</i>
                            <input 
                                required 
                                placeholder="Имя" 
                                type="text" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                name="name"
                                style={styles?.colorBLK}
                            />
                        </div>
                        <div className='flex_center' style={{position: 'relative'}}>
                            <i className="material-icons prefix">phone</i>
                            {(!!phone.length || seven) && <span className='phone_span_plus_7' style={styles?.colorBLK}>+7</span>}
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
                                style={!!phone.length ? {...styles?.colorBLK, paddingLeft: '30px'} : null}
                            />

                        </div>
                        <div className='flex_center'>
                            <i className="material-icons prefix">email</i>
                            <input 
                                placeholder="Email (необязательно)" 
                                type="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                name="email"
                                style={styles?.colorBLK}
                            />

                        </div>
                    </div>
                    <div className='flex_center'>
                        <i className="material-icons prefix">message</i>
                        <textarea 
                            placeholder="Сообщение (необязательно)"
                            type="text" 
                            value={msg}
                            onChange={(e) => setMsg(e.target.value)}
                            name="message"
                            className="materialize-textarea"
                            style={styles?.colorBLK}
                        ></textarea>

                    </div>

                    { !preloader ? (
                        <div className='flex_center'>
                            {!isFormGood && <p>Некорректная форма!</p>}
                            <button className="my_btn" style={{ display: 'block', marginLeft: 'auto' }}>Отправить</button>
                        </div>
                    ) : <Preloader/> }
                </form> : <h2 style={{textAlign: 'center', padding: '70px 0', color: 'white',  ...styles?.colorBLK}}>С вами скоро свяжутся<span style={{color: 'green'}}>&#10004;</span></h2>}
            </div>
        </section>
    )
}
