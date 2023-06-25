import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
}from "react-router-dom"

import Home from './routes/Home.jsx'
import Contact from './routes/Contact.jsx'
import Linkavengers from './links/Linkavengers.jsx';
import Linkshangchi from './links/Linkshangchi.jsx';
import LinkEterno from './links/Linketernos.jsx';
import LinkPantera from './links/Linkpanteranegra.jsx';
import LinkGuerra from './links/Linkguerracivil.jsx';
import LinkPele from './links/Linkpelé.jsx';
import LinkSamba from './links/Linkosamba.jsx';
import LinkSergio from './links/Linksérgio.jsx';
import LinkCrisedP from './links/Linkacrisedospoderes.jsx';
import LinkKobra from './links/Linkkobra.jsx';
import LinkLigadaJ from './links/Linkligadajustiça.jsx';
import LinkBatman from './links/Linkbatman.jsx';
import LinkMulherMr from './links/Linkmulhermaravilha.jsx';
import LinkBtmvsSpm from './links/Linkbatmanvssuperman.jsx';
import LinkCoringa from './links/Linkcoringa.jsx';
import LinkSebeber from './links/Linksebeber.jsx';
import LinkDebiloide from './links/Linkdebielóide.jsx';
import LinkTed from './links/Linkted.jsx';
import LinkNorbit from './links/Linknorbit.jsx';
import LinkTodomundo from './links/Linktodomundo.jsx';
import LinkUmnovo from './links/Linkumnovo.jsx';
import LinkVeloz from './links/Linkvelozesfuriososos9.jsx';
import LinkOagente from './links/Linkoagente.jsx';
import LinkMatrix from './links/Linkmatrix.jsx';
import LinkPredador from './links/Linkpredador.jsx';
import LinkPânico from './links/Linkpânico.jsx';
import LinkAorfa from './links/Linkaórfã.jsx'
import LinkItacoisa from './links/Linkitacoisa.jsx';
import LinkAnabelle from './links/Linkannabelle.jsx';
import LinkSorria from './links/Linksorria.jsx';



const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/page1_avenger",
        element:<Linkavengers/>
      },
      {
        path:"page2_shangchi",
        element:<Linkshangchi/>
      },
      {
        path:"page3_eternos",
        element:<LinkEterno/>
      },
      {
        path:"page4_pantera",
        element:<LinkPantera/>
      },
      {
        path:"page5_guerra",
        element:<LinkGuerra/>
      },
      {
        path:"page6_pelé",
        element:<LinkPele/>
      },
      {
        path:"page7_samba",
        element:<LinkSamba/>
      },
      {
        path:"page8_sérgio",
        element:<LinkSergio/>
      },
      {
        path:"page9_crisedospoderes",
        element:<LinkCrisedP/>
      },
      {
        path:"page10_kobra",
        element:<LinkKobra/>
      },
      {
        path:"page11_ligajustiça",
        element:<LinkLigadaJ/>
      },
      {
        path:"page12_batman",
        element:<LinkBatman/>
      },
      {
        path:"page13_mulhermaravilha",
        element:<LinkMulherMr/>
      },
      {
        path:"page14_btnvsspm",
        element:<LinkBtmvsSpm/>
      },
      {
        path:"page15_coringa",
        element:<LinkCoringa/>
      },
      {
        path:"page16_sebeber",
        element:<LinkSebeber/>
      },
      {
        path:"page17_debielóide",
        element:<LinkDebiloide/>
      },
      {
        path:"page18_ted",
        element:<LinkTed/>
      },
      {
        path:"page19_norbit",
        element:<LinkNorbit/>
      },
      {
        path:"page20_todomundo",
        element:<LinkTodomundo/>
      },
      {
        path:"page21_umnovo",
        element:<LinkUmnovo/>
      },
      {
        path:"page22_veloz",
        element:<LinkVeloz/>
      },
      {
        path:"page23_oagente",
        element:<LinkOagente/>
      },
      {
        path:"page24_matrix",
        element:<LinkMatrix/>
      },
      {
        path:"page25_predador",
        element:<LinkPredador/>
      },
      {
        path:"page26_pânico",
        element:<LinkPânico/>
      },
      {
        path:"page27_aorfa",
        element:<LinkAorfa/>
      },
      {
        path:"page28_itacoisa",
        element:<LinkItacoisa/>
      },
      {
        path:"page29_annabelle",
        element:<LinkAnabelle/>
      },
      {
        path:"page30_sorria",
        element:<LinkSorria/>
      },

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
