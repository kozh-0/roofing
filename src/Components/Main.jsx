import Bottom from "./Bottom";
import Middle from "./Middle";


export default function Main() {


  return (
    <main className="content">
      <section className="top">
          <div className="container">
              <div className="top_text">
                  <h2>Все для кровли и фасада</h2>
                  <h4>РУКАМИ СТРОИТЕЛЬНОЙ КОМПАНИИ...</h4>
              </div>
          </div>
      </section>
      <Middle/>
      <Bottom/>
    </main>
  )
}
