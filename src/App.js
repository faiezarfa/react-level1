


function App(){
  return(

    <>
  <header className="forpc">
    <h1>course 4 arab</h1>
    <ul className="flex">
      <li className="mainlist">
        <a className="main-link" href="#">
          html
        </a>
        <ul className="subul">
          <li>
            <a href="#">hello</a>
          </li>
          <li>
            <a href="#">hello</a>
          </li>
          <li>
            <a href="#">hello</a>
          </li>
        </ul>
      </li>
      <li className="mainlist">
        <a className="main-link" href="#">
          css
        </a>
        <ul className="subul">
          <li>
            <a href="#">hello</a>
          </li>
          <li>
            <a href="#">hello</a>
          </li>
          <li className="miniproject">
            <a href="#">mini project</a>
            <ul className="subul" id="sub-sub">
              <li>
                <a href="#">hello</a>
              </li>
              <li>
                <a href="#">hello</a>
              </li>
              <li>
                <a href="#">hello</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="mainlist">
        <a className="main-link" href="#">
          javascript
        </a>
        <ul className="subul">
          <li>
            <a href="#">comming soon</a>
          </li>
        </ul>
      </li>
    </ul>
  </header>
  <header className="formobile">
    <h1>for mobile</h1>
    <label className="absolute" htmlFor="burger">
      <i className="fa-solid fa-bars" />
    </label>
    <input type="checkbox" id="burger" />
    <div className="showonclick">
      <div className="maindiv">
        <label htmlFor="html">
          html <i className="fa-solid fa-plus" />
        </label>
        <input type="checkbox" id="html" />
        <ul className="subdiv">
          <li>
            <a href="#">tags</a>
          </li>
          <li>
            <a href="#">enlinestyle</a>
          </li>
          <li>
            <a href="#">crash course</a>
          </li>
        </ul>
      </div>
      <div className="maindiv">
        <label htmlFor="css">
          css <i className="fa-solid fa-plus" />
        </label>
        <input type="checkbox" id="css" />
        <ul className="subdiv">
          <li>
            <a href="#">bootstrap</a>
          </li>
          <li>
            <a href="#">colors</a>
          </li>
        </ul>
      </div>
      <div className="maindiv">
        <label htmlFor="javascript">
          javascript <i className="fa-solid fa-plus" />
        </label>
        <input type="checkbox" id="javascript" />
        <ul className="subdiv">
          <li>
            <a href="#">jsss</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
  <main>responsive drop down menu html/css</main>
  <footer>developped by arfaoui faiez</footer>
</>


  );
}
export default App;