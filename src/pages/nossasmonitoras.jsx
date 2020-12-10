import React from 'react';
import {useHistory} from 'react-router-dom';

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

function detalhe() {
  history.push('/detalhe-evento')
}

  return(
    <div id="e238_0">
      <div id="e310_112">
        <div id="e238_2"></div>
        <div id="e238_1"></div><span id="e238_5">Nome</span><span id="e238_6">Online - USP</span>
        <div id="e310_113">
          <div id="e238_3"></div><span id="e238_4">Seguir</span>
        </div>
        <div id="e238_129"></div>
      </div>
      <div id="e310_114">
        <div id="e238_7"></div><span id="e238_10">Nome</span><span id="e238_11">Online - USP</span>
        <div id="e310_115">
          <div id="e238_8"></div><span id="e238_9">Seguir</span>
        </div>
      </div>
      <div id="e310_122">
        <div id="e238_12"></div><span id="e238_18">Nome</span><span id="e238_19">Online - USP</span>
        <div id="e310_123">
          <div id="e238_14"></div><span id="e238_16">Seguir</span>
        </div>
      </div>
      <div id="e310_124">
        <div id="e238_13"></div>
        <div id="e238_37"></div><span id="e238_36">Online</span><span id="e238_35">lalala</span>
        <div id="e310_125">
          <div id="e238_15"></div><span id="e238_17">Seguir</span>
        </div>
      </div>
      <div id="e310_118">
        <div id="e238_20"></div><span id="e238_23">Nome</span><span id="e238_24">Online - USP</span>
        <div id="e310_119">
          <div id="e238_21"></div><span id="e238_22">Seguir</span>
        </div>
      </div>
      <div id="e310_120">
        <div id="e238_25"></div><span id="e238_28">Nome</span>
        <div id="e310_121">
          <div id="e238_26"></div><span id="e238_27">Seguir</span>
        </div><span id="e238_29">Online - USP</span>
      </div>
      <div id="e310_116">
        <div id="e238_30"></div><span id="e238_33">Nome</span><span id="e238_34">Online - USP</span>
        <div id="e310_117">
          <div id="e238_31"></div><span id="e238_32">Seguir</span>
        </div>
      </div>
      <div id="e310_126">
        <div id="e238_38"></div><span id="e238_41">lalala</span>
        <div id="e310_127">
          <div id="e238_39"></div><span id="e238_40">Seguir</span>
        </div><span id="e238_42">Online</span>
        <div id="e238_43"></div>
      </div><span id="e238_60">Nossas Monitoras e Mentoras</span>
      <div id="e254_18">
        <div id="e238_140"></div><span id="e238_141" onClick={inicio}>Início</span><span id="e238_142" onClick={sobre}>Sobre</span>
        <div id="e238_143" onClick={inscrever}><span id="e238_144">Inscreva-se</span></div><span id="e238_145">L O V E L A C E</span>
        <div id="e238_146">
          <div id="ei238_146_67_29" onClick={menu}></div>
        </div>
        <div id="e238_147"></div>
        <div id="e238_148"></div>
        <div id="e238_150"></div>
        <div id="e238_151"></div>
      </div>
    </div>
  );
}

