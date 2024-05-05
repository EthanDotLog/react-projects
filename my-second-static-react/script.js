const nav = (
  <div>
    <h1>My Second Static React App</h1>
    <p>this is the super cool nav bar</p>
    <ul>
      <li>One - this is a item</li>
      <li>Two - we are both rendered in different ways</li>
      <li>Three - check our code!</li>
      <li>Four - knock on a door or something</li>
    </ul>
  </div>
)

function MainContent() {
  return (
    <div>
      <h1>this is the main content</h1>
      <h2>made as a return on a function</h2>
      <div>
        <p>this is a paragraph</p>
        <p>this is another paragraph, we are both in a div</p>
      </div>

      <p>this is the last paragraph, everything must be within a main single container</p>
    </div>
  )
}
//a div holding the nav and maincontent made earlier in the script. NOTE: the ways they are typed
ReactDOM.render(<div>{nav} <MainContent /></div>, document.getElementById('root'))