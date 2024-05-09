import React from 'react'
import '../css/ajustar.css'
import { IoMdPersonAdd } from "react-icons/io";

const Ajustar = (props) => {
  return (
    <>
    <div className="ajuste">

     <h1>{props.nombre}</h1>
      <hr />
      <button className="agregar">
        <IoMdPersonAdd /> Agregar
      </button>
    </div>
    </>
  )
}

export default Ajustar