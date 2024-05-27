import React,{useState} from 'react';
import './App.css';

export function App(){
  const[tarea, setTarea]= useState("")
    return(
   <div>
    <div className='ContenedorPrincipal'>
      <h1 className='TituloAgenda'>Agenda de tareas</h1>
      <div className='ContenedorTareas'>
        
      </div>
      <div>
            <div className='insertar'>
                <input
                    className='Insertartexto'
                    type="text" 
                    placeholder='Digite su tarea' 
                    value={tarea} 
                    onChange={(e) => setTarea(e.target.value)}
                />
                <button className='BotonAgendar' onClick={(e) => setTarea(e.target.value)}>Añadir Tarea</button>
            </div>
        </div>
    </div>
   </div>
 )
}