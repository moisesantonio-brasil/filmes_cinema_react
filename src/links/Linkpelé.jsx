/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from 'react-router-dom'
import capa26 from "../capasdefilme/capa26.png"

function Linkpelé(){
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
<h1 style={titulo_link}>PELÉ</h1>
    <div style={espaço_link}>
        <img src={capa26} alt="" style={img_link}/>
        <ul>
            <li style={texto_link}>DATA DE LANÇAMENTO:<mark>23 de fevereiro de 2021 (mundial)</mark></li>
            <li style={texto_link}>DIRETORES:<mark>David Tryhorn, Ben Nicholas</mark></li>
            <li style={texto_link}>PRODUÇÃO:<mark> David Tryhorn, Ben Nicholas, Kevin Macdonald</mark></li>
            <li style={texto_link}>MÚSICA COMPOSTA POR:<mark> Antonio Pinto, Gabriel Ferreira, Felipe Kim</mark></li>
        </ul>
</div>
<p style={descriçao_link} >
    Pelé é um filme documentário brasileiro da Netflix, que estreou em 23 de fevereiro de 2021.[1]
    O documentário retrata o surgimento do "Rei do Futebol", apelido de Edson Arantes do Nascimento, 
    e sua jornada até a conquista do título da Copa do Mundo de 1970, além de trazer o olhar
     emocionado do ídolo mundial do futebol em relação à sua carreira e sua vida.[2]
     A direção ficará a cargo de Ben Nicholas e David Tryhorn. A dupla foi a responsável
     pela produção do documentário "Tudo ou Nada: Seleção Brasileira", contando a história
      da conquista da Copa América de 2019 com imagens exclusivas e acesso aos bastidores.
      Outras obras incluem "Kenny", sobre o ex-jogador Kenny Dalglish, e "Crossing the Line", 
      sobre o ex-atleta olímpico Danny Harris.
</p>
</>
)
}
export default Linkpelé