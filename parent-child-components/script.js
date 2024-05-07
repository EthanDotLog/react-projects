function Header() {
  return (
    <header>
      <h1>this is the header</h1>
      <p>i am my own component and a child of the page</p>
    </header>
  )
} 

function MainContent() {
  return (
    <div>
      <h2>this is the main content</h2>
      <p>i am my own component and a child of the page</p>
    </div>
  )
}

function Footer() {
  return (
    <footer>
      <h3>the others start with a h so i wanted to do that here...</h3>
      <p>this is the footer</p>
      <p>i am my own component and a child of the page</p>
    </footer>
  )
}

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Page />)