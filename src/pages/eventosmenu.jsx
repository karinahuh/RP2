import React from 'react';
import {useHistory} from 'react-router-dom';

export default function NossasMonitoras() {
  const history = useHistory();

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
        <div id="e201_18">
            <div id="e201_19"></div>
            <div id="e201_20"></div>
            <div id="e201_21"></div>
            <div id="e201_22"></div>
            <div id="e201_23"></div>
            <div id="e201_24"></div><span id="e201_25">SSI</span><span id="e201_26">Vai ter menina na ciência</span><span id="e201_27">Meetup Pyladies</span><span id="e201_28">Online</span>
            <div id="e201_29"></div><span id="e201_30">lalala</span><span id="e201_31">Online</span>
            <div id="e201_32"></div>
            <div id="e201_33"></div><span id="e201_34">Roadsec</span><span id="e201_35">Online</span>
            <div id="e201_36"></div>
            <div id="e201_37"></div><span id="e201_38">lalala</span><span id="e201_39">Online</span>
            <div id="e201_40"></div>
            <div id="e201_41"></div><span id="e201_42">lalala</span><span id="e201_43">Online</span>
            <div id="e201_44"></div>
            <div id="e201_45"></div><span id="e201_46">lalala
          </span><span id="e201_47">Online</span>
            <div id="e201_48"></div><span id="e201_49">Online</span><span id="e201_50">Online</span>
            <div id="e201_51">
              <div id="ei201_51_167_4"></div>
            </div><span id="e201_52" onClick={inicio}>Início</span><span id="e201_53" onClick={sobre}>Sobre</span>
            <div id="e310_129">
              <div id="e201_54" onClick={inscrever}><span id="e201_55">Inscreva-se</span></div>
            </div><span id="e201_56">L O V E L A C E</span>
            <div id="e201_57">
              <div id="ei201_57_67_29" onClick={evento}></div>
            </div>
            <div id="e201_58"></div>
            <div id="e201_59"></div>
            <div id="e201_61"></div>
            <div id="e201_62"></div><span id="e201_65">Eventos de tecnologia</span>
            <div id="e201_68"></div>
            <div id="e201_69"></div><span id="e201_71">Sobre nos</span><span id="e201_72">Nossas monitoras</span><span id="e201_73">Eventos</span>
            <div id="e201_74"></div>
            <div id="e201_75"></div>
            <div id="e201_76"></div>
            <div id="e201_77"></div><span id="e201_80" onClick={sobre}>Sobre nós</span><span id="e201_81" onClick={monitora}>Nossas monitoras</span><span id="e201_82" onClick={evento}>Eventos</span>
            <div id="e201_83"></div>
            <div id="e201_84"></div>
            <div id="e201_85"></div>
            <div id="e201_86"></div><span id="e201_79" onClick={inscrever}>Cadastro monitora</span>
          </div>
    </body>
  </html>
  )
}