import React from 'react';
import {useHistory} from 'react-router-dom';
import menuImg from '../assets/images/menuImg.png'
import Erectangle from '../assets/images/erectangle.png'
import Erectangle55 from '../assets/images/erectangle_55.png'
import Erectangle19 from '../assets/images/erectangle_19.png'
import Erectangle35 from '../assets/images/erectangle_35.png'
import Erectangle46 from '../assets/images/erectangle_46.png'

export default function NossasMonitoras() {
  const history = useHistory();

  function menu() {
      history.push('/menu-inicial')
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

  return(
    <html>
      <body>
      <div id="e58_4">
        <div id="e310_133">
          <div id="e67_33"></div>
          <img id="e67_71" src={Erectangle}></img>
          <div id="e67_68" ></div>
          <div id="e67_67"></div>
          <div id="e67_66"></div>
          <div id="e67_70"></div><span id="e67_38">Monitoras de Tecnologia</span>
          <div id="e310_77">
            <div id="e67_34" onClick={monitora}><span id="e67_36">Conheça nossas mentoras</span></div><span id="e67_36">Conheça nossas mentoras</span>
          </div>
        </div>
        <div id="e67_43"></div>
        <div id="e67_44"></div>
        <div id="e67_45"></div>
        <div id="e67_46"></div>
        <div id="e67_47"></div>
        <div id="e67_48"></div>
        <div id="e67_50"></div>
        <div id="e67_49"></div>
        <div id="e310_76">
          <div id="e67_51" onClick={evento}><span id="e67_52">Veja mais eventos</span></div>
        </div><span id="e67_54">Nome mentora 1</span><span id="e67_55">Nome mentora 2</span><span id="e67_56">Nome mentora 3</span><span id="e67_57">Nome mentora 4</span><span id="e67_58">XX anos</span><span id="e67_59">XX anos</span><span id="e67_60">XX anos</span><span id="e67_61">XX anos</span>
        <div id="e310_80">
          <div id="e310_79">
            <div id="e284_0"></div>
          </div><span id="e284_2">SSI</span>
          <img id="e284_1" src={Erectangle35} ></img><span id="e284_3">Online</span>
        </div>
        <div id="e310_81">
          <div id="e284_4"></div><span id="e284_6">Vai ter menina na ciência</span>
          <img id="e284_5" src={Erectangle55} ></img><span id="e284_7">Online</span>
        </div>
        <div id="e310_82">
          <div id="e284_8"></div>
          <img id="e284_9" src={Erectangle46}></img><span id="e284_10">Roadsec</span><span id="e284_11">Online</span>
        </div>
        <div id="e310_83">
          <div id="e284_12"></div>
          <img id="e284_13" src={Erectangle19}></img><span id="e284_14">Meetup Pyladies</span><span id="e284_15">Online</span>
        </div>
        <div id="e169_3">
          <div id="e167_4"></div>
        </div><span id="e167_5" onClick={inicio}>Início</span><span id="e167_6" onClick={sobre}>Sobre</span>
        <div id="e310_78">
          <div id="e167_7" onClick={inscrever}> <span id="e167_8">Inscreva-se</span></div>
        </div><span id="e167_9">L O V E L A C E</span>
        <div id="e167_10">
        <div id="ei167_10_67_29" onClick={menu}>
          <img src={menuImg} alt="Menu" width='0.2rem' height/>
        </div>
        </div>
        <div id="e167_11"></div>
        <div id="e167_12"></div>
        <div id="e167_14"></div>
        <div id="e167_15"></div>
      </div>
      </body>
    </html>
  )
}