import Alert from './Components/Alert'
export default function Table(){
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
<ul className="menu menu-horizontal lg:menu-horizontal bg-base-200 rounded-box">
  <li><a>Adicionar</a></li>
  <li><a>Editar</a></li>
  <li><a>Excluir</a></li>
</ul>
<table className="table table-xs" style={{padding : '10px',border: '1px solid gray'}}>
  <thead>
    <tr>
      <th></th>
      <th>Título</th>
      <th>Autor</th>
      <th>Matéria</th>
      <th>Ano</th>
      <th>Editora</th>
      <th>ISBN</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>Matemática Avançada</td>
      <td>Carlos Silva</td>
      <td>Matemática</td>
      <td>10º</td>
      <td>Livros Universais</td>
      <td>978-1234567890</td>
    </tr>
    <tr>
      <th>2</th>
      <td>História Mundial</td>
      <td>Maria Santos</td>
      <td>História</td>
      <td>11º</td>
      <td>Editora Histórias Vividas</td>
      <td>978-9876543210</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Biologia Celular</td>
      <td>João Rodrigues</td>
      <td>Biologia</td>
      <td>12º</td>
      <td>BioLivros</td>
      <td>978-5678901234</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Química Orgânica</td>
      <td>Ana Ferreira</td>
      <td>Química</td>
      <td>11º</td>
      <td>Editora Química Total</td>
      <td>978-4321098765</td>
    </tr>
    <tr>
      <th>5</th>
      <td>Literatura Brasileira</td>
      <td>Pedro Gomes</td>
      <td>Literatura</td>
      <td>12º</td>
      <td>Livros Literários</td>
      <td>978-2109876543</td>
    </tr>
    <tr>
      <th>13</th>
      <td>Matemática Avançada</td>
      <td>Carlos Silva</td>
      <td>Matemática</td>
      <td>10º</td>
      <td>Livros Universais</td>
      <td>978-1234567890</td>
    </tr>
    <tr>
      <th>14</th>
      <td>História Mundial</td>
      <td>Maria Santos</td>
      <td>História</td>
      <td>11º</td>
      <td>Editora Histórias Vividas</td>
      <td>978-9876543210</td>
    </tr>
    <tr>
      <th>15</th>
      <td>Biologia Celular</td>
      <td>João Rodrigues</td>
      <td>Biologia</td>
      <td>12º</td>
      <td>BioLivros</td>
      <td>978-5678901234</td>
    </tr>
    <tr>
      <th>16</th>
      <td>Química Orgânica</td>
      <td>Ana Ferreira</td>
      <td>Química</td>
      <td>11º</td>
      <td>Editora Química Total</td>
      <td>978-4321098765</td>
    </tr>
    <tr>
      <th>17</th>
      <td>Literatura Brasileira</td>
      <td>Pedro Gomes</td>
      <td>Literatura</td>
      <td>12º</td>
      <td>Livros Literários</td>
      <td>978-2109876543</td>
    </tr>
    <tr>
      <th>18</th>
      <td>Biologia Celular</td>
      <td>João Rodrigues</td>
      <td>Biologia</td>
      <td>12º</td>
      <td>BioLivros</td>
      <td>978-5678901234</td>
    </tr>
    <tr>
      <th>19</th>
      <td>Química Orgânica</td>
      <td>Ana Ferreira</td>
      <td>Química</td>
      <td>11º</td>
      <td>Editora Química Total</td>
      <td>978-4321098765</td>
    </tr>
    <tr>
      <th>20</th>
      <td>Literatura Brasileira</td>
      <td>Pedro Gomes</td>
      <td>Literatura</td>
      <td>12º</td>
      <td>Livros Literários</td>
      <td>978-2109876543</td>
    </tr>
    <tr>
      <th>21</th>
      <td>Matemática Avançada</td>
      <td>Carlos Silva</td>
      <td>Matemática</td>
      <td>10º</td>
      <td>Livros Universais</td>
      <td>978-1234567890</td>
    </tr>
    <tr>
      <th>22</th>
      <td>História Mundial</td>
      <td>Maria Santos</td>
      <td>História</td>
      <td>11º</td>
      <td>Editora Histórias Vividas</td>
      <td>978-9876543210</td>
    </tr>
    <tr>
      <th>23</th>
      <td>Biologia Celular</td>
      <td>João Rodrigues</td>
      <td>Biologia</td>
      <td>12º</td>
      <td>BioLivros</td>
      <td>978-5678901234</td>
    </tr>
    <tr>
      <th>24</th>
      <td>Química Orgânica</td>
      <td>Ana Ferreira</td>
      <td>Química</td>
      <td>11º</td>
      <td>Editora Química Total</td>
      <td>978-4321098765</td>
    </tr>
    <tr>
      <th>25</th>
      <td>Literatura Brasileira</td>
      <td>Pedro Gomes</td>
      <td>Literatura</td>
      <td>12º</td>
      <td>Livros Literários</td>
      <td>978-2109876543</td>
    </tr>
  </tbody>
</table>
<Alert text="Você está entrando como Leandro"/>
</div>);  
};