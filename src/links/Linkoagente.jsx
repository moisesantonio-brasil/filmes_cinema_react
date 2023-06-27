import { useNavigate } from 'react-router-dom'
import capa18 from "../capasdefilme/capa18.png"

function Linkoagente(){
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

    <h1 style={titulo_link}>O AGENTE</h1>
    <div style={espaço_link}>
        <img src={capa18} alt="" style={img_link}/>
        <ul>
            <li style={texto_link}>DATA DE LANÇAMENTO:<mark> 10 de julho de 2007 (mundial)</mark></li>
            <li style={texto_link}>DIRETORES:<mark>Josef Rusnak</mark></li>
            <li style={texto_link}>BILHETERIA:<mark>402,1 milhões USD</mark></li>
            <li style={texto_link}>Trilha Sonora:<mark>Nicholas Pike</mark></li>
            <li style={texto_link}>ROTEIRO:<mark>Robert Foster,Joshua Michaek Stern....</mark></li>
        </ul>
</div>
<p style={descriçao_link}>
    James Dial (Wesley Snipes) é um ex-agente da CIA que trabalhava em operações 
    clandestinas como atirador de elite. Ele recebe o contato de um antigo empregador 
    com um serviço aparentemente simples: matar um terrorista. Porém, James não imaginava que
     estava se envolvendo numa conspiração.
</p>
</>
)
}
export default Linkoagente