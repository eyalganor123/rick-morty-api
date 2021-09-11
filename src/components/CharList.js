import React from 'react'
import '../CharList.css'


export default function CharList({ id, chars, handleclick, isclicked }) {
  if (isclicked) {
    return (
      <div className="  text-container " onClick={handleclick}>
        <img className="" src={chars[id - 1].image} alt="dude"  />
        <span className="align-start ">
          <div className=" green text">gender: {chars[id - 1].gender}</div>
          <div className=" orange text">species: {chars[id - 1].species}</div>
          <div className=" green text">status: {chars[id - 1].status}</div>
          <div className=" orange text">planet: {chars[id - 1].origin.name}</div>
        </span>
      </div>
    )
  } else {
    return (
      <div className="flex flex-column align-center justify-center">
        {chars.map((char, i) => (
          <div key={char.id}>
            <div data-id={char.id} className="name" onClick={handleclick}>{char.name}</div>
          </div>
        ))}
      </div>
    )

  }
}
