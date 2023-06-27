import { useNavigate } from 'react-router-dom'
import capa27 from "../capasdefilme/capa27.png"
   
function Linkosamba(){
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
<h1 style={titulo_link}>O SAMBA</h1>
    <div style={espaço_link}>
        <img src={capa27} alt="" style={img_link}/>
        <ul>
            <li style={texto_link}>DATA DE LANÇAMENTO:<mark>setembro de 2014 (Brasil)</mark></li>
            <li style={texto_link}>DIRETORES:<mark>Georges Gachot</mark></li>
            <li style={texto_link}>ELENCO:<mark>Martilho da Vila, Ney Matogrosso,Nana,Leci Brandão</mark></li>
            <li style={texto_link}>PRODUÇÃO:<mark>Georges Gachot</mark></li>
            <li style={texto_link}>EDIÇÃO:<mark>Ruth Sclãpfer</mark></li>
        </ul>
</div>
<p style={descriçao_link} >
    O SAMBA mostra que o samba não é apenas uma dança com movimentos sensuais, mas que também
     é palavra, linguagem e estilo de vida.
    O cantor Martinho da Vila irá guiar o espectador através do mundo do samba, contando histórias 
    sobre sua carreira e apresentando sua escola do coração, a campeã do Carnaval do Rio em 2013,
    Vila Isabel. Um filme de Georges Gachot.
</p>
</>
)
}

export default Linkosamba