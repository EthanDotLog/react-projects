function ItsMe() {
  return (
    <div>
      <header>
        <h1>this is the header</h1>
        <p>this is the subheader</p>
      </header>
      <main>
        <h2>this is the main content</h2>
        <p>this is the first paragraph  </p>
        <p>this is the second paragraph</p>
        <p>this is the third paragraph</p>
        <div style={{display: 'flex', justifyContent: 'space-evenly'}}> 
          <p>this is the fourth paragraph</p>
          <p>this is the fifth paragraph</p>
          <p>this is the sixth paragraph</p>  
        </div>
      </main>
      <footer>
        <p>this is the footer</p>
      </footer>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<ItsMe />, root)