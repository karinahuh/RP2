import React from 'react';
import {useHistory} from 'react-router-dom';
import CarolImg from '../assets/images/Carol.jpg';
import JuliaImg from '../assets/images/Julia.jpeg';
import KatImg from '../assets/images/katharina.jpeg';
import LuanaImg from '../assets/images/luana.jpeg';
import YasImg from '../assets/images/yasmin.jpeg';
import KarinaImg from '../assets/images/karina.jpeg';

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
    <div id="e132_2">
        <div id="e310_88">
          <div id="e132_14"></div>
          <img id="e132_18" src={KatImg} ></img><span id="e132_29">Sou muitio esforçada e estudiosa</span><span id="e132_25">Katharina</span>
        </div>
        <div id="e310_87">
          <div id="e132_15"></div><span id="e132_24">Julia Passos</span><span id="e132_28">Apoio vários projetos de programaço</span>
          <img id="e132_20" src={JuliaImg}></img>
        </div>
        <div id="e310_86">
          <div id="e132_16"></div><span id="e132_23">Carol Galvão</span><span id="e132_27">Amo aprender sobre programaço</span>
          <img id="e132_17" src={CarolImg}></img>
        </div>
        <div id="e310_91">
          <div id="e133_2"></div>
          <img id="e133_6" src={KarinaImg}></img><span id="e133_13">Quero ajudar todos a minha volta</span><span id="e133_10">Karina Huh</span>
        </div>
        <div id="e310_90">
          <div id="e133_3"></div>
          <img id="e133_7" src={YasImg}></img><span id="e133_9">Yasmin Sanches</span><span id="e133_12">Crio telas maravilhosas</span>
        </div>
        <div id="e310_89">
          <div id="e133_4"></div>
          <img id="e133_5" src={LuanaImg}></img><span id="e133_11">Gosto de usar o photoshop</span><span id="e133_8">Luana dos Santos</span>
        </div><span id="e133_14">Sobre o Projeto</span><span id="e136_1">Quem somos?</span><span id="e136_2">Quem foi Ada Lovelace? </span>
        <div id="e310_85">
          <div id="e133_15"></div><span id="e135_0">Somos 6 meninas da área de computação, experienciamos um cenário em que as mulheres são minoria nas faculdades,  15% das matrículas, e correspondem a apenas 17% do total de programadores no mercado. 
      Descobrimos que essa diferença de gênero acontece porque mulheres não se sentem estimuladas a entrar na tecnologia por falta de modelos e as poucas que adentram se sentem menos à vontade em seus ambientes de ensino e trabalho por falta de outras mulheres, ou seja, encontramos um ambiente pouco acolhedor e propenso à evasão. 
      Para reverter esse cenário criamos o L O V E L A C E com o objetivo de incentivar as mulheres nas áreas de computação e aumentar as conexões entre aquelas que já se encontram nessas áreas.
      </span>
        </div>
        <div id="e310_92">
          <div id="e136_5"></div><span id="e136_6">A Condessa de Lovelace, conhecida como Ada Lovelace, nasceu em 1815. Foi uma grande matemática de seu tempo e criou o primeiro algoritmo para ser processado por uma máquina, sendo a primeira programadora da história. Sim, Lovelace foi a primeira pessoa programadora de todos os tempos, e não apenas a primeira mulher a escrever um código.</span>
        </div>
        <div id="e133_0"></div><span id="e132_3" onClick={inicio}>Início</span><span id="e132_4" onClick={sobre}>Sobre</span>
        <div id="e310_84">
          <div id="e132_6" onClick={inscrever}><span id="e132_7">Inscreva-se</span></div>
        </div><span id="e132_8">L O V E L A C E</span>
        <div id="e132_9">
          <div id="ei132_9_67_29" onClick={menu}></div>
        </div>
        <div id="e132_37"></div>
        <div id="e132_38"></div>
        <div id="e132_40"></div>
        <div id="e132_41"></div>
      </div>
    </body>
  </html>
  )
}