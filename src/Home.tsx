import Header from "./Components/Header"
import './App.css'

interface data { 
    id: number, 
    link: string, 
    uri: string 
}
function Home() {
   let data: data[] = [
    {
        id: 1,
        link: 'www.google.com',
        uri: 'google'
    },
    {
        id: 4,
        link: 'www.youtube.com',
        uri: 'youtube'
    },
    {
        id: 3,
        link: 'www.facebook.com',
        uri: 'facebook'
    }
   ]
  return (
    <>
    
        <body>
            <Header />
            <main className="p-4">
                <div className="content mx-auto">
                        <h3 className="">Minhas Rotas</h3>
                        <div className="cards">
                        {data.map(data => (
                            <div className="card">
                            <a href={"https://"+data.link} className="text-blue-700 underline text-[150%]">encurtall.com/{data.uri}</a>
                            <div className="btnSection">
                                <a href={"/edit/"+data.id} className="cardBtn bg-gray-500">
                                    <button>Editar</button>
                                </a>
                                <a href={"/delete/"+data.id} className="cardBtn bg-red-500">
                                    <button>Deletar</button>
                                </a>
                                <button className="cardBtn bg-blue-500">Copiar</button>
                            </div>
                        </div>  
                        ))

                        }                
                        </div>
                </div>    
            </main>    
        </body>
    </>
  )
}

export default Home
