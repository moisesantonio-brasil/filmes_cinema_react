import { useNavigate } from 'react-router-dom'
import capa5 from "../capasdefilme/capa5.png"
function Linkguerracivil(){
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
<h1 style={titulo_link}>GUERRA CIVIL</h1>
    <div style={espaço_link}>
        <img src={capa5} alt="" style={img_link}/>
        <ul>
            <li style={texto_link}>DATA DE LANÇAMENTO:<mark>  28 de abril de 2016 (Brasil)</mark></li>
            <li style={texto_link}>DIRETORES:<mark>Anthony Russo</mark></li>
            <li style={texto_link}>BILHETERIA:<mark>1,153 bilhão USD</mark></li>
            <li style={texto_link}>MÚSICA COMPOSTA POR:<mark> Henry Jackman</mark></li>
            <li style={texto_link}>ROTEIRO:<mark>Christopher Markus, Stephen McFeely</mark></li>
            <li style={texto_link}>ORÇAMENTO:<mark>250 milhões USD</mark></li>
        </ul>
</div>
<p style={descriçao_link} >
    Captain America: Civil War (bra/prt: Capitão América: Guerra Civil)[4][5] é um filme
    estadunidense de super-herói de 2016, produzido pela Marvel Studios e distribuído pela Walt
     Disney Studios Motion Pictures. É a sequência de Captain America: The Winter Soldier, de 2014,
      sendo a terceira produção solo do personagem iniciado com Captain America: The First Avenger 
      em 2011, além de ser o décimo terceiro filme do Universo Cinematográfico Marvel. O filme é 
      dirigido por Anthony e Joe Russo, com roteiro de Christopher Markus e Stephen McFeely, e
       apresenta um elenco que inclui Chris Evans, Robert Downey Jr., Scarlett Johansson, Sebastian 
       Stan, Anthony Mackie, Emily VanCamp, Don Cheadle, Jeremy Renner, Chadwick Boseman, Paul
        Bettany, Elizabeth Olsen, Paul Rudd, Tom Holland, Frank Grillo, Daniel Brühl e William Hurt.
         No filme, o Capitão América lidera os Vingadores e continuam a proteger o mundo, mas a 
         equipe sofre danos colaterais. Com o aumento da pressão política que resulta na instituição
          de um sistema de responsabilidade e conselho governamental para determinar quando solicitar
           os serviços da equipe. Isto faz com que a equipe se divida — uma liderada por Steve Rogers
            e outra por Tony Stark.
</p>
</>
)
}
export default Linkguerracivil