import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header.js"
import Main from "./Main.js"
import Footer from "./Footer.js"

const Page = () => {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

console.log(Header)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />)