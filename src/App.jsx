import React, { useState } from 'react'; // eslint-disable-next-line
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  
  const [inputValue, setInputValue] = useState(''); // Estado para el valor del input
  const [tasks, setTasks] = useState([]); // Estado para almacenar las tareas

  // Función para manejar el cambio en el input
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // Función para manejar el envío del formulario (agregar tarea)
  const handleSubmit = (e) => {
    e.preventDefault(); // Evitar que se recargue la página al enviar el formulario
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]); // Agregar la nueva tarea al array de tareas
      setInputValue(''); // Limpiar el input
    }
  };

  return (
    <div className="container">
      <h1 className="mt-5 mb-3">Lista de Tareas</h1>
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="input-group">
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            className="form-control"
            placeholder="Ingrese una tarea..."
          />
          <button type="submit" className="btn btn-primary">Agregar</button>
        </div>
      </form>
      <ul className="list-group">
        {/* Iterar sobre las tareas y mostrar cada una en un elemento de lista */}
        {tasks.map((task, index) => (
          <li key={index} className="list-group-item">{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
