import React from 'react';
import {useHistory} from 'react-router-dom';

export default function NossasMonitoras() {
  const history = useHistory();

  function menu() {
      history.push('/sobre-nos-menu')
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
        <div id="e202_9">
            <div id="e202_10"></div><span id="e202_11" onClick={inicio}>Início</span><span id="e202_12" onClick={sobre}>Sobre</span>
            <div id="e202_13"></div><span id="e202_14">Inscreva-se</span><span id="e202_15">L O V E L A C E</span>
            <div id="e202_16">
              <div id="ei202_16_67_29" onClick={sobre}></div>
            </div>
            <div id="e202_17"></div>
            <div id="e202_18"></div>
            <div id="e202_19"></div>
            <div id="e202_20"></div>
            <div id="e202_21"></div>
            <div id="e202_22"></div><span id="e202_23">Carol Galvão</span><span id="e202_24">Julia Passos</span><span id="e202_25">Katharina</span><span id="e202_26">Escrever aqui algo curto sobre nos</span><span id="e202_27">XX anos</span><span id="e202_28">XX anos</span>
            <div id="e202_29"></div>
            <div id="e202_30"></div>
            <div id="e202_31"></div>
            <div id="e202_32"></div>
            <div id="e202_33"></div>
            <div id="e202_34"></div><span id="e202_35">Luana dos Santos</span><span id="e202_36">Yasmin Sanches</span><span id="e202_37">Karina Huh</span><span id="e202_38">XX anos</span><span id="e202_39">XX anos</span><span id="e202_40">XX anos</span>
            <div id="e202_41"></div>
            <div id="e202_42"></div>
            <div id="e202_44"></div>
            <div id="e202_45"></div><span id="e202_48">Sobre o Projeto</span><span id="e202_49">Quem somos?</span><span id="e202_50">Quem foi Ada Lovelace? </span>
            <div id="e202_51"></div><span id="e202_52">Somos 6 meninas da área de computação, experienciamos um cenário em que as mulheres são minoria nas faculdades,  15% das matrículas, e correspondem a apenas 17% do total de programadores no mercado. 
          Descobrimos que essa diferença de gênero acontece porque mulheres não se sentem estimuladas a entrar na tecnologia por falta de modelos e as poucas que adentram se sentem menos à vontade em seus ambientes de ensino e trabalho por falta de outras mulheres, ou seja, encontramos um ambiente pouco acolhedor e propenso à evasão. 
          Para reverter esse cenário criamos o L O V E L A C E com o objetivo de incentivar as mulheres nas áreas de computação e aumentar as conexões entre aquelas que já se encontram nessas áreas.
          </span>
            <div id="e202_53"></div><span id="e202_54">A Condessa de Lovelace, conhecida como Ada Lovelace, nasceu em 1815. Foi uma grande matemática de seu tempo e criou o primeiro algoritmo para ser processado por uma máquina, sendo a primeira programadora da história. Sim, Lovelace foi a primeira pessoa programadora de todos os tempos, e não apenas a primeira mulher a escrever um código.</span>
            <div id="e202_56"></div>
            <div id="e202_61"></div><span id="e202_62">Castro monitora</span><span id="e202_63">Sobre nos</span><span id="e202_64">Nossas monitoras</span><span id="e202_65">Eventos</span>
            <div id="e202_66"></div>
            <div id="e202_67"></div>
            <div id="e202_68"></div>
            <div id="e202_69"></div>
            <div id="e202_79"></div><span id="e202_80">Castro monitora</span><span id="e202_81">Sobre nos</span><span id="e202_82">Nossas monitoras</span><span id="e202_83">Eventos</span>
            <div id="e202_84"></div>
            <div id="e202_85"></div>
            <div id="e202_86"></div>
            <div id="e202_87"></div>
            <div id="e202_70"></div><span id="e202_71" onClick={inscrever}>Cadastro monitora</span><span id="e202_72" onClick={sobre}>Sobre nós</span><span id="e202_73" onClick={monitora}>Nossas monitoras</span><span id="e202_74" onClick={evento}>Eventos</span>
            <div id="e202_75"></div>
            <div id="e202_76"></div>
            <div id="e202_77"></div>
            <div id="e202_78"></div>
          </div>
    </body>
  </html>
  )
}