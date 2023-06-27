import { useNavigate } from 'react-router-dom'
import capa22 from "../capasdefilme/capa22.png"
function Linkaórfã(){
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
<> <button onClick={handleClick} style={voltar_btn}>Voltar</button>
    <h1 style={titulo_link}>A ÓRFÃ</h1>
    <div style={espaço_link}>
        <img src={capa22} alt="" style={img_link}/>
        <ul>
            <li style={texto_link}>DATA DE LANÇAMENTO:<mark>24 de julho de 2009 (EUA)</mark></li>
            <li style={texto_link}>DIRETORES:<mark>Jaume Collet-Serra</mark></li>
            <li style={texto_link}>PRODUÇÃO:<mark>Leonardo DiCaprio, Joel Silver, Susan Downey, Erik Olsen...</mark></li>
            <li style={texto_link}>ROTEIRO:<mark> Chloé Zhao, Kaz Firpo, Patrick Burleigh, Ryan Firpo</mark></li>
            <li style={texto_link}>ORÇAMENTO:<mark> 200 milhões USD</mark></li>
        </ul>
</div>
<p style={descriçao_link} >
    Orphan (bra: A Órfã[3][4]; prt: Órfã[5][6]) é um filme teuto-canado-franco-americano de 2009, 
    dos gêneros drama, suspense e terror, dirigido por Jaume Collet-Serra, escrito por David Johnson
     e Alex Mace e protagonizado por Vera Farmiga, Peter Sarsgaard, Isabelle Fuhrman e Aryana 
     Engineer.

    Orphan foi produzido por Joel Silver e Susan Downey da Dark Castle Entertainment e Leonardo 
    DiCaprio e Jennifer Davisson Killoran da Appian Way Productions.[7]
</p>
</>
)
}
export default Linkaórfã