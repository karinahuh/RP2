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
  function evento() {
    history.push('/eventos')
  }
  function monitora() {
    history.push('/nossas-monitoras')
  }

  return(
  <html>
    <body>
        <div id="e284_18">
            <div id="e284_19"></div>
            <div id="e284_20"></div><span id="e284_21">Conheça nossas mentoras</span>
            <div id="e284_22"></div>
            <div id="e284_23"></div>
            <div id="e284_24"></div>
            <div id="e284_25"></div>
            <div id="e284_26"></div>
            <div id="e284_27"></div>
            <div id="e284_28"></div>
            <div id="e284_29"></div>
            <div id="e284_30"></div><span id="e284_31">Veja mais eventos</span><span id="e284_32">Nome mentora 1</span><span id="e284_33">Nome mentora 2</span><span id="e284_34">Nome mentora 3</span><span id="e284_35">Nome mentora 4</span><span id="e284_36">XX anos</span><span id="e284_37">XX anos</span><span id="e284_38">XX anos</span><span id="e284_39">XX anos</span>
            <div id="e284_40"></div><span id="e284_41">Monitoras de
          Tecnologia</span>
            <div id="e284_42"></div>
            <div id="e284_43"></div>
            <div id="e284_44"></div>
            <div id="e284_45"></div>
            <div id="e284_46"></div>
            <div id="e284_47"></div><span id="e284_48">SSI</span><span id="e284_49">Online</span>
            <div id="e284_50"></div>
            <div id="e284_51"></div><span id="e284_52">Vai ter menina na ciência</span><span id="e284_53">Online</span>
            <div id="e284_54"></div>
            <div id="e284_55"></div><span id="e284_56">Roadsec</span><span id="e284_57">Online</span>
            <div id="e284_58"></div>
            <div id="e284_59"></div><span id="e284_60">Meetup Pyladies</span><span id="e284_61">Online</span>
            <div id="e284_78"></div>
            <div id="e287_104"></div><span id="e287_105" >Casdastro monitora</span><span id="e287_106">Sobre nos</span><span id="e287_107">Nossas monitoras</span><span id="e287_108">Eventos</span>
            <div id="e287_109"></div>
            <div id="e287_110"></div>
            <div id="e287_111"></div>
            <div id="e287_112"></div>
            <div id="e287_113"></div><span id="e287_114" onClick={inscrever}>Cadastro monitora</span><span id="e287_115">Sobre nos</span><span id="e287_116">Nossas monitoras</span><span id="e287_117">Eventos</span>
            <div id="e287_118"></div>
            <div id="e287_119"></div>
            <div id="e287_120"></div>
            <div id="e287_121"></div><span id="e287_125" onClick={sobre}>Sobre nós</span><span id="e287_126" onClick={monitora}>Nossas monitoras</span><span id="e287_127" onClick={evento}>Eventos</span>
            <div id="e287_128"></div>
            <div id="e287_129"></div>
            <div id="e287_130"></div>
            <div id="e287_131"></div>
            <div id="e284_62">
              <div id="ei284_62_167_4"></div>
            </div><span id="e284_63" onClick={inicio}>Início</span><span id="e284_64" onClick={sobre}>Sobre</span>
            <div id="e297_76">
              <div id="e284_65" onClick={inscrever}><span id="e284_66">Inscreva-se</span></div>
            </div><span id="e284_67">L O V E L A C E</span>
            <div id="e284_68">
              <div id="ei284_68_67_29" onClick={inicio}></div>
            </div>
            <div id="e284_69"></div>
            <div id="e284_70"></div>
            <div id="e284_72"></div>
            <div id="e284_73"></div>
          </div>
    </body>
  </html>
  )
}