import { useNavigate } from 'react-router-dom'
import capa6 from "../capasdefilme/capa6.png"
function LinkLigadajustiça(){
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
    <h1 style={titulo_link}>LIGA DA JUSTIÇA</h1>
    <div style={espaço_link}>
        <img src={capa6} alt="" style={img_link}/>
        <ul>
            <li style={texto_link}>DATA DE LANÇAMENTO:<mark>16 de novembro de 2017 (Brasil)</mark></li>
            <li style={texto_link}>DIRETORES:<mark>Zack Snyder</mark></li>
            <li style={texto_link}>BILHETERIA:<mark>657,9 milhões USD</mark></li>
            <li style={texto_link}>MÚSICA COMPOSTA POR:<mark>Junkie XL, Danny Elfman</mark></li>
        </ul>
</div>
<p style={descriçao_link} >
    Justice League (bra/prt: Liga da Justiça)[7][8] é um filme de super-herói estadunidense de 2017,
     baseado na equipe homônima da DC Comics, distribuído pela Warner Bros. Pictures, sendo o quinto
      filme do Universo Estendido DC. Dirigido por Zack Snyder e escrito por Chris Terrio e Joss
       Whedon, a partir de uma história de Snyder e Terrio,[9] é estrelado por Ben Affleck, Henry 
       Cavill, Amy Adams, Gal Gadot, Ezra Miller, Jason Momoa, Ray Fisher, Jeremy Irons, Diane Lane,
        Connie Nielsen, J. K. Simmons e Ciarán Hinds. Em Liga da Justiça, Batman e Mulher-Maravilha
         montam uma equipe de super-heróis composta por Flash, Aquaman e Ciborgue para enfrentar a
          ameaça catastrófica do Lobo da Estepe e seu exército de Parademônios.

    O filme foi anunciado em outubro de 2014. As filmagens começaram em 11 de abril de 2016 
    e terminaram em 14 de outubro de 2016. Posteriormente, Joss Whedon foi contratado para escrever
     cenas que seriam filmadas durante as re-filmagens; no entanto, Snyder deixou o projeto em maio
      de 2017 após a morte de sua filha. Whedon dirigiu as cenas adicionais.[10]
</p>
</>
)
}
export default LinkLigadajustiça