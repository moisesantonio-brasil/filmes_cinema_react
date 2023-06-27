import { useNavigate } from 'react-router-dom'
import capa24 from "../capasdefilme/capa24.png"
function Linkannabelle(){
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
<><button onClick={handleClick} style={voltar_btn}>Voltar</button>
    <h1 style={titulo_link}>ANNABELLE</h1>
    <div style={espaço_link}>
        <img src={capa24} alt="" style={img_link}/>
        <ul>
            <li style={texto_link}>DATA DE LANÇAMENTO:<mark> 9 de outubro de 2014 (Brasil)</mark></li>
            <li style={texto_link}>DIRETORES:<mark>John R. Leonetti</mark></li>
            <li style={texto_link}>BILHETERIA:<mark>257,6 milhões USD</mark></li>
            <li style={texto_link}>DISTRIBUÍDO POR:<mark>Warner Bros.Picture</mark></li>
            <li style={texto_link}>ROTEIRO:<mark>Gary Dauberman</mark></li>
        </ul>
</div>
<p style={descriçao_link} >
    Annabelle é um filme estadunidense de terror sobrenatural de 2014, dirigido por John R. 
    Leonetti, produzido por James Wan e escrito por Gary Dauberman, derivado de Invocação do Mal,[2]
     sendo o segundo filme do Universo Invocação do Mal, inspirado no caso da boneca Annabelle,
      investigado pelos demonologistas Ed e Lorraine Warren.

    O filme é estrelado por Annabelle Wallis e Ward Horton. Foi lançado mundialmente no dia 3 de
     outubro de 2014.[3] Annabelle estreou no TCL Chinese Theatre, em Hollywood, Los Angeles, 
     em 29 de setembro de 2014.[4]
    
    Em agosto de 2017, estreou Annabelle 2: A Criação do Mal, prequela que se passa 12 anos 
    antes dos acontecimentos de Annabelle.
    
    E em junho de 2019 foi lançado o terceiro capítulo da boneca, intitulado Annabelle 3: De 
    Volta Para Casa, apresentado eventos pós os dois últimos filmes.
</p>
</>
)
}
export default Linkannabelle