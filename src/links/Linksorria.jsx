import { useNavigate } from 'react-router-dom'
import capa25 from "../capasdefilme/capa25.png"

function Linksorria(){
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
    <h1 style={titulo_link}>SORRIA</h1>
    <div style={espaço_link}>
        <img src={capa25} alt="" style={img_link}/>
        <ul>
            <li style={texto_link}>DATA DE LANÇAMENTO:<mark> 29 de setembro de 2022 (Brasil)</mark></li>
            <li style={texto_link}>DIRETORES:<mark>Parker Finn</mark></li>
            <li style={texto_link}>BILHETERIA:<mark>217,4 milhões USD</mark></li>
            <li style={texto_link}>DIRETOR DE ARTE:<mark>Larry W. Brown</mark></li>
            <li style={texto_link}>PRODUTORAS:<mark> Paramount Players, Temple Hill Entertainment</mark></li>
            <li style={texto_link}>ORÇAMENTO:<mark> 17 milhões USD</mark></li>
        </ul>
</div>
<p style={descriçao_link} >
    Após um paciente cometer um suicídio brutal em sua frente, a psiquiatra Rose é
     perseguida por uma entidade maligna que muda de forma. Enquanto tenta escapar 
     desse pesadelo, Rose também precisa enfrentar seu passado conturbado para sobreviver.
     Sorria é mais um filme de terror que chega ao catálogo do Amazon Prime Video em 2022. 
     Inclusive, ele parte de uma premissa comum dentre os exemplares do gênero lançados nos anos 
     2010 e 2020. Ou seja, usar o terror psicológico como metáfora para medos reais é um conceito
      forte nesta produção.
</p>
</>
)
}
export default Linksorria