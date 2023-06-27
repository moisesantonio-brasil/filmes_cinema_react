/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from 'react-router-dom'
import capa28 from "../capasdefilme/capa28.png"
  
function Linksérgio(){
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
<h1 style={titulo_link}>SÉRGIO</h1>
    <div style={espaço_link}>
        <img src={capa28} alt="" style={img_link}/>
        <ul>
            <li style={texto_link}>DATA DE LANÇAMENTO:<mark> 28 de janeiro de 2020 (mundial)</mark></li>
            <li style={texto_link}>DIRETORES:<mark>Greg Barker</mark></li>
            <li style={texto_link}>AUTORA:<mark>Samantha Power</mark></li>
            <li style={texto_link}>MÚSICA COMPOSTA POR:<mark>Fernando Velázquez</mark></li>
            <li style={texto_link}>CINAMATOGRAFIA:<mark> Adrian Teijido, Richie Moore</mark></li>
            <li style={texto_link}>FIGURINO:<mark> Jo Katsaras</mark></li>
        </ul>
</div>
<p style={descriçao_link} >
    Sergio é um filme de drama biográfico norte-americano, dirigido por Greg Barker,
     a partir de um roteiro de Craig Borten. É estrelado por Wagner Moura, Ana de Armas,
     Garret Dillahunt, Brían F. O'Byrne, Will Dalton, Clemens Schick e Bradley Whitford.[1]
    Sua estreia mundial aconteceu no Sundance Film Festival, em 28 de janeiro de 2020.[2]
    O filme retrata a invasão do Iraque pelos Estados Unidos e relata os últimos dias de vida 
    do diplomata brasileiro Sérgio Vieira de Mello, funcionário da ONU, que morreu aos 55 anos 
    em Bagdá, vítima de um ataque terrorista na sede local da instituição.[3]
</p>
</>
)
}

export default Linksérgio