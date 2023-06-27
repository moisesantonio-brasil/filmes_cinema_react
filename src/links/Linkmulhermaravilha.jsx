import { useNavigate } from 'react-router-dom'
import capa8 from "../capasdefilme/capa8.png"

function Linkmulhermaravilha(){
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
<h1 style={titulo_link}>MULHER MARAVILHA</h1>
    <div style={espaço_link}>
        <img src={capa8} alt="" style={img_link}/>
        <ul>
            <li style={texto_link}>DATA DE LANÇAMENTO:<mark>1 de junho de 2017 (Brasil)</mark></li>
            <li style={texto_link}>DIRETORES:<mark>Patty Jenkins</mark></li>
            <li style={texto_link}>BILHETERIA:<mark> 822,8 milhões USD</mark></li>
            <li style={texto_link}>MÚSICA COMPOSTA POR:<mark>Rupert Gregson-Williams</mark></li>
<li style={texto_link}>AUTORES:<mark>  Zack Snyder, William Moulton Marston, Allan Heinberg...</mark></li>
        </ul>
</div>
<p style={descriçao_link} >
    Wonder Woman (no Brasil e em Portugal, Mulher-Maravilha) é um filme americano de super-herói
     de 2017, baseado na personagem homônima da DC Comics e distribuído pela Warner Bros. Pictures.
      É o quarto filme do Universo Estendido DC. O filme é dirigido por Patty Jenkins, com um 
      roteiro de Allan Heinberg. O elenco é composto por Gal Gadot, Chris Pine, Robin Wright, 
      Danny Huston, David Thewlis, Connie Nielsen e Elena Anaya. O filme conta a história da Princesa
       Diana, que cresce na ilha de Themyscira. Depois que o piloto americano Steve Trevor cai no 
       mar da ilha e é resgatado por Diana, ele fala sobre a Primeira Guerra Mundial.
        Ela então deixa sua casa para tentar acabar com o conflito.

    O desenvolvimento de um filme da Mulher-Maravilha estava em andamento desde 1996, com o projeto
     passando por várias pessoas. Jenkins assinou para dirigir em 2015. As filmagens começaram no
      final de novembro de 2015, com filmagens ocorrendo no Reino Unido, França e Itália antes de 
      terminar em 19 de maio de 2016, o 123º aniversário do criador da personagem, William Moulton 
      Marston. Também ocorreram filmagens adicionais em novembro de 2016. Jenkins é a primeira
       mulher a dirigir um filme de super-herói com uma protagonista feminina.[3]
</p>
</>
)
}
export default Linkmulhermaravilha