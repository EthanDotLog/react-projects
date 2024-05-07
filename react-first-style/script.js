function Header() {
  return (
    <header className="header">
      <h2>logo text</h2>
      <ul className="nav-links">
        <li>home</li>
        <li>about</li>
        <li>contact</li>
      </ul>
    </header>
  )
}

function MainContent() {
  return (
    <main className="main">
      <h1>this is the main content</h1>
      <p>this is the first paragraph</p>
      <p>this is the second paragraph</p>
      <h2>this is the second header</h2>
      <div>
        <h3>this is a header for the list</h3>
        <ol>
          <li>this is the first list item</li>
          <li>this is the second list item</li>
          <li>this is the third list item</li>
        </ol>
      </div>
    </main>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>this is the footer</p>
    </footer>
  )
}

const Page = () => {
  return (
    <div className="page">
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />)