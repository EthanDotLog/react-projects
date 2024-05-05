const testCard = (
  <div className="test-card">
    <div id="first-column">
      <h1>this is the test card</h1>
      <p>fake image here</p>
    </div>
    <div id="second-column">
      <h2>this is the second column</h2>
      <p>motivational call to action</p>
      <button>this is a button</button>
    </div>
  </div>
)


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(testCard)