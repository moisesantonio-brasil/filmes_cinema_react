import { useNavigate } from 'react-router-dom'
import capa10 from "../capasdefilme/capa10.png"

function Linkcoringa(){
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
        backgroundColor:"azure",
        padding:"4px",
        borderRadius:"20px",
        border:"none"
    }
return(
<><button onClick={handleClick} style={voltar_btn}>Voltar</button>
    <h1 style={titulo_link}>CORINGA</h1>
    <div style={espaço_link}>
        <img src={capa10} alt="" style={img_link}/>
        <ul>
            <li style={texto_link}>DATA DE LANÇAMENTO:<mark> 3 de outubro de 2019 (Brasil)</mark></li>
            <li style={texto_link}>DIRETORES:<mark>Todd Phillips</mark></li>
            <li style={texto_link}>BILHETERIA:<mark>1,074 bilhão USD</mark></li>
            <li style={texto_link}>ROTEIRO:<mark>Todd Phillips, Scott Silver</mark></li>
        </ul>
</div>
<p style={descriçao_link}>
    Joker (prt: Joker[4]; bra: Coringa[5]) é um filme de suspense psicológico estadunidense de 2019, 
    dirigido por Todd Phillips, que co-escreveu o roteiro com Scott Silver. Baseado no personagem de
     mesmo nome da DC Comics, o filme é estrelado por Joaquin Phoenix como o Coringa.
      Joker é ambientado em 1981, e representa Arthur Fleck, um comediante de stand-up fracassado,
       que é levado à loucura e se envolve em uma vida de crimes e caos em Gotham City. Robert De
        Niro, Zazie Beetz, Frances Conroy, Brett Cullen, Marc Maron, Bill Camp, Shea Whigham, Glenn 
        Fleshler, Douglas Hodge e Brian Tyree Henry, entre outros, aparecem em papéis coadjuvantes.
         Produzido pela Village Roadshow Pictures, DC Films, Sikelia Productions, Joint Effort 
         Productions e Green Hat Films e distribuído pela Warner Bros. Pictures, faz parte da DC 
         Black, uma série de filmes baseados nos personagens da DC separados do Universo Estendido DC.
          Não há relação com as outras versões do personagem vistas anteriormente no cinema.[6]

    O desenvolvimento de um filme independente do Coringa começou em 2016 e foi confirmado em agosto
     de
     2017, depois que a Warner Bros. e a DC Films decidiram enfatizar a natureza compartilhada do 
     Universo Estendido DC. 
</p>
</>
)
}
export default Linkcoringa