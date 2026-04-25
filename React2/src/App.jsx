import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"

function App() {

  return (
    <>
      <Navbar />

      <main>
        {/* This is main content of my site */}
      </main>

      <div className="cards">
        <Card title="Card 1" description="Card 1 description"/>
        <Card title="Card 2" description="Card 2 description"/>
        <Card title="Card 3" description="Card 3 description"/>
        <Card title="Card 4" description="Card 4 description"/>
       
      </div>

      <Footer />
    </>
  )
}

export default App
