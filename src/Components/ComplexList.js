import React from 'react';
 
const list = [
  {
    id: 'a',
    firstname: 'Robin',
    lastname: 'Wieruch',
    year: 1988,
  },
  {
    id: 'b',
    firstname: 'Dave',
    lastname: 'Davidds',
    year: 1990,
  },
  {
    id:'c',
    firstname: 'Amelia',
    lastname: 'Bilal',
    year: 2018,
  }
];

const ComplexList = () => (
 <div>
   <h1>ComplexList</h1>
   <h3>
  <ul>
    {list.map(item => (
      <li key={item.id}>
        <div>{item.id}</div>
        <div>{item.firstname}</div>
        <div>{item.lastname}</div>
        <div>{item.year}</div>
      </li>
    ))}
  </ul>
  </h3>
  </div>
);
  
 
export default ComplexList;