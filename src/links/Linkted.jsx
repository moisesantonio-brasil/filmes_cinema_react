import { useNavigate } from 'react-router-dom'
import capa13 from "../capasdefilme/capa13.png"
function Linkted(){
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
    <h1 style={titulo_link}>TED</h1>
    <div style={espaço_link}>
        <img src={capa13} alt="" style={img_link}/>
        <ul>
            <li style={texto_link}>DATA DE LANÇAMENTO:<mark>21 de setembro de 2012 (Brasil)</mark></li>
            <li style={texto_link}>DIRETORES:<mark> Seth MacFarlane</mark></li>
            <li style={texto_link}>BILHETERIA:<mark>549,4 milhões USD</mark></li>
            <li style={texto_link}>PRODUTORAS:<mark> Fuzzy Door Productions, Media Rights Capital, Smart Entertainment...</mark></li>
        </ul>
</div>
<p style={descriçao_link} >
    Ted (estilizado como ted ) é um filme de comédia satírica estadunidense de 2012 dirigido por
     Seth MacFarlane (em sua estreia na direção ) e escrito por MacFarlane, Alec Sulkin e Wellesley
      Wild . O filme é estrelado por Mark Wahlberg e Mila Kunis , com Joel McHale e Giovanni Ribisi
       em papéis coadjuvantes, e MacFarlane fornecendo a voz e captura de movimento do 
       personagem-título. O filme conta a história de John Bennett, um nativo de Boston cujo desejo
        de infância traz seu ursinho de pelúciaamigo Ted para a vida. No entanto, na idade adulta, 
        a amizade de Ted e John começa a interferir na progressão do relacionamento de John com sua
         namorada, Lori Collins.

    Estreia na direção de longa-metragem de MacFarlane, [3] o filme é produzido pela Media Rights
     Capital e distribuído pela Universal Pictures . Foi lançado nos cinemas dos Estados Unidos em
      29 de junho de 2012 e foi um sucesso de bilheteria, arrecadando $ 549,4 milhões contra um 
      orçamento de $ 50-65 milhões. Ted foi o filme de comédia de maior bilheteria de 2012, é a 
      segunda comédia de maior bilheteria de todos os tempos (atrás de The Hangover Part II )
       e foi indicado ao Oscar de Melhor Canção Original . Recebeu críticas geralmente positivas,
        e lançou uma franquia com sucesso , com uma sequência lançada em 2015,
         e umsérie de televisão prequela atualmente em desenvolvimento.
</p>
</>
)
}
export default Linkted