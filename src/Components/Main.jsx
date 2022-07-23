import Modal from './Help/Modal';
import Top from "./Top";
import Middle from "./Middle";
import Services from "./Services";
import Form from "./Form";
import Maps from "./Maps/Maps";
import Swiper from "./Swiper";

export default function Main() {

  return (
    <main className="content">
            <Modal/>
      <Top/>
      <Middle/>
      <Services/>
      <Form/>
      <Swiper/>
      <Maps/>
    </main>
  )
}
