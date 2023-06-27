import { useNavigate } from 'react-router-dom'
import capa9 from "../capasdefilme/capa9.png"
function Linkbatmanvssuperman(){
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
    <h1 style={titulo_link}>BATMAN VS SUPERMAN</h1>
    <div style={espaço_link}>
        <img src={capa9} alt="" style={img_link}/>
        <ul>
            <li style={texto_link}>DATA DE LANÇAMENTO:<mark> 24 de março de 2016 (Brasil)</mark></li>
            <li style={texto_link}>DIRETORES:<mark>Zack Snyder</mark></li>
            <li style={texto_link}>BILHETERIA:<mark>872,7 milhões USD</mark></li>
            <li style={texto_link}>ROTEIRO:<mark> Chris Terrio, David S. Goyer</mark></li>
            <li style={texto_link}>ORÇAMENTO:<mark> 250 milhões USD</mark></li>
        </ul>
</div>
<p style={descriçao_link} >
    Batman v Superman: Dawn of Justice é um filme de super-herói americano de 2016, 
    baseado nos personagens Batman e Superman da DC Comics e distribuído pela Warner Bros. Pictures.
     É o segundo filme do Universo Estendido DC, seguindo Man of Steel, de 2013, sendo dirigido por
      Zack Snyder e escrito por Chris Terrio e David S. Goyer. O elenco é composto por Ben Affleck,
       Henry Cavill, Amy Adams, Jesse Eisenberg, Diane Lane, Laurence Fishburne, Jeremy Irons, Holly
        Hunter e Gal Gadot.[9] Batman v Superman: Dawn of Justice é o primeiro filme em live-action 
        a apresentar Batman e Superman juntos, assim como a primeira representação cinematográfica 
        em live-action de Mulher-Maravilha, Flash, Aquaman e Ciborgue. No filme, o gênio criminoso
         Lex Luthor manipula Batman em uma batalha preventiva contra Superman, a quem Luthor está 
         obcecado em derrotar.

    O longa foi anunciado na San Diego Comic-Con 2013, após o lançamento de Man of Steel. Snyder 
    afirmou que o filme teria inspiração da série de quadrinhos do Batman, The Dark Knight Returns,
     de Frank Miller, mas esclareceu que ele seguiria uma premissa original. O filme também é 
     inspirado por elementos narrativos do arco de história A Morte do Superman. A encarnação do
      Batman no filme é diferente do retrato anterior do personagem na trilogia The Dark Knight de 
      Christopher Nolan, servindo como um reboot cinematográfico do personagem. A pré-produção 
      começou no East Los Angeles College, em outubro de 2013, com as filmagens começando em maio
       2014 em Detroit, Michigan. Filmagens adicionais também ocorreram em Chicago, Illinois.
</p>
</>
)
}
export default Linkbatmanvssuperman