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
  return(
  <html>
    <body>
        <div id="e202_115">
            <div id="e202_116"></div>
            <div id="e202_117"></div>
            <div id="e202_118"></div><span id="e202_119">Criar</span><span id="e202_120">Nome</span><span id="e202_121">Nome de usuário</span>
            <div id="e202_122"></div><span id="e202_123">Email USP</span>
            <div id="e202_124"></div><span id="e202_125">Senha</span>
            <div id="e202_126"></div><span id="e202_127">Bio / Descrição Pessoal</span>
            <div id="e202_128"></div><span id="e202_129">Conhecimentos (opcional)</span>
            <div id="e202_130"></div>
            <div id="e202_131"></div><span id="e202_132">Contato (pode ser email, links de redes sociais)</span><span id="e202_133">Adicionar foto de perfil</span><span id="e202_134">Cadastro</span><span id="e202_135">Bem-vinda
          
          Para participar é necessário preencher algumas informações sobre você!</span><span id="e202_136">Criar Perfil</span>
            <div id="e202_137"></div><span id="e202_138" onClick={inicio}>Início</span><span id="e202_139" onClick={sobre}>Sobre</span>
            <div id="e202_140"></div><span id="e202_141">Inscreva-se</span><span id="e202_142">L O V E L A C E</span>
            <div id="e202_143">
              <div id="ei202_143_67_29" onClick={inscrever}></div>
            </div>
            <div id="e202_144"></div>
            <div id="e202_145"></div>
            <div id="e202_147"></div>
            <div id="e202_148"></div>
            <div id="e202_152"></div>
            <div id="e202_153"></div><span id="e202_154">Castro monitora</span><span id="e202_155">Sobre nos</span><span id="e202_156">Nossas monitoras</span><span id="e202_157">Eventos</span>
            <div id="e202_158"></div>
            <div id="e202_159"></div>
            <div id="e202_160"></div>
            <div id="e202_161"></div>
            <div id="e202_162"></div><span id="e202_163">Castro monitora</span><span id="e202_164">Sobre nos</span><span id="e202_165">Nossas monitoras</span><span id="e202_166">Eventos</span>
            <div id="e202_167"></div>
            <div id="e202_168"></div>
            <div id="e202_169"></div>
            <div id="e202_170"></div>
            <div id="e202_171"></div><span id="e202_172" onClick={inscrever}>Cadastro monitora</span><span id="e202_173" onClick={sobre}>Sobre nós</span><span id="e202_174" onClick={monitora}>Nossas monitoras</span><span id="e202_175" onClick={evento}>Eventos</span>
            <div id="e202_176"></div>
            <div id="e202_177"></div>
            <div id="e202_178"></div>
            <div id="e202_179"></div>
          </div>
    </body>
  </html>
  )
}