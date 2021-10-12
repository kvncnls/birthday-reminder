import React from 'react';

const List = ({people, removeBirthday}) => {
  return (
    <>
      {people.map((person)=>{
        const {id, name, age, image} = person;
        return (
            <article key={id} className="person">
              <img src={image} alt={name}></img>
              <div className="info">
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
              <button className="remove-btn" onClick={()=>removeBirthday(id)}>Remove</button>
            </article>
        )
      })}
    </>
  );
};

export default List;
