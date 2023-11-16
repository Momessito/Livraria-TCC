import ValidadorLogin from '../BackEnd/ValidadorLogin';
import './instituicao.css'
import { Link } from "react-router-dom";

<ValidadorLogin/>

function EtecAlbertEinstein(){


    return(
        <div className='fadeInsti'>
            <div className='fade'></div>
            <div className='hero bg-white flex  heroinst justify-around	 p-5'>
<div ><h1 className='py-6 text-base font-semibold leading-7 text-gray-900'>Bem vindo de volta , <h1 className='text-lg font-semibold leading-6 texto'>{localStorage.getItem('userEmail')}</h1></h1></div>
<div className='flex flex-column content-end	'>
<span className='badge badge-ghost badge-sm'>Etec Albert Einstein</span></div>
</div>
<br />
<br />
<br />
<div className="card bg-primary text-primary-content" style={{ backgroundColor: 'rgb(0, 168, 244)' }}>
  <div className="card-body">
<div className='actions'>
<h1 className='stat-value'>O que deseja fazer hoje?</h1>
<p className='stat-title text-white'>Selecione a atividade desejada:</p>
<br />
<div className="join join-horizontal lg:join-horizontal">
  <Link to="/CadastroLi" className="btn join-item">Cadastrar</Link>
  <button className="btn join-item">Consultar</button>
  <button className="btn join-item">Devolver</button>
</div>
</div>
</div></div>
<br />
<br />
<br />
<div className="stats stats-vertical lg:stats-horizontal shadow">
  
  <div className="stat">
    <div className="stat-title">Downloads</div>
    <div className="stat-value">31K</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
  <div className="stat">
    <div className="stat-title">New Users</div>
    <div className="stat-value">4,200</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div className="stat">
    <div className="stat-title">New Registers</div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
<br />
<br />
<br />
<div className='actions'>

<h1  className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Emprestimos no meu nome:</h1>
  <h2>Nenhum...</h2>
  <br />
<br />
<br />
     </div>   </div>
    )

    function MudarLogo(){
       let navbar = document.getElementById('navbar')
       navbar.style.width = '100%'
       navbar.style.transform = 'translateY(0px)'
       navbar.style.marginLeft  = '0px'
       navbar.style.borderRadius  = '0px'
    }

}
export default EtecAlbertEinstein;