import './App.css'

function App() {


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', overflow: 'hidden' }}>
      <img src="/photos/Zita_Peti_Albania_20230810.jpg" style={{ flexShrink: 0, height: '100%', opacity: 0.5, zIndex: 0 }} />
      <div style={{ position: 'absolute', zIndex: 1 }}>
        <h1 className='fleur-de-leah-regular zita-peter'>Zita &#9901; Péter</h1>
        <h2 className='fleur-de-leah-regular'>2025. október 25.</h2>
      </div>
    </div>
  )
}

export default App
