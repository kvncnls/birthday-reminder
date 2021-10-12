import React from 'react';

const List = ({people, removeBirthday}) => {
  return (
    <>
      {people.map((person)=>{
        // destructuring each 'person'
        const {id, name, age, image} = person;
        return (
          // key attribute is required for list items for specificity
          // Here it's linked to each person's unique id.
            <article key={id} className="person">
              <img src={image} alt={name}></img>
              <div className="info">
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
              {/* Button removes the selected birthday */}
              <button className="remove-btn" onClick={()=>removeBirthday(id)}>Remove</button>
            </article>
        )
      })}
    </>
  );
};

export default List;
