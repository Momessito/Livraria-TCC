export default function TableExample(){
    return(
        <div className="table-e">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Conheça nossa equipe</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
             Entenda como funciona o metodo de cadastro dos nossos livros
            </p>
        <div className="overflow-x-auto table-Example">

  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Título do Livro Didático</th>
        <th>Autor</th>
        <th>Disciplina</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://livrariadogenio.com.br/wp-content/uploads/capaaprender_6ano_biologia-01-822x1024.jpg" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Introdução à Biologia</div>
              <div className="text-sm opacity-50">Fernanda Silva</div>
            </div>
          </div>
        </td>
        <td>
         Editora Marinhos
          <br/>
          <span className="badge badge-ghost badge-sm">Volume 1</span>
        </td>
        <td>Biologia</td>
        <th>
          <button className="btn btn-ghost btn-xs">EDITAR</button>
        </th>
      </tr>
      {/* row 2 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://livrariadogenio.com.br/wp-content/uploads/capaaprender_Filosofia_8ano-NOVO-806x1024.jpg" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Introdução à Filosofia</div>
              <div className="text-sm opacity-50">Cidney Jr</div>
            </div>
          </div>
        </td>
        <td>
         Editora 15 de Jullho
          <br/>
          <span className="badge badge-ghost badge-sm">Volume 4</span>
        </td>
        <td>Filosofia</td>
        <th>
          <button className="btn btn-ghost btn-xs">EDITAR</button>
        </th>
      </tr>
      {/* row 3 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://livrariadogenio.com.br/wp-content/uploads/Luva_aprender_6ano_lateral_invertido.jpg" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">
Introdução à Ciências</div>
              <div className="text-sm opacity-50"> Paula Tejano</div>
            </div>
          </div>
        </td>
        <td>
          Editora Aleph
          <br/>
          <span className="badge badge-ghost badge-sm">Volume 5</span>
        </td>
        <td>Ciências</td>
        <th>
          <button className="btn btn-ghost btn-xs">EDITAR</button>
        </th>
      </tr>
      {/* row 4 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://livrariadogenio.com.br/wp-content/uploads/colecao-ponto-de-partida-quimica-9-vol2.jpg" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Introdução à Química</div>
              <div className="text-sm opacity-50">Graziela Pereira</div>
            </div>
          </div>
        </td>
        <td>
        Editora Educação Global
          <br/>
          <span className="badge badge-ghost badge-sm">Volume 2</span>
        </td>
        <td>Química</td>
        <th>
          <button className="btn btn-ghost btn-xs">EDITAR</button>
        </th>
      </tr>
    </tbody>
    
  </table>
</div>
</div>
    )
}