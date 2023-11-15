function CadL(){
    return(
        <div className="App">
 
        <div className="hero m-0">
    <div className="hero-content  ">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Cadastre os livros aqui!</h1>
<div>
    <img src="Li.png" alt="livroo" class="li"></img>

</div>
      </div>

        

      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
      <div class="absolute top-0 -left-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob z-index-1" style={{zIndex : '-1'}}></div>
      <div class="absolute top-0 -right-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" style={{zIndex : '-1'}}></div>
      <div class="absolute -bottom-32 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" style={{zIndex : '-1'}}></div>
        
        
        
        <div className="card-body ">

          <div className="form-control">
            <label className="label">
              <span className="label-text">Nome:  </span>
            </label>
              <input type="text" placeholder="email" className="input input-sm input-bordered"/>
          </div>

     
<div>
          <label className="label">
              <span className="label-text"> Materia: </span>
            </label>
          <select className="select select-bordered  select-sm w-full max-w-xs">
  <option disabled selected> Selecionar</option>
  <option>Matemática</option>
  <option>Ciências</option>
  <option>Biologia</option>
  <option>Português</option>
  <option>Inglês</option>
</select>
</div>


          <div className="form-control">
            <label className="label">
              <span className="label-text">Validade: </span>
            </label>
            <input type="date" placeholder="password" className="input  input-sm input-bordered"/>
            <label className="label">
            </label>
          </div>


          <div className="form-control">
            <label className="label">
              <span className="label-text">Quantidade: </span>
            </label>
            <input type="number" placeholder="password"  class="num" className=" input-xs input input-sm input-bordered"/>
            <label className="label">
            </label>
          </div>


          <div className="form-control mt-6">
            <button  className="btn btn-primary">Cadastrar</button>
          </div>

        </div>
      </div>
    </div>
  </div>
      </div>
  
  );
}

export default CadL;