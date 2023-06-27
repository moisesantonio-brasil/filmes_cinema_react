/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from 'react-router-dom'
import capa4 from "../capasdefilme/capa4.png"
    
function Linkpanteranegra(){
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
    <h1 style={titulo_link}>PANTERA NEGRA</h1>
    <div style={espaço_link}>
        <img src={capa4} alt="" style={img_link}/>
        <ul>
            <li style={texto_link}>DATA DE LANÇAMENTO:<mark>15 de fevereiro de 2018 (Brasil)</mark></li>
            <li style={texto_link}>DIRETORES:<mark>Ryan Coogler</mark></li>
            <li style={texto_link}>BILHETERIA:<mark>1,344 bilhão USD</mark></li>
            <li style={texto_link}>INDICAÇÕES:<mark> Oscar de Melhor Trilha Sonora Original, MAIS</mark></li>
            <li style={texto_link}>AUTORES:<mark>Stan Lee, Jack Kirby, Jim Starlin</mark></li>
            <li style={texto_link}>FIGURINO:<mark>Ruth E. Carter</mark></li>
        </ul>
</div>
<p style={descriçao_link} >
    Black Panther (bra: Pantera Negra; prt: Black Panther)[1][6] é um filme
     estadunidense de 2018, do gênero super-herói, baseado no personagem de mesmo nome 
     da Marvel Comics, produzido pela Marvel Studios e distribuído pela 
     Walt Disney Studios Motion Pictures, sendo o décimo oitavo filme do Universo 
     Cinematográfico Marvel, além de ser o primeiro título solo do personagem. Dirigido por
      Ryan Coogler, que também contribuiu com o roteiro ao lado de Joe Robert Cole, é estrelado por 
      Chadwick Boseman como T'Challa / Pantera Negra, Michael B. Jordan, Lupita Nyong'o, Martin 
      Freeman, Daniel Kaluuya, Angela Bassett, Danai Gurira, Andy Serkis e Forest Whitaker. Em Black
       Panther, T'Challa volta a casa como rei de Wakanda, mas encontra sua soberania desafiada por
        um adversário de longa data em um conflito que tem consequências globais.
        </p>
</>
)
}
export default Linkpanteranegra