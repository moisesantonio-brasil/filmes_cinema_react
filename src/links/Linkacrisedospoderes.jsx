import { useNavigate } from 'react-router-dom'
import capa29 from "/Users/moise/Desktop/Projetos/REACT/FILMES_CINEMA/filmes_cinema/filmes_cinema/src/capasdefilme/capa29.png"
function Linkcrisedospoderes(){
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
    <h1 style={titulo_link}>A CRISE DOS 3 PODERES</h1>
    <div style={espaço_link}>
        <img src={capa29} alt="" style={img_link}/>
        <ul>
            <li style={texto_link}>DATA DE LANÇAMENTO:<mark>Trailer Agosto de 2022</mark></li>
            <li style={texto_link}>DIRETORES:<mark>Desconhecido</mark></li>
            <li style={texto_link}>DIVULGAÇÃO:<mark>Brasil Paralelo</mark></li>
            
        </ul>
</div>
<p style={descriçao_link} >
    Uma produção inédita que revela as verdadeiras causas da instabilidade política do nosso país.
    Para uns, a democracia está sendo ameaçada pelo Poder Executivo. Para outros, 
    o Poder Judiciário e a existência de uma camada política do Congresso Nacional impedem a
     governabilidade. Afinal de contas, o que está relacionado com o Brasil?
</p>
</>
)
}
export default Linkcrisedospoderes