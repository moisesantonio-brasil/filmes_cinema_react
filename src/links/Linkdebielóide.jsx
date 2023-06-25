import { useNavigate } from 'react-router-dom'
import capa12 from "/Users/moise/Desktop/Projetos/REACT/FILMES_CINEMA/filmes_cinema/filmes_cinema/src/capasdefilme/capa12.png"

function Linkdebielóide(){
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
<> <button onClick={handleClick} style={voltar_btn}>Voltar</button>
    <h1 style={titulo_link}>DEBI E LÓIDE</h1>
    <div style={espaço_link}>
        <img src={capa12} alt="" style={img_link}/>
        <ul>
            <li style={texto_link}>DATA DE LANÇAMENTO:<mark>27 de fevereiro de 1995 (Brasil)</mark></li>
            <li style={texto_link}>DIRETORES:<mark>Peter Farrelly</mark></li>
            <li style={texto_link}>BILHETERIA:<mark> 247,3 milhões USD</mark></li>
            <li style={texto_link}>MÚSICA COMPOSTA POR:<mark> Todd Rundgren, Bootsy Collins, Pete Droge</mark></li>
            <li style={texto_link}>ROTEIRO:<mark>Peter Farrelly, Bobby Farrelly, Bennett Yellin</mark></li>
            <li style={texto_link}>DITRIBUÍDO POR:<mark> New Line Cinema</mark></li>
        </ul>
</div>
<p style={descriçao_link} >
    DEBI E LÓIDE é um filme de comédia de estrada estadunidense de 1994, estrelado por Jim Carrey
     e Jeff Daniels. Foi escrito e dirigido pelos irmãos Peter e Bobby Farrelly, e é a sua estreia
      como diretores. O filme conta a história de Lloyd Christmas e Harry Dunne, dois amigos de boa
       índole, mas pouco inteligentes de Providence, Rhode Island, que partem em uma viagem estadual
        para Aspen, Colorado, para devolver uma maleta cheia de dinheiro para sua dona.

    Foi lançado em 16 de dezembro de 1994 nos Estados Unidos. No Brasil, o filme foi lançado em
     14 de julho de 1995. Embora a recepção inicial para Dumb and Dumber foi mista, foi um sucesso
      comercial e desenvolveu um culto de seguidores nos anos desde então.[5][6] O sucesso de Dumb
       and Dumber lançou a carreira dos irmãos Farrelly e ajudou a de Carrey.[7] O filme também 
       gerou uma série animada de televisão, uma prequela de 2003 e uma sequência, lançado em 2014.
</p>
</>
)
}
export default Linkdebielóide