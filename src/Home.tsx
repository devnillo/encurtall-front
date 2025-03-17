import Header from "./Components/Header"
import './App.css'

function Home() {
  

  return (
    <>
        <body>
            <Header />
            <main className="p-4">
                <div className="content mx-auto">
                        <h3 className="">Minhas Rotas</h3>
                        <div className="cards">
                            <div className="card">
                                <a href="" className="text-blue-700 underline text-[150%]">encrtall.com/uri</a>
                                <div className="btnSection flex gap-1">
                                    <a href="" className="cardBtn bg-gray-500">
                                        <button>Editar</button>
                                    </a>
                                    <a href="" className="cardBtn bg-red-500">
                                        <button>Deletar</button>
                                    </a>
                                    <a href="" className="cardBtn bg-blue-500">
                                        <button>Copiar</button>
                                    </a>                                    
                                </div>
                            </div>                     
                        </div>
                </div>    
            </main>    
        </body>
    </>
  )
}

export default Home
