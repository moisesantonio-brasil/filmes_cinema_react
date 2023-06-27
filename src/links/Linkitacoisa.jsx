import { useNavigate } from 'react-router-dom'
import capa23 from "../capasdefilme/capa23.png"
   
function Linkitacoisa(){
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
<h1 style={titulo_link}>IT A COISA CAP-2</h1>
    <div style={espaço_link}>
        <img src={capa23} alt="" style={img_link}/>
        <ul>
            <li style={texto_link}>DATA DE LANÇAMENTO:<mark>  5 de setembro de 2019 (Brasil)</mark></li>
            <li style={texto_link}>DIRETORES:<mark>Andy Muschietti</mark></li>
            <li style={texto_link}>BILHETERIA:<mark>473,1 milhões USD</mark></li>
            <li style={texto_link}>ROTEIRO:<mark> Gary Dauberman</mark></li>
            <li style={texto_link}>ORÇAMENTO:<mark> 79 milhões USD</mark></li>
        </ul>
</div>
<p style={descriçao_link} >
    It Chapter Two (Brasil e em Portugal: It — Capítulo Dois[4][5]) é um filme de terror
     sobrenatural estadunidense de 2019, baseado no romance homônimo de 1986, de Stephen King, 
     dirigido por Andy Muschietti e escrito por Gary Dauberman, sendo a sequência de It, de 2017.
      Produzido pela New Line Cinema, Vertigo Entertainment, Rideback e KatzSmith Productions e
       distribuído pela Warner Bros. Pictures, é estrelado por Bill Skarsgård, que reprisa seu papel
        do título anterior como Pennywise, James McAvoy, Jessica Chastain, Jay Ryan, Bill Hader, 
        Isaiah Mustafa, James Ransone e Andy Bean retratam as versões adultas do Clube dos 
        Perdedores, enquanto Jaeden Lieberher, Sophia Lillis, Jeremy Ray Taylor, Finn Wolfhard, 
        Chosen Jacobs, Jack Dylan Grazer e Wyatt Oleff retornam do primeiro filme como os Perdedores
         mais jovens, respectivamente. Ambientado em 2016, vinte e sete anos após os eventos de 1989
          descritos no primeiro filme.

    It Chapter Two foi lançado em 6 de setembro de 2019 nos Estados Unidos. No Brasil e em Portugal, 
    a estreia aconteceu no dia 5 de setembro de 2019. Com um orçamento estimado entre US$ 60 e 79
     milhões,[2][3] arrecadou mais de US$ 473 milhões mundialmente.[1
</p>
</>
)
}
export default Linkitacoisa