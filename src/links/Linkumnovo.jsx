import { useNavigate } from 'react-router-dom'
import capa16 from "../capasdefilme/capa16.png"

function Linkumnovo(){
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
<h1 style={titulo_link}>UM NOVO DIA PARA MATAR</h1>
    <div style={espaço_link}>
        <img src={capa16} alt="" style={img_link}/>
        <ul>
            <li style={texto_link}>DATA DE LANÇAMENTO:<mark>16 de fevereiro de 2017 (Brasil)</mark></li>
            <li style={texto_link}>DIRETORES:<mark>Chad Stahelski</mark></li>
            <li style={texto_link}>BILHETERIA:<mark>174,3 milhões USD</mark></li>
            <li style={texto_link}>MÚSICA COMPOSTA POR:<mark> Tyler Bates, Le Castle Vania, Joel J. Richard</mark></li>
            <li style={texto_link}>PRODUÇÃO:<mark>  Basil Iwanyk, Erica Lee</mark></li>
        </ul>
</div>
<p style={descriçao_link} >
    John Wick é forçado a deixar a aposentadoria mais uma vez por causa de uma 
    promessa antiga e viaja para Roma. No entanto, ao cumprir o que lhe é pedido,
     acaba sendo traído, e se vê tendo que recorrer a velhos amigos para evitar o próprio fim.
</p>
</>
)
}
export default Linkumnovo