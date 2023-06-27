import { useNavigate } from 'react-router-dom'
import capa17 from "../capasdefilme/capa17.png"
    
function Linkvelozesefuriosos9(){
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
    <h1 style={titulo_link}>VELOZES E FURIOSOS9</h1>
    <div style={espaço_link}>
        <img src={capa17} alt="" style={img_link}/>
        <ul>
            <li style={texto_link}>DATA DE LANÇAMENTO:<mark> 24 de junho de 2021 (Brasil)</mark></li>
            <li style={texto_link}>DIRETORES:<mark>Justin Lin</mark></li>
            <li style={texto_link}>BILHETERIA:<mark>726,2 milhões USD</mark></li>
            <li style={texto_link}>PRODUÇÃO:<mark>Vin Diesel, Justin Lin, Samantha Vincent, Neal H. Moritz, Joe Roth...</mark></li>
        </ul>
</div>
<p style={descriçao_link} >
    Em Velozes & Furiosos 9, dois anos após o confronto com a ciber-terrorista Cipher - 
    no filme Velozes e Furiosos 8 - Dominic Toretto (Vin Diesel) - agora aposentado - e
    Letty (Michelle Rodriguez) vivem uma vida pacata ao lado de seu filho Brian. Mas a vida dos 
    dois é logo interrompida quando Roman Pearce, Tej Parker e Ramsey chegam com notícias de que, 
    pouco depois de prender Cipher (Charlize Theron), o avião de Mr. Nobody foi atacado por agentes
     e sequestraram Cipher, precisando da ajuda dele para investigar mais afundo. Acompanhando eles
      em uma missão, o grupo logo acha nos escombros parte de um dispositivo chamado Projeto Aries. 
      A calmaria é dissipada quando o irmão desaparecido de Dom retorna e rouba o dispositivo deles
       com um grupo altamente treinado. Jakob (John Cena), um assassino habilidoso e excelente 
       motorista, está trabalhando ao lado de Cipher. Para enfrentá-los, Toretto vai precisar reunir
        sua equipe novamente, inclusive Han (Sung Kang), que todos acreditavam estar morto.
</p>
</>
)
} 
export default Linkvelozesefuriosos9