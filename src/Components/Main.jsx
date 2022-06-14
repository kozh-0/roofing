import Bottom from "./Bottom";
import Maps from "./Maps";
import Middle from "./Middle";
import Portfolio from './Portfolio';


export default function Main() {


  return (
    <main className="content">
      <section className="top">
          <div className="container">
              <div className="top_text">
                  <h2>Все для кровли и фасада</h2>
                  <h4>РУКАМИ ПРОФЕССИОНАЛОВ</h4>
              </div>
          </div>
      </section>
      <Middle/>
      <Bottom/>
      <Portfolio/>
      <Maps/>
    </main>
  )
}
