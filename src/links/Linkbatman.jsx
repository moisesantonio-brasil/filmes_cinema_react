import { useNavigate } from 'react-router-dom'
import capa7 from "/Users/moise/Desktop/Projetos/REACT/FILMES_CINEMA/filmes_cinema/filmes_cinema/src/capasdefilme/capa7.png"
    
function Linkbatman(){
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
    <h1 style={titulo_link}>BATMAN 2022</h1>
    <div style={espaço_link}>
        <img src={capa7} alt="" style={img_link}/>
        <ul>
            <li style={texto_link}>DATA DE LANÇAMENTO:<mark>3 de março de 2022 (Brasil)</mark></li>
            <li style={texto_link}>DIRETORES:<mark>Matt Reeves</mark></li>
            <li style={texto_link}>BILHETERIA:<mark>770,9 milhões USD</mark></li>
            <li style={texto_link}>MÚSICA COMPOSTA POR:<mark>Michael Giacchino</mark></li>
            <li style={texto_link}>ROTEIRO:<mark> Matt Reeves, Peter Craig</mark></li>
            <li style={texto_link}>CINEMATOGRAFIA:<mark>Greig Fraser</mark></li>
        </ul>
</div>
<p style={descriçao_link} >
    The Batman (Brasil: Batman / Portugal: The Batman) é um filme de super-herói estadunidense,
    baseado no personagem Batman da editora DC Comics, um reboot da franquia Batman produzido pela 
    DC Films, 6th & Idaho e Dylan Clark Productions, e dirigido por Matt Reeves, roteirista junto 
    com Peter Craig. É estrelado por Robert Pattinson como Bruce Wayne / Batman, ao lado de Zoë 
    Kravitz, Paul Dano, e Colin Farrell. Que segue a história de Batman em seu segundo ano de luta 
    contra o crime em busca de vingança, quando descobre a corrupção em Gotham City enquanto
    persegue o Charada (Dano), um assassino em série que tem como alvo a elite de Gotham.

<br/>Ben Affleck, que interpretou o Batman no Universo Estendido DC (UEDC), foi definido para dirigir,
 produzir, coescrever e estrelar The Batman em 2014, mas em 2017 desistiu devido à insatisfação 
 com seu próprio roteiro. Reeves foi contratado para assumir e retrabalhar a história de Affleck 
 para se concentrar em um Batman mais jovem; procurando explora-lo como um detetive mais do que os 
 filmes anteriores, inspirado nas histórias em quadrinhos de 1987, 1996 e, 2000. Pattinson foi 
 escalado em maio de 2019, com mais escalações de elenco ocorrendo no final daquele ano. 
 As filmagens ocorreram no Reino Unido e em Chicago, com duração de janeiro de 2020 a março de 2021.


</p>
</>
)
}
export default Linkbatman