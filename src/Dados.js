import { Link } from "react-router-dom";

function BasesDados(){
    return(<div>
<div class="bg-gray-50 min-h-screen flex flex-col items-center justify-center px-16">
    <h1 className="text-lg font-semibold leading-6 texto">Bem vindo as instituições cadastradas no Didacto</h1>
  <div class="relative w-full max-w-lg">
    <div class="absolute top-0 -left-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
    <div class="absolute top-0 -right-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    <div class="absolute -bottom-32 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    <div class="m-8 relative space-y-4">
      <div class="p-7 bg-white rounded-lg flex items-center justify-between space-x-8">
        <div class="dados flex-1 flex justify-between items-center">
          <div class="text-md font-semibold leading-7 text-gray-900">Etec Albert Einstein</div>
          <Link to={'/Instituicao/Etec'} class="w-24 h-6 rounded-lg bg-blue-400 btn text-white">Entrar</Link>
        </div>
      </div>
      <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
        <div class="flex-1 flex justify-between items-center">
          <div class="h-4 w-48 bg-gray-400 rounded"></div>
          <div class="w-24 h-6 rounded-lg bg-blue-400"></div>
        </div>
      </div>
      <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
        <div class="flex-1 flex justify-between items-center">
          <div class="h-4 w-48 bg-gray-400 rounded"></div>
          <div class="w-24 h-6 rounded-lg bg-blue-400"></div>
        </div>
      </div>
      <button className="btn btn-success w-100 ">Adicionar Instituição</button>

    </div>
  </div>
</div>
    </div>)
}


export default BasesDados;