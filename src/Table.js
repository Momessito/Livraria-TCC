import React, { useState } from 'react';

import Alert from './Components/Alert'

export default function Table(){

  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = () => {
    const checkboxes = document.querySelectorAll('.checkbox');

    checkboxes.forEach((checkbox) => {
      checkbox.checked = !selectAll;
    });

    setSelectAll(!selectAll);
  };

  return(<div className="overflow-x-auto tablePage">
<div className="text-sm breadcrumbs">
  <ul>
    <li>
      <a>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
        Inicio
      </a>
    </li> 
    <li>
      <a>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
        Livros
      </a>
    </li> 
  </ul>
</div>
<div className="overflow-x-auto">
  <table className="table">
    {/* cabeçalho */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox"    
                  checked={selectAll}
                  onChange={handleSelectAll} />
          </label>
        </th>
        <th>Título do Livro Didático</th>
        <th>Autor</th>
        <th>Disciplina</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* linha 1 */}
      <tr className="hover:bg-primary-content">
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://www.boldstrokesbooks.com/assets/bsb/images/book-default-cover.jpg" alt="Capa do Livro Didático" />
              </div>
            </div>
            <div>
              <div className="font-bold">Introdução à Matemática</div>
              <div className="text-sm opacity-50">Jane Doe</div>
            </div>
          </div>
        </td>
        <td>
          Editora Educação Global
          <br/>
          <span className="badge badge-ghost badge-sm">Professora de Matemática</span>
        </td>
        <td>Matemática</td>
        <th>
          <button className="btn btn-ghost btn-xs">Editar</button>
        </th>
      </tr>
      {/* linha 2 */}
      <tr className="hover:bg-primary-content">
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://www.boldstrokesbooks.com/assets/bsb/images/book-default-cover.jpg" alt="Capa do Livro Didático" />
              </div>
            </div>
            <div>
              <div className="font-bold">História Mundial: Uma Perspectiva Global</div>
              <div className="text-sm opacity-50">John Smith</div>
            </div>
          </div>
        </td>
        <td>
          Editora Conhecimento Universal
          <br/>
          <span className="badge badge-ghost badge-sm">Professor de História</span>
        </td>
        <td>História</td>
        <th>
          <button className="btn btn-ghost btn-xs">Editar</button>
        </th>
      </tr>
      {/* linha 3 */}
      <tr className="hover:bg-primary-content">
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://www.boldstrokesbooks.com/assets/bsb/images/book-default-cover.jpg" alt="Capa do Livro Didático" />
              </div>
            </div>
            <div>
              <div className="font-bold">Ciências Naturais Exploradas</div>
              <div className="text-sm opacity-50">Maria Silva</div>
            </div>
          </div>
        </td>
        <td>
          Editora Saber Científico
          <br/>
          <span className="badge badge-ghost badge-sm">Professora de Ciências</span>
        </td>
        <td>Ciências</td>
        <th>
          <button className="btn btn-ghost btn-xs">Editar</button>
        </th>
      </tr>
      {/* linha 4 */}
      <tr className="hover:bg-primary-content">
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://www.boldstrokesbooks.com/assets/bsb/images/book-default-cover.jpg" alt="Capa do Livro Didático" />
              </div>
            </div>
            <div>
              <div className="font-bold">Língua Viva: Gramática e Redação</div>
              <div className="text-sm opacity-50">Carlos Santos</div>
            </div>
          </div>
        </td>
        <td>
          Editora Linguagem Expressa
          <br/>
          <span className="badge badge-ghost badge-sm">Professor de Língua Portuguesa</span>
        </td>
        <td>Língua Portuguesa</td>
        <th>
          <button className="btn btn-ghost btn-xs">Editar</button>
        </th>
      </tr>
    </tbody>
  </table>
</div>

<Alert text="Você está entrando como Leandro"/>
</div>);  
};