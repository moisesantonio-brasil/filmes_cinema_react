/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from 'react-router-dom'
import capa2 from "../capasdefilme/capa2.png"

function Linkshangchi(){
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
    <h1 style={titulo_link}>SHANG-CHI</h1>
    <div style={espaço_link}>
        <img src={capa2} alt="" style={img_link}/>
        <ul>
            <li style={texto_link}>DATA DE LANÇAMENTO:<mark>2 de setembro de 2021 (Brasil)</mark></li>
            <li style={texto_link}>DIRETORES:<mark>Destin Cretton</mark></li>
            <li style={texto_link}>BILHETERIA:<mark>432,2 milhões USD</mark></li>
            <li style={texto_link}>INDICAÇÕES:<mark>  Oscar de Melhores Efeitos Visuais, MAIS</mark></li>
            <li style={texto_link}>AUTORES:<mark>Destin Cretton, David Callaham, Andrew Lanham</mark></li>
            <li style={texto_link}>PRODUÇÃO:<mark>Kevin Feige, Jonathan Schwartz</mark></li>
        </ul>
</div>
<p style={descriçao_link} >
    Shang-Chi and the Legend of the Ten Rings (bra/prt: Shang-Chi e a Lenda dos Dez Anéis)
    [5][6] é um filme estadunidense de super-herói de 2021 baseado no personagem Shang-Chi da Marvel
     Comics. Produzido pelo Marvel Studios e distribuído pela Walt Disney Studios Motion Pictures, 
     é o vigésimo quinto filme do Universo Cinematográfico Marvel. O filme foi dirigido por Destin 
     Daniel Cretton, a partir de um roteiro que ele escreveu junto com David Callaham e 
     Andrew Lanham, e é estrelado por Simu Liu como Shang-Chi, ao lado de Awkwafina, Meng'er Zhang, 
     Fala Chen, Florian Munteanu, Benedict Wong, Michelle Yeoh, Ben Kingsley e Tony Leung. No filme, 
     Shang-Chi é forçado a confrontar seu passado quando seu pai, Wenwu (Leung), o líder da 
     organização Dez Anéis, atrai Shang-Chi e sua irmã Xialing (Zhang) em uma busca por uma vila 
     mística.
</p></>
)
}
export default Linkshangchi