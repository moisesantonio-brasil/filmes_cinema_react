/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from 'react-router-dom'
import capa11 from "../capasdefilme/capa11.png"

function Linksebeber(){
    const navigate = useNavigate()

    function handleClick() {
        navigate('/')
      } 

    const titulo_link = {
        textAlign: "center",
        fontSize: "50px",
        marginTop: "0px",
        marginBottom: "20px",
        fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;",
        background: "linear-gradient(to left,rgb(39, 47, 94),rgb(76, 89, 124),rgb(33, 47, 61)) ;",
        width: "auto"
    }
    const espaço_link = {
    width: "1000px",
    height: "450px",
    backgroundColor: "gray",
    margin: "auto",
    display: "flex",
    flexWrap: "wrap",
    marginBottom: "15px",
    borderRadius: "20px"
    }
    const img_link = {
        width: "300px",
        height: "450px",
        borderRadius: "20px 0px 0px 20px"
    }
    const texto_link = {
        fontFamily:" 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;",
        marginTop: "14px",
        listStyle: "none",
        margin:"20px"
    }
    const descriçao_link = {
        textAlign: "center",
        margin:"auto",
        fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;"
    }
    const voltar_btn = {
        margin:"10px",
        fontFamily:"arial",
        fontSize:"18px",
        backgroundColor:"silver",
        padding:"4px",
        borderRadius:"20px",
        border:"none"
    }
return(
<><button onClick={handleClick} style={voltar_btn}>Voltar</button>
    <h1 style={titulo_link}>SE BEBER,NÃO CASE!</h1>
    <div style={espaço_link}>
        <img src={capa11} alt="" style={img_link}/>
        <ul>
            <li style={texto_link}>DATA DE LANÇAMENTO:<mark>21 de agosto de 2009 (Brasil)</mark></li>
            <li style={texto_link}>DIRETORES:<mark>Todd Phillips</mark></li>
            <li style={texto_link}>BILHETERIA:<mark>469,3 milhões USD</mark></li>
            <li style={texto_link}>PRÊMIOS:<mark> Prêmio Globo de Ouro: Melhor Filme Cômico ou Musical, MAIS</mark></li>
            <li style={texto_link}>ROTEIRO:<mark> Todd Phillips, Jon Lucas, Scott Moore</mark></li>
        </ul>
</div>
<p style={descriçao_link} >
    Se Beber, Não Case! é um filme de comédia estadunidense, coproduzido e dirigido por 
    Todd Phillips e escrito por Jon Lucas e Scott Moore. O filme é estrelado por Bradley Cooper,
     Ed Helms, Zach Galifianakis, Heather Graham, Justin Bartha e Jeffrey Tambor. The Hangover 
     conta a história de Phil Wenneck, Stuart Price e Alan Garner, que viajam para Las Vegas para 
     uma despedida de solteiro e celebrar o casamento do seu amigo Doug Billings. No entanto, Phil,
      Stu e Alan não têm memória de eventos da noite anterior e devem encontrar Doug antes do 
      casamento começar.

O filme custou 35 milhões de dólares, e estreou no topo das bilheterias americanas com 44 milhões
 de dólares em três dias, se mantendo no posto na semana seguinte.[5] The Hangover superou There's 
 Something About Mary como comédia censurada para menores de 18 anos nos Estados Unidos mais
  lucrativa da história, com 275,9 milhões de dólares na América do Norte e 458 milhões no mundo.[6] 
  Também estreou no topo das bilheterias brasileiras,[7] e já atraiu mais de 1,4 milhão de 
  espectadores.[8] O sucesso levou o filme 
  a ter uma continuação, chamada The Hangover: Part II, lançado em 2011.[9]
</p>
</>
)
}
export default Linksebeber