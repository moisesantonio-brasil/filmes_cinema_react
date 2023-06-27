/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from 'react-router-dom'

import capa14 from "../capasdefilme/capa14.png"
function Linknorbit(){
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
<> <button onClick={handleClick} style={voltar_btn}>Voltar</button>
<h1 style={titulo_link}>NORBIT</h1>
    <div style={espaço_link}>
        <img src={capa14} alt="" style={img_link}/>
        <ul>
            <li style={texto_link}>DATA DE LANÇAMENTO:<mark>9 de fevereiro de 2007 (EUA)</mark></li>
            <li style={texto_link}>DIRETORES:<mark>Brian Robbins</mark></li>
            <li style={texto_link}>BILHETERIA:<mark>159,3 milhões USD</mark></li>
            <li style={texto_link}>INDICAÇÕES:<mark>Oscar de Melhor Maquiagem e Penteados, MAIS</mark></li>
            <li style={texto_link}>AUTORES:<mark> Eddie Murphy, Charlie Murphy</mark></li>
        </ul>
</div>
<p style={descriçao_link} >
    Norbit (Brasil: Norbit - Uma Comédia de Peso / Portugal: Norbit) é um filme estadunidense de 2007
     do género comédia dirigido por Brian Robbins e estrelado por Eddie Murphy e Thandie Newton.
      Produzido por Davis Entertainment e Tollin/Robbins Productions, o filme também é estrelado por
       Terry Crews, Clifton Powell, Lester "Rasta" Speight, Eddie Griffin, Katt Williams, Marlon
        Wayans, e Cuba Gooding, Jr. Foi lançado pela DreamWorks e distribuído pela Paramount 
        Pictures, em 9 de fevereiro de 2007.

    O filme foi indicado ao Oscar de melhor maquiagem,[2] e também várias "vitórias" no Framboesa 
    de Ouro de 2007. Apesar de ter sido recebido de forma negativa pela crítica, o filme foi um 
    sucesso comercial.
</p>
</>
)
}
export default Linknorbit