import { useNavigate } from 'react-router-dom'
import capa1 from "../capasdefilme/capa1.png"

function Linkavengers(){ 
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
    return (
        <> <button onClick={handleClick} style={voltar_btn}>Voltar</button>
            <h1 style={titulo_link}>VINGADORES ULTIMATO</h1>
            <div>
           
            </div>
            <div style={espaço_link}>
                <img src={capa1} alt="" style={img_link}/>
                    <ul>
                        <li style={texto_link}>DATA DE LANÇAMENTO:<mark> 25 de abril de 2019 (Brasil)</mark></li>
                        <li style={texto_link}>DIRETORES:<mark>Anthony Russo, Joe Russo</mark></li>
                        <li style={texto_link}>BILHETERIA:<mark>2,798 bilhões USD</mark></li>
                        <li style={texto_link}>INDICAÇÕES:<mark> Oscar de Melhores Efeitos Visuais, MAIS</mark></li>
                        <li style={texto_link}>AUTORES:<mark>Stan Lee, Jack Kirby, Jim Starlin</mark></li>
                        <li style={texto_link}>ORÇAMENTO:<mark>356 milhões USD (2019)</mark></li>
                    </ul>
            </div>
            <p style={descriçao_link}>
                Vingadores Ultimato
                é um filme de super-herói americano de 2019, baseado na equipe Vingadores da Marvel Comics.
                Produzido pela Marvel Studios e distribuído pela Walt Disney Studios Motion Pictures, é a
                sequência direta de Avengers: Infinity War 2018 e o vigésimo segundo filme do Universo
                Cinematográfico Marvel UCM. Dirigido pelos Irmãos Russo e escrito por Christopher Markus
                e Stephen McFeely, o filme apresenta um ensemble cast, composto por Robert Downey Jr.,
                Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, Jeremy Renner, Don Cheadle,
                Paul Rudd, Brie Larson, Karen Gillan, Danai Gurira, Benedict Wong, Jon Favreau, Bradley Cooper,
                Gwyneth Paltrow e Josh Brolin. No filme, os membros sobreviventes dos Vingadores e seus
                aliados trabalham para reverter os danos causados por Thanos em Infinity War.
            </p>

        </>
    )
}
export default  Linkavengers