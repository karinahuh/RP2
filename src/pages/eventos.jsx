import React from 'react';
import {useHistory} from 'react-router-dom';
import Erectangle55 from '../assets/images/erectangle_55.png'
import Erectangle19 from '../assets/images/erectangle_19.png'
import Erectangle35 from '../assets/images/erectangle_35.png'
import Erectangle46 from '../assets/images/erectangle_46.png'

export default function NossasMonitoras() {
  const history = useHistory();

  function menu() {
      history.push('/eventos-menu')
  }

  function inscrever() {
    history.push('/cadastro')
}

function inicio() {
  history.push('/')
}

function sobre() {
  history.push('/sobre-nos')
}

function monitora() {
  history.push('/nossas-monitoras')
}

function evento() {
  history.push('/eventos')
}

function detalhe() {
  history.push('/detalhe-evento')
}

  return(
  <html>
    <body>
        <div id="e193_7">
            <div id="e310_102">
              <div id="e193_52"></div>
              <img id="e193_17" src={Erectangle19}></img><span id="e193_24">Meetup Pyladies</span><span id="e193_28">Online</span>
            </div>
            <div id="e310_104">
              <div id="e193_13"></div>
              <img id="e193_18" src={Erectangle55}></img><span id="e193_22">Vai ter menina na ciência</span><span id="e193_26">Online</span>
            </div>
            <div id="e310_105">
              <div id="e193_14"></div>
              <img id="e193_15" onclick={detalhe} src={Erectangle35}></img><span id="e193_25">Online</span><span id="e193_21">SSI</span>
            </div>
            <div id="e310_106">
              <div id="e201_0"></div>
              <div id="e193_62"></div><span id="e201_3">Online</span><span id="e201_2">lalala</span>
            </div>
            <div id="e310_103">
              <div id="e193_73"></div><span id="e193_75">Roadsec</span>
              <img id="e193_74" src={Erectangle46}></img><span id="e193_76">Online</span>
            </div>
            <div id="e310_107">
              <div id="e201_4"></div>
              <div id="e201_7"></div><span id="e201_6">Online</span><span id="e201_5">lalala</span>
            </div>
            <div id="e310_108">
              <div id="e201_8"></div>
              <div id="e201_11"></div><span id="e201_10">Online</span><span id="e201_9">lalala</span>
            </div>
            <div id="e310_109">
              <div id="e201_12"></div>
              <div id="e201_15"></div><span id="e201_14">Online</span><span id="e201_13">lalala
          </span>
            </div><span id="e193_51">Eventos de tecnologia</span>
            <div id="e254_38">
              <div id="ei254_38_238_140"></div><span id="ei254_38_238_141" onClick={inicio}>Início</span><span id="ei254_38_238_142" onClick={sobre}>Sobre</span>
              <div id="ei254_38_238_143"></div><span id="ei254_38_238_144" onClick={inscrever}>Inscreva-se</span><span id="ei254_38_238_145">L O V E L A C E</span>
              <div id="ei254_38_238_146">
                <div id="ei254_38_238_146_67_29" onClick={menu}></div>
              </div>
              <div id="ei254_38_238_147"></div>
              <div id="ei254_38_238_148"></div>
              <div id="ei254_38_238_150"></div>
              <div id="ei254_38_238_151"></div>
            </div>
          </div>
    </body>
  </html>
  )
}