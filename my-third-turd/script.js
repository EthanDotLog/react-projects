const navbar = (
  <nav>
    <h1>My First Static React App</h1>
    <ul>
      <li>One - this is a item</li>
      <li>Two - we are both rendered in different ways</li>
      <li>Three - check our code!</li>
      <li>Four - knock on a door or something</li>
    </ul>
  </nav>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(navbar)