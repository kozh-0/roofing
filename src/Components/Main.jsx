import Services from "./Services";
import Maps from "./Maps/Maps";
import Middle from "./Middle";
import Portfolio from './Portfolio';
// import Modal from './Help/Modal';
import Top from "./Top";
import Form from "./Form";

export default function Main() {


  return (
    <main className="content">
            {/* <Modal/> */}
      <Top/>
      <Middle/>
      <Services/>
      <Form/>
      <Portfolio/>
      <Maps/>
    </main>
  )
}
