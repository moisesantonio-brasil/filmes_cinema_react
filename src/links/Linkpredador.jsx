import { useNavigate } from 'react-router-dom'
import capa20 from "/Users/moise/Desktop/Projetos/REACT/FILMES_CINEMA/filmes_cinema/filmes_cinema/src/capasdefilme/capa20.png"
    
function Linkpredador(){
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
        margin:"5px",
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
    <h1 style={titulo_link}>PREDADOR</h1>
    <div style={espaço_link}>
        <img src={capa20} alt="" style={img_link}/>
        <ul>
            <li style={texto_link}>DATA DE LANÇAMENTO:<mark> 13 de setembro de 2018 (Brasil)</mark></li>
            <li style={texto_link}>DIRETORES:<mark>Shane Black</mark></li>
            <li style={texto_link}>BILHETERIA:<mark>160,5 milhões USD</mark></li>
            <li style={texto_link}>GÊNERO:<mark> filme de ação; filme de ficção científica</mark></li>
        </ul>
</div>
<p style={descriçao_link} >
    The Predator (bra/prt: O Predador)[2][3] é um filme estadunidense de 2018, de ação 
    e ficção científica, dirigido por Shane Black e escrito por Black e Fred Dekker.
    É o quarto filme da série Predador.

    O filme é estrelado por Boyd Holbrook, Trevante Rhodes, Jacob Tremblay, Keegan-Michael Key, 
    Olivia Munn, Sterling K. Brown, Thomas Jane e Alfie Allen. Foi lançado em 14 de setembro de 
    2018 nos Estados Unidos.
</p>
</>
)
} 
export default Linkpredador