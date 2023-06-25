import { useNavigate } from 'react-router-dom'
import capa3 from "/Users/moise/Desktop/Projetos/REACT/FILMES_CINEMA/filmes_cinema/filmes_cinema/src/capasdefilme/capa3.png"

function Linketernos(){

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
    <h1 style={titulo_link}>ETERNOS</h1>
    <div style={espaço_link}>
        <img src={capa3} alt="" style={img_link}/>
        <ul>
            <li style={texto_link}>DATA DE LANÇAMENTO:<mark> 4 de novembro de 2021 (Brasil)</mark></li>
            <li style={texto_link}>DIRETORES:<mark>Chloé Zhao</mark></li>
            <li style={texto_link}>BILHETERIA:<mark>402,1 milhões USD</mark></li>
            <li style={texto_link}>MÚSICA COMPOSTA POR:<mark>Ramin Djawadi</mark></li>
            <li style={texto_link}>ROTEIRO:<mark> Chloé Zhao, Kaz Firpo, Patrick Burleigh, Ryan Firpo</mark></li>
            <li style={texto_link}>ORÇAMENTO:<mark> 200 milhões USD</mark></li>
        </ul>
</div>
<p style={descriçao_link} >
    Eternals (bra: Eternos[6]; prt: Eternals (Eternos)[7]) é um filme estadunidense 
    de super-herói de 2021 baseado na equipe de mesmo nome da editora Marvel Comics. 
    Produzido pelo Marvel Studios e distribuído pela Walt Disney Studios Motion Pictures,
     é o vigésimo sexto filme do Universo Cinematográfico Marvel (UCM). O filme é dirigido
      por Chloé Zhao, que escreveu o roteiro com Patrick Burleigh, Ryan Firpo e Matthew K. Firpo.
       É estrelado por um ensemble cast que inclui Gemma Chan, Richard Madden, Kumail Nanjiani, 
       Lia McHugh, Brian Tyree Henry, Lauren Ridloff, Barry Keoghan, Don Lee, Harish Patel, Kit 
       Harington, Salma Hayek e Angelina Jolie. No filme, os Eternos, uma raça alienígena imortal, 
       emergem do anonimato depois de milhares de anos para proteger a Terra de suas contrapartes do
        mal, os Deviantes.
</p> </> )
}
export default Linketernos