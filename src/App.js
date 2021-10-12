import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {

  // We import data from './data'
  // and pass it as an argument for the state.
  const [people, setPeople] = useState(data)

  // Removes the birthday
  const removeBirthday = (id) => {
    const filteredBirthdays = people.filter((person) => person.id !== id)
    setPeople(filteredBirthdays)
  }

  return <main>
    <section className="container">
      {/* If the number of listed persons is NOT equal to 1,
      return "# birthdays today", otherwise, return "# birthday today" */}
      <h3>{people.length !== 1 ? `${people.length} birthdays today` : `${people.length} birthday today`}</h3>
      {/* Component with prop "people" taking in the state "people" */}
      <List people={people} removeBirthday={removeBirthday}/>
      {/* Here we passed an empty array to the setPeople state method, clearing the list. */}
      <button onClick={()=> setPeople([])} >Clear All</button>
    </section>
  </main>
}

export default App;
