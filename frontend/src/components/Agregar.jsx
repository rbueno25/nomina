import React from 'react'
import '../css/agregar.css'

const Agregar = () => {
  return (
    <>
    <div className="lala">

     <div class="container">
        
        <div class="title"><h1>Agregar Empleado</h1></div>
        
        <form className='formulario'>

            <div class="form-group">
              <span>ID: </span>
              <input type="text" className='la'/>
            </div>

            <div class="form-group">
              <span>Cedula: </span>
              <input type="text" className='la'/>
            </div>

            
            <div class="form-group">
                <span>Nombre: </span>
                <input  type="text" className='la'/>
            </div>
            
            
            <div class="form-group">
              <span>Apellido: </span>
              <input type="text" className='la'/>
            </div>

            <div class="form-group">
              <span>Correo: </span>
              <input type="text" className='la'/>
            </div>

            <div class="form-group">
              <span>Telefono: </span>
              <input type="text" className='la'/>
            </div>

            <div class="form-group">
              <span>Direccion: </span>
              <input type="text" className='la'/>
            </div>

            <div class="form-group">
              <span>Estado: </span>
              <input type="text" className='la'/>
            </div>

            <div class="form-group">
              <span>Pais: </span>
              <input type="text" className='la'/>
            </div>

            <div class="form-group">
              <span>Fecha Nacimiento: </span>
              <input type="text" className='la'/>
            </div>

            <div class="form-group">
              <span>Fecha Inicio: </span>
              <input type="text" className='la'/>
            </div>

            <div class="form-group">
              <span>Cargo: </span>
              <input type="text" className='la'/>
            </div>

            <div class="form-group">
              <span>Departamento: </span>
              <input type="text" className='la'/>
            </div>

            <div class="form-group">
              <span>Salario: </span>
              <input type="text" className='la'/>
            </div>
            
            <div class="elboton">
              <input type="submit" className='la'/>
            </div>
        </form>
    </div>
    </div>
    </>
  )
}

export default Agregar