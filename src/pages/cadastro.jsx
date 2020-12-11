import React from 'react';
import {useHistory} from 'react-router-dom';

export default function NossasMonitoras() {
  const history = useHistory();

  function menu() {
      history.push('/cadastro-menu')
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
  return(
  <html>
    <body>
    <div id="e155_3">
        <div id="e310_94">
          <div id="e217_3"></div>
          <div id="e155_15"></div><span id="e155_18">Criar</span>
        </div>
        <div id="e310_95">
          <div id="e155_16"></div><span id="e155_19">Nome</span>
        </div>
        <div id="e310_96">
          <div id="e155_17"></div><span id="e155_20">Nome de usuário</span>
        </div>
        <div id="e310_97">
          <div id="e155_21"></div><span id="e155_22">Email USP</span>
        </div>
        <div id="e310_98">
          <div id="e155_23"></div><span id="e155_24">Senha</span>
        </div>
        <div id="e310_99">
          <div id="e155_25"></div><span id="e155_26">Bio / Descrição Pessoal</span>
        </div>
        <div id="e310_100">
          <div id="e155_27"></div><span id="e155_28">Conhecimentos (opcional)</span>
        </div>
        <div id="e310_101">
          <div id="e155_29"></div><span id="e155_31">Contato (pode ser email, links de redes sociais)</span>
        </div>
        <div id="e310_93">
          <div id="e155_30"></div><span id="e155_32">Adicionar foto de perfil</span>
        </div><span id="e155_33">Cadastro</span><span id="e155_34">Bem-vinda
      
      Para participar é necessário preencher algumas informações sobre você!</span><span id="e155_35">Criar Perfil</span>
        <div id="e254_74">
          <div id="ei254_74_238_140"></div><span id="ei254_74_238_141"  onClick={inicio}>Início</span><span id="ei254_74_238_142"  onClick={sobre}>Sobre</span>
          <div id="ei254_74_238_143"></div><span id="ei254_74_238_144" onClick={inscrever}>Inscreva-se</span><span id="ei254_74_238_145">L O V E L A C E</span>
          <div id="ei254_74_238_146">
            <div id="ei254_74_238_146_67_29" onClick={menu}></div>
          </div>
          <div id="ei254_74_238_147"></div>
          <div id="ei254_74_238_148"></div>
          <div id="ei254_74_238_150"></div>
          <div id="ei254_74_238_151"></div>
        </div>
      </div>
    </body>
  </html>
  )
}