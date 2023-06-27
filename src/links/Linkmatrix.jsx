/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from 'react-router-dom'
import capa19 from "../capasdefilme/capa19.png"

function Linkmatrix(){
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
        backgroundColor:"azure",
        padding:"4px",
        borderRadius:"20px",
        border:"none"
    }
return(
<><button onClick={handleClick} style={voltar_btn}>Voltar</button>
    <h1 style={titulo_link}>MATRIX</h1>
    <div style={espaço_link}>
        <img src={capa19} alt="" style={img_link}/>
        <ul>
            <li style={texto_link}>DATA DE LANÇAMENTO:<mark>21 de maio de 1999 (Brasil)</mark></li>
            <li style={texto_link}>DIRETORES:<mark>Lana Wachowski, Lilly Wachowski</mark></li>
            <li style={texto_link}>BILHETERIA:<mark>467,2 milhões USD</mark></li>
            <li style={texto_link}>PRÊMIOS:<mark>Oscar de Melhores Efeitos Visuais, MAIS</mark></li>
            <li style={texto_link}>ROTEIRO:<mark> Lana Wachowski, Lilly Wachowski</mark></li>
        </ul>
</div>
<p style={descriçao_link} >
    The Matrix (bra/prt: Matrix)[1][2] é um filme australo-estadunidense de 1999,
     dos gêneros ação e ficção científica, dirigido por Lilly e Lana Wachowski e
      protagonizado por Keanu Reeves, Laurence Fishburne e Carrie-Anne Moss, onde o enredo descreve 
      um futuro ciberpunk distópico no qual a realidade, como percebida pela maioria dos humanos, é,
       na verdade, uma realidade simulada por computador chamada "Matrix", criada por máquinas 
       sencientes (evolução da inteligência artifical) para subjugar a população humana na forma de
        hibernação, enquanto o calor e a atividade elétrica de seus corpos são usados ​​como fonte de 
        energia. O cibercriminoso e programador de computador Neo aprende esta verdade e, é atraído 
        para uma rebelião contra as máquinas, que envolve outras pessoas que foram libertadas do 
        "mundo dos sonhos".

    É creditado a Matrix a popularização de um efeito visual conhecido como "bullet time", no qual 
    a percepção aprimorada de certos personagens é representada, permitindo que a ação referênte a
     um tiro (disparo de um projétil) progrida em câmera lenta enquanto o ponto de vista da câmera 
     parece mover-se pela cena em velocidade normal.
</p>
</>
)
}
export default Linkmatrix