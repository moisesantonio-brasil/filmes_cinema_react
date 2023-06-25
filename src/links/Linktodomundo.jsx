/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from 'react-router-dom'
import capa15 from "/Users/moise/Desktop/Projetos/REACT/FILMES_CINEMA/filmes_cinema/filmes_cinema/src/capasdefilme/capa15.png"

function Linktodomundo(){
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
    <h1 style={titulo_link}>TODO MUNDO EM PÂNICO2</h1>
    <div style={espaço_link}>
        <img src={capa15} alt="" style={img_link}/>
        <ul>
            <li style={texto_link}>DATA DE LANÇAMENTO:<mark> 22 de setembro de 2000 (Brasil)</mark></li>
            <li style={texto_link}>DIRETORES:<mark> Keenen Ivory Wayans</mark></li>
            <li style={texto_link}>BILHETERIA:<mark>278 milhões USD</mark></li>
            <li style={texto_link}>ROTEIRO:<mark>  Marlon Wayans, Shawn Wayans, Jason Friedberg, Buddy Johnson....</mark></li>
        </ul>
</div>
<p style={descriçao_link} >
    Todo Mundo em Pânico é um filme americano de 2000, do gênero comédia de terror, 
    dirigido por Keenen Ivory Wayans 
    e escrito por Marlon e Shawn Wayans (que também estrelam o filme). Trata-se de uma paródia de 
    diversos filmes de terror de sucesso dos anos 90 como Scream e I Know What You Did Last Summer.
     O filme conta com Anna Faris, Jon Abrahams, Shannon Elizabeth, Regina Hall e Lochlyn Munro como
      um grupo de jovens que acidentalmente atropela um homem com seu carro, jogam seu corpo em um
       lago e nunca mais falam sobre o ocorrido. Um ano depois, uma pessoa misteriosa usando uma 
       fantasia de Ghostface vai os matando um por um.

    Alguns filmes e programas de TV como Halloween, The Shining, Friday the 13th, The Usual 
    Suspects, The Sixth Sense, The Blair Witch Project, Matrix, Charlie's Angels e Buffy the 
    Vampire Slayer também foram parodiados em algumas cenas.

    Scary Movie tornou-se um grande sucesso comercial, arrecadando mais de 270 milhões de dólares
     mundialmente. O filme originou uma franquia com quatro sequências: Scary Movie 2 (2001), Scary 
     Movie 3 (2003), Scary Movie 4 (2006) e Scary Movie 5 (2013).
</p>
</>
)
}
export default Linktodomundo