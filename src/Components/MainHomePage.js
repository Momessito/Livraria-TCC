export default function MainHomePage(){
return(
  <div className="MainPage p-5 bg-white	">
  <h1 className="">Bem-vindo ao Didacto: Transformando a Educação através do Controle de Livros Didáticos</h1>
  <br />
  <h2>Revolutionizando o Acesso ao Conhecimento</h2>

  <p className="text-lg mt-5">
      No Didacto, estamos comprometidos em revolucionar a forma como a educação é abordada. Somos um grupo apaixonado por capacitar educadores e estudantes por meio do controle e acesso a livros didáticos essenciais. Nossa plataforma de última geração oferece soluções inovadoras para simplificar o cadastro, controle e distribuição de materiais de aprendizagem.
  </p>

  <div className="collapse collapse-arrow bg-neutral-200  m-5 mt-10">
      <input type="radio" name="my-accordion-2" checked="checked" /> 
      <div className="collapse-title text-xl font-medium">
          Por Que Escolher os Serviços do Didacto?
      </div>
      <div className="collapse-content"> 
          <p>
              O Didacto oferece uma abordagem abrangente para o gerenciamento de livros didáticos, desde o cadastro até o controle de estoque. Nossa plataforma intuitiva e repleta de recursos avançados otimiza os processos para instituições de todos os tamanhos, garantindo que educadores e alunos tenham acesso contínuo aos recursos necessários para o sucesso acadêmico.
          </p>
      </div>
  </div>

  <div className="collapse collapse-arrow bg-neutral-200  m-5">
      <input type="radio" name="my-accordion-2" /> 
      <div className="collapse-title text-xl font-medium">
          Capacitando Educadores e Alunos
      </div>
      <div className="collapse-content"> 
          <p>
              Nossa missão é capacitar educadores, fornecendo ferramentas robustas para o gerenciamento eficiente de recursos educacionais. Além de simplificar a catalogação e organização de livros, o Didacto incentiva a colaboração entre educadores, permitindo o compartilhamento de melhores práticas e materiais de ensino.
          </p>
      </div>
  </div>

  <div className="collapse collapse-arrow bg-neutral-200  m-5">
      <input type="radio" name="my-accordion-2" /> 
      <div className="collapse-title text-xl font-medium">
          Junte-se à Evolução Educacional
      </div>
      <div className="collapse-content"> 
          <p>
              Ao escolher o Didacto, você está abraçando a inovação na educação. Convidamos você a fazer parte desta jornada transformadora, contribuindo para aprimorar as experiências de aprendizagem de estudantes em todo o mundo. Juntos, estamos moldando o futuro da educação.
          </p>
      </div>
  </div>
</div>

);
};