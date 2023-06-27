import { useNavigate } from 'react-router-dom'
import capa30 from "../capasdefilme/capa30.png"
   
function Linkkobra(){
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
<h1 style={titulo_link}>KOBRA AUTO RETRATO</h1>
    <div style={espaço_link}>
        <img src={capa30} alt="" style={img_link}/>
        <ul>
            <li style={texto_link}>DIRETORES:<mark>Lina Chamie,Eduardo Kobra</mark></li>
            <li style={texto_link}>GÊNERO:<mark>DOCUMENTÁRIO</mark></li>
            <li style={texto_link}>MÚSICA COMPOSTA POR:<mark>Ramin Djawadi</mark></li>
        </ul>
</div>
<p style={descriçao_link} >
    Foram anos de trabalho e expectativa. Nesta quinta, 17 de novembro, entrou em cartaz o filme 
    ‘Kobra - Auto Retrato’, uma biografia intimista e reveladora do artista brasileiro Eduardo Kobra.
    O documentário, assinado pela renomada cineasta Lina Chamie, estreia em quase 30 salas em
     diversas importantes cidades brasileiras (confira lista completa abaixo). Antes de entrar no
      circuito, o longa já foi exibido — e muito bem-recebido — no Festival do Rio, na Mostra São
       Paulo de Cinema e no DOC NYC, de Nova York, um dos maiores festivais de documentários do 
       mundo.
    Na semana que vem, ‘Kobra - Auto Retrato’ será projetado em evento ao ar livre em Miami Beach, 
    nos Estados Unidos, como parte do evento chamado Soundscape Park.
</p>
</>
)
}
export default Linkkobra