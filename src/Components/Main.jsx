import Modal from './Help/Modal';
import Top from "./Top";
import Middle from "./Middle";
import Services from "./Services";
import Form from "./Form";
import Maps from "./Maps/Maps";
import Swiper from "./Swiper";
import SaleTimer from './SaleTimer';
import Quiz from './Quiz/Quiz';

export default function Main() {

  return (
    <main className="content">
            <Modal/>
      <Top/>
      <SaleTimer/>
      <Quiz/>
      <Services/>
      <Swiper/>
      <Form/>
      <Middle/>
      <Maps/>
    </main>
  )
}
