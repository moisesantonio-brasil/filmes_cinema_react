/* eslint-disable no-unused-vars */
import React from "react"
import { Link } from "react-router-dom";

import capa1 from "/Users/moise/Desktop/Projetos/REACT/FILMES_CINEMA/filmes_cinema/filmes_cinema/src/capasdefilme/capa1.png"
import capa2 from "/Users/moise/Desktop/Projetos/REACT/FILMES_CINEMA/filmes_cinema/filmes_cinema/src/capasdefilme/capa2.png"
import capa3 from "/Users/moise/Desktop/Projetos/REACT/FILMES_CINEMA/filmes_cinema/filmes_cinema/src/capasdefilme/capa3.png"
import capa4 from "/Users/moise/Desktop/Projetos/REACT/FILMES_CINEMA/filmes_cinema/filmes_cinema/src/capasdefilme/capa4.png"
import capa5 from "/Users/moise/Desktop/Projetos/REACT/FILMES_CINEMA/filmes_cinema/filmes_cinema/src/capasdefilme/capa5.png"
import capa6 from "/Users/moise/Desktop/Projetos/REACT/FILMES_CINEMA/filmes_cinema/filmes_cinema/src/capasdefilme/capa6.png"
import capa7 from "/Users/moise/Desktop/Projetos/REACT/FILMES_CINEMA/filmes_cinema/filmes_cinema/src/capasdefilme/capa7.png"
import capa8 from "/Users/moise/Desktop/Projetos/REACT/FILMES_CINEMA/filmes_cinema/filmes_cinema/src/capasdefilme/capa8.png"
import capa9 from "/Users/moise/Desktop/Projetos/REACT/FILMES_CINEMA/filmes_cinema/filmes_cinema/src/capasdefilme/capa9.png"
import capa10 from "/Users/moise/Desktop/Projetos/REACT/FILMES_CINEMA/filmes_cinema/filmes_cinema/src/capasdefilme/capa10.png"
import capa11 from "/Users/moise/Desktop/Projetos/REACT/FILMES_CINEMA/filmes_cinema/filmes_cinema/src/capasdefilme/capa11.png"
import capa12 from "/Users/moise/Desktop/Projetos/REACT/FILMES_CINEMA/filmes_cinema/filmes_cinema/src/capasdefilme/capa12.png"
import capa13 from "/Users/moise/Desktop/Projetos/REACT/FILMES_CINEMA/filmes_cinema/filmes_cinema/src/capasdefilme/capa13.png"
import capa14 from "/Users/moise/Desktop/Projetos/REACT/FILMES_CINEMA/filmes_cinema/filmes_cinema/src/capasdefilme/capa14.png"
import capa15 from "/Users/moise/Desktop/Projetos/REACT/FILMES_CINEMA/filmes_cinema/filmes_cinema/src/capasdefilme/capa15.png"
import capa16 from "/Users/moise/Desktop/Projetos/REACT/FILMES_CINEMA/filmes_cinema/filmes_cinema/src/capasdefilme/capa16.png"
import capa17 from "/Users/moise/Desktop/Projetos/REACT/FILMES_CINEMA/filmes_cinema/filmes_cinema/src/capasdefilme/capa17.png"
import capa18 from "/Users/moise/Desktop/Projetos/REACT/FILMES_CINEMA/filmes_cinema/filmes_cinema/src/capasdefilme/capa18.png"
import capa19 from "/Users/moise/Desktop/Projetos/REACT/FILMES_CINEMA/filmes_cinema/filmes_cinema/src/capasdefilme/capa19.png"
import capa20 from "/Users/moise/Desktop/Projetos/REACT/FILMES_CINEMA/filmes_cinema/filmes_cinema/src/capasdefilme/capa20.png"
import capa21 from "/Users/moise/Desktop/Projetos/REACT/FILMES_CINEMA/filmes_cinema/filmes_cinema/src/capasdefilme/capa21.png"
import capa22 from "/Users/moise/Desktop/Projetos/REACT/FILMES_CINEMA/filmes_cinema/filmes_cinema/src/capasdefilme/capa22.png"
import capa23 from "/Users/moise/Desktop/Projetos/REACT/FILMES_CINEMA/filmes_cinema/filmes_cinema/src/capasdefilme/capa23.png"
import capa24 from "/Users/moise/Desktop/Projetos/REACT/FILMES_CINEMA/filmes_cinema/filmes_cinema/src/capasdefilme/capa24.png"
import capa25 from "/Users/moise/Desktop/Projetos/REACT/FILMES_CINEMA/filmes_cinema/filmes_cinema/src/capasdefilme/capa25.png"
import capa26 from "/Users/moise/Desktop/Projetos/REACT/FILMES_CINEMA/filmes_cinema/filmes_cinema/src/capasdefilme/capa26.png"
import capa27 from "/Users/moise/Desktop/Projetos/REACT/FILMES_CINEMA/filmes_cinema/filmes_cinema/src/capasdefilme/capa27.png"
import capa28 from "/Users/moise/Desktop/Projetos/REACT/FILMES_CINEMA/filmes_cinema/filmes_cinema/src/capasdefilme/capa28.png"
import capa29 from "/Users/moise/Desktop/Projetos/REACT/FILMES_CINEMA/filmes_cinema/filmes_cinema/src/capasdefilme/capa29.png"
import capa30 from "/Users/moise/Desktop/Projetos/REACT/FILMES_CINEMA/filmes_cinema/filmes_cinema/src/capasdefilme/capa30.png"



const Home = ()=>{
    const h1_f ={
        textAlign: "center",
        lineHeight: "1%",
        fontSize: "16px",
        textDecoration: "none",
        color:"black"
      }
      const p_f = {
        textAlign: "center",
        fontSize: "14px",
        fontFamily: "Franklin Gothic Medium,Arial Narrow, Arial, sans-serif",
        fontWeight: "bolder",
        fontStyle: "oblique",
        textDecoration: "none",
        color:"black"
      }
      const catalogo_s = {
        width: "auto",
        height: "auto",
        margin:"auto",
        display: "flex",
        flexWrap: "wrap",
        borderRadius:"10px",
        
      }
      const fundo_f = {
        width: "200px",
        height: "370px",
       margin:"20px",
        backgroundColor: "silver",
          cursor: "pointer",
          borderRadius:"5px",
          
      }
      const img_f = {
        width:"200px"
      }
      
      

    return(
        <>
        <h1 style={{ textAlign: "center", fontSize: "65px",
         fontFamily: "monospace", width: "auto" }}>
            FILMES Cinema</h1>
            <h2 style={{
            backgroundColor: "tomato", width: "230px",
             fontWeight: "bold",
            padding: "5px"
        }}>MARVEL/STUDIOS</h2>
        <section style={catalogo_s}>
                <Link to="/page1_avenger">
                    <div style={fundo_f}>
                        <img src={capa1} style={img_f}></img>
                        <h1 style={h1_f}>AVENGERS ENDGAME</h1>
                        <p style={p_f}>MARVEL/STUDIOS</p>
                    </div>
                </Link>
                <Link to="/page2_shangchi">
                    <div style={fundo_f}>
                        <img src={capa2} style={img_f}></img>
                        <h1 style={h1_f}>SHANG-CHI</h1>
                        <p style={p_f}>MARVEL/STUDIOS</p>
                    </div>
                </Link>

                <Link to="/page3_eternos">
                    <div style={fundo_f}>
                        <img src={capa3} style={img_f}></img>
                        <h1 style={h1_f}>ETERNALS</h1>
                        <p style={p_f}>MARVEL/STUDIOS</p>
                    </div>
                </Link>

                <Link to="/page4_pantera">
                    <div style={fundo_f}>
                        <img src={capa4} style={img_f}></img>
                        <h1 style={h1_f}>BLACK PANTHER</h1>
                        <p style={p_f}>MARVEL/STUDIOS</p>
                    </div>
                </Link>

                <Link to="/page5_guerra">
                    <div style={fundo_f}>
                        <img src={capa5} style={img_f}></img>
                        <h1 style={h1_f}>GUERRA CIVIL</h1>
                        <p style={p_f}>MARVEL/STUDIOS</p>
                    </div>
                </Link>

                <Link to="/page1_avenger">
                    <div style={fundo_f}>
                        <img src={capa1} style={img_f}></img>
                        <h1 style={h1_f}>AVENGERS ENDGAME</h1>
                        <p style={p_f}>MARVEL/STUDIOS</p>
                    </div>
                </Link>
            </section>
            <hr />
            <h2 style={{ backgroundColor: "gray", width: "200px", padding: "5px" }}>DOCUMENTÁRIO</h2>
            
            <section style={catalogo_s}>

                <Link to="/page6_pelé">
                    <div style={fundo_f}>
                        <img src={capa26} style={img_f}></img>
                        <h1 style={h1_f}>PELÉ</h1>
                        <p style={p_f}>NETFLIX</p>
                    </div>
                </Link>

                <Link to="/page7_samba">
                    <div style={fundo_f}>
                        <img src={capa27} style={img_f}></img>
                        <h1 style={h1_f}>O SAMBA</h1>
                        <p style={p_f}>IMOVISION</p>
                    </div>
                </Link>

                <Link to="/page8_sérgio">
                    <div style={fundo_f}>
                        <img src={capa28} style={img_f}></img>
                        <h1 style={h1_f}>SÉRGIO</h1>
                        <p style={p_f}>NETFLIX</p>
                    </div>
                </Link>

                <Link to="/page9_crisedospoderes">
                    <div style={fundo_f}>
                        <img src={capa29} style={img_f}></img>
                        <h1 style={h1_f}>A CRISE DOS 3 PODERES</h1>
                        <p style={p_f}>BRASIL PARALELO</p>
                    </div>
                </Link>

                <Link to="/page10_kobra">
                    <div style={fundo_f}>
                        <img src={capa30} style={img_f}></img>
                        <h1 style={h1_f}>KOBRA AUTO RETRATO</h1>
                        <p style={p_f}>LINA CHAMIE</p>
                    </div>
                </Link>

                <Link to="/page6_pelé">
                    <div style={fundo_f}>
                        <img src={capa26} style={img_f}></img>
                        <h1 style={h1_f}>PELÉ</h1>
                        <p style={p_f}>NETFLIX</p>
                    </div>
                </Link>

            </section>
            <hr />
            <h2 style={{ backgroundColor: "green", width: "132px", padding: "5px" }}>DC COMICS</h2>
            <section style={catalogo_s}>

                <Link to="/page11_ligajustiça">
                    <div style={fundo_f}>
                        <img src={capa6} style={img_f}></img>
                        <h1 style={h1_f}>JUSTICE LEAGUE</h1>
                        <p style={p_f}>DC COMICS</p>
                    </div>
                </Link>

                <Link to="/page12_batman">
                    <div style={fundo_f}>
                        <img src={capa7} style={img_f}></img>
                        <h1 style={h1_f}>BATMAN 2022</h1>
                        <p style={p_f}>DC COMICS</p>
                    </div>
                </Link>

                <Link to="/page13_mulhermaravilha">
                    <div style={fundo_f}>
                        <img src={capa8} style={img_f}></img>
                        <h1 style={h1_f}>WONDER WOMAN</h1>
                        <p style={p_f}>DC COMICS</p>
                    </div>
                </Link>

                <Link to="/page14_BtnvsSpm">
                    <div style={fundo_f}>
                        <img src={capa9} style={img_f}></img>
                        <h1 style={h1_f}>BATMAN VS SUPERMAN</h1>
                        <p style={p_f}>DC COMICS</p>
                    </div>
                </Link>

                <Link to="/page15_coringa">
                    <div style={fundo_f}>
                        <img src={capa10} style={img_f}></img>
                        <h1 style={h1_f}>JOKER </h1>
                        <p style={p_f}>DC COMICS</p>
                    </div>
                </Link>

                <Link to="/page11_ligajustiça">
                    <div style={fundo_f}>
                        <img src={capa6} style={img_f}></img>
                        <h1 style={h1_f}>JUSTICE LEAGUE</h1>
                        <p style={p_f}>DC COMICS</p>
                    </div>
                </Link>
            </section>
            <hr />
            <h2 style={{ backgroundColor: "rgba(234, 119, 212, 1)", width: "115px", padding: "3px" }}>COMÉDIA</h2>
            <section style={catalogo_s}>


                <Link to="/page16_sebeber">
                    <div style={fundo_f}>
                        <img src={capa11} style={img_f}></img>
                        <h1 style={h1_f}>SE BEBER, NÃO CASEE!</h1>
                        <p style={p_f}>TODD PHILLIPS</p>
                    </div>
                </Link>

                <Link to="/page17_debielóide">
                    <div style={fundo_f}>
                        <img src={capa12} style={img_f}></img>
                        <h1 style={h1_f}>DEBI E LÓIDE</h1>
                        <p style={p_f}>PLAYARTE</p>
                    </div>
                </Link>

                <Link to="/page18_ted">
                    <div style={fundo_f}>
                        <img src={capa13} style={img_f}></img>
                        <h1 style={h1_f}>TED</h1>
                        <p style={p_f}>SET-MACFARLANE</p>
                    </div>
                </Link>
                <Link to="/page19_norbit">
                    <div style={fundo_f}>
                        <img src={capa14} style={img_f}></img>
                        <h1 style={h1_f}>NORBIT</h1>
                        <p style={p_f}>BRIAN ROBBINS</p>
                    </div>
                </Link>

                <Link to="/page20_todomundo">
                    <div style={fundo_f}>
                        <img src={capa15} style={img_f}></img>
                        <h1 style={{ fontSize: "14px", color: "black", textAlign: "center" }}>TODO MUNDO EM PÂNICO2</h1>
                        <p style={p_f}> Malcolm D. Lee, David Zucker.....</p>
                    </div>
                </Link>

                <Link to="/page16_sebeber">
                    <div style={fundo_f}>
                        <img src={capa11} style={img_f}></img>
                        <h1 style={h1_f}>SE BEBER, NÃO CASEE!</h1>
                        <p style={p_f}>TODD PHILLIPS</p>
                    </div>
                </Link>
            </section>
            <hr />
            <h2 style={{ backgroundColor: "purple", width: "70px", padding: "4px" }}>AÇÃO</h2>
            <section style={catalogo_s}>


                <Link to="/page21_umnovo">
                    <div style={fundo_f}>
                        <img src={capa16} style={img_f}></img>
                        <h1  style={{ fontSize: "14px", color: "black", textAlign: "center" }}>UM NOVO DIA PARA MATAR</h1>
                        <p style={p_f}>CHAD STAHELSKI</p>
                    </div>
                </Link>

                <Link to="/page22_veloz">
                    <div style={fundo_f}>
                        <img src={capa17} style={img_f}></img>
                        <h1 style={h1_f}>VELOZES E FURIOSOS 9</h1>
                        <p style={p_f}>JUSTIN LIN</p>
                    </div>
                </Link>

                <Link to="/page23_oagente">
                    <div style={fundo_f}>
                        <img src={capa18} style={img_f}></img>
                        <h1 style={h1_f}>O AGENTE</h1>
                        <p style={p_f}>JOSEF RUSNAK</p>
                    </div>
                </Link>

                <Link to="/page24_matrix">
                    <div style={fundo_f}>
                        <img src={capa19} style={img_f}></img>
                        <h1 style={h1_f}>MATRIXX</h1>
                        <p style={p_f}>MARVEL/ESTÚDIOS</p>
                    </div>
                </Link>

                <Link to="/page25_predador">
                    <div style={fundo_f}>
                        <img src={capa20} style={img_f}></img>
                        <h1 style={h1_f}>PREDATOR</h1>
                        <p style={p_f}>Shane Black, Nimród Antal...</p>
                    </div>
                </Link>

                <Link to="/page21_umnovo">
                    <div style={fundo_f}>
                        <img src={capa16} style={img_f}></img>
                        <h1 style={{ fontSize: "14px", color: "black", textAlign: "center" }}>UM NOVO DIA PARA MATAR</h1>
                        <p style={p_f}>CHAD STAHELSKI</p>
                    </div></Link>
            </section>
            <hr />
            <h2 style={{ backgroundColor: "black", width: "240px", padding: "5px" }}>TERROR/SUSPENSE</h2>
            <section style={catalogo_s}>
                <Link to="/page26_pânico">
                    <div style={fundo_f}>
                        <img src={capa21} style={img_f}></img>
                        <h1 style={h1_f}>PÂNICO 5</h1>
                        <p style={p_f}>Tyler Gillett, Matt Bettinelli-Olpin</p>
                    </div>
                </Link>

                <Link to="/page27_aorfa">
                    <div style={fundo_f}>
                        <img src={capa22} style={img_f}></img>
                        <h1 style={h1_f}>A ÓRFÃO</h1>
                        <p style={p_f}>Jaume Collet-Serra
                        </p>
                    </div>
                </Link>

                <Link to="/page28_itacoisa">
                    <div style={fundo_f}>
                        <img src={capa23} style={img_f}></img>
                        <h1 style={h1_f}>IT_ A COISA_CAP.2</h1>
                        <p style={p_f}> Pennywise, Beverly Marsh, Eddie Kaspbrak,</p>
                    </div>
                </Link>

                <Link to="/page29_annabelle">
                    <div style={fundo_f}>
                        <img src={capa24} style={img_f}></img>
                        <h1 style={h1_f}>_ANNABELLE</h1>
                        <p style={p_f}>John R. Leonetti</p>
                    </div>
                </Link>

                <Link to="/page30_sorria">
                    <div style={fundo_f}>
                        <img src={capa25} style={img_f}></img>
                        <h1 style={h1_f}>_SORRIA</h1>
                        <p style={p_f}>Parker Finn</p>
                    </div>
                </Link>

                <Link to="/page26_pânico">
                    <div style={fundo_f}>
                        <img src={capa21} style={img_f}></img>
                        <h1 style={h1_f}>PÂNICO 5</h1>
                        <p style={p_f}>Tyler Gillett, Matt Bettinelli-Olpin</p>
                    </div></Link>
            </section></>
    );
}
export default Home