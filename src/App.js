import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {

  // We import data from './data'
  // and used it as an argument for the state 'people', passing the data
  const [people, setPeople] = useState(data)

  return <main>
    <section className="container">
      <h3>{people.length !== 1 ? `${people.length} birthdays today` : `${people.length} birthday today`}</h3>
      <List people={people}/>
      {/* Here we passed an empty array to the setPeople state function, clearing the list. */}
      <button onClick={()=> setPeople([])}>Clear All</button>
    </section>
  </main>
}

export default App;
