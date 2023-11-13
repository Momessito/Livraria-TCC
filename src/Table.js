import React, { useState } from 'react';
import Alert from './Components/Alert';

export default function Table() {
  const [selectAll, setSelectAll] = useState(false);
  const [books, setBooks] = useState([
    {
      id: 1,
      Titulo: 'Introdução à Matemática',
      Autor: 'Jane Doe',
      Professor: 'Editora Educação Global',
      Disciplina: 'Matemática',
    },
])
  return (
    <div className="overflow-x-auto tablePage">
      <button
        className="btn btn-primary btn-sm mt-4"
>
<svg height='30px' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#ffffff"></path> <path d="M12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z" fill="#ffffff"></path> </g></svg>  
Adicionar    
</button>
     
      <div className="overflow-x-auto">
        <table className="table">
        <thead>
      <tr>
        <th></th>
        <th>Titulo / Autor</th>
        <th>Professor / Materia</th>
        <th>Configurar</th>
      </tr>
    </thead>
          

          <tbody>
  {books.map((book) => (
    <tr key={book.id} className="hover:bg-primary-content">
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src="https://www.boldstrokesbooks.com/assets/bsb/images/book-default-cover.jpg"
                alt="Capa do Livro Didático"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{book.Titulo}</div>
            <div className="text-sm opacity-50">{book.Autor}</div>
          </div>
        </div>
      </td>
      <td>
        {book.Professor}
        <br />
        <span className="badge badge-ghost badge-sm">{book.Disciplina}</span>
      </td>
      <th>
        <button
          className="btn btn-ghost btn-xs"
        >
          Editar
        </button>
      </th>
      <th>


      </th>
    </tr>
  ))}
</tbody>

        </table>

      </div>



      <Alert text={'Você está entrando como ' + localStorage.getItem('userEmail')} />
    </div>
  );
}



