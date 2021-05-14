import React from 'react'
import Review from './Review'

function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h1>Our Staff</h1>
          <h1 className="underline"></h1>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
