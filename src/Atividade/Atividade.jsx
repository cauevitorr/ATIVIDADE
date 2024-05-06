import './Atividade.css'
import React from 'react'

const Atividade = () => {

 // const nome1 = document.getElementById("nome").value
 // const email1 = document.getElementById("email").value
 // const senha1 = document.getElementById("senha").value
 // const cep1 = document.getElementById("cep").value
 // const rua1 = document.getElementById("rua").value
 // const numero1 = document.getElementById("numero").value
 // const bairro1 = document.getElementById("bairro").value
 // const cidade1 = document.getElementById("cidade").value
 // const estado1 = document.getElementById("estado").value


 const [nome, setNome] = React.useState('')
 const [email, setEmail] = React.useState('')
 const [senha, setSenha] = React.useState('')
 const [cep, setCep] = React.useState('')
 const [rua, setRua] = React.useState('')
 const [numero, setNumero] = React.useState('')
 const [bairro, setBairro] = React.useState('')
 const [cidade, setCidade] = React.useState('')
 const [estado, setEstado] = React.useState('')

 function HandleSubmit(event) {
  const nome1 = document.getElementById("nome").value
  nome1 == ''
  event.preventDefault()

  const dataForm = {
   nome:nome, 
   email:email, 
   senha:senha , 
   cep:cep, 
   rua:rua, 
   numero:numero, 
   bairro:bairro, 
   cidade:cidade, 
   estado:estado 
  }

  fetch('https://ranekapi.origamid.dev/json/api/usuario', {
   method: 'POST',
   headers: {
    'Content-Type':'application/json'
   },
   body: JSON.stringify(dataForm)
  }).then(response => {
   alert('Enviado com sucesso')
   console.log(response)
   console.log(dataForm)

  }).catch(err => {
   alert(err)
  })

  setNome('')
  setEmail('')
  setSenha('')
  setCep('')
  setNumero('')
  setRua('')
  setBairro('')
  setCidade('')
  setEstado('')
 }
 return (
  <form onSubmit={HandleSubmit}>
   <label htmlFor="nome">Nome</label>
   <input required autoFocus id='nome' type="text" value={nome}
    onChange={(event) => setNome(event.target.value)}/> 
   <label htmlFor="email">Email</label>
   <input required autoFocus id='email' type='email' value={email}
    onChange={(event) => setEmail(event.target.value)} />
   <label htmlFor="senha">Senha</label>
   <input required autoFocus minLength='8' maxLength='12' id='senha' type='password' value={senha}
    onChange={(event) => setSenha(event.target.value)} />
   <label htmlFor="cep">CEP</label>
   <input minLength='8' maxLength='8' required autoFocus id='cep' type='number' value={cep}
    onChange={(event) => setCep(event.target.value)} />
   <label htmlFor="rua">Rua</label>
   <input required autoFocus id='rua' type='text' value={rua}
    onChange={(event) => setRua(event.target.value)} />
   <label htmlFor="numero">Número</label>
   <input required autoFocus id='numero' type='number' value={numero}
    onChange={(event) => setNumero(event.target.value)} />
   <label htmlFor="bairro">Bairro</label>
   <input required autoFocus id='bairro' type='text' value={bairro}
    onChange={(event) => setBairro(event.target.value)} />
   <label htmlFor="cidade">Cidade</label>
   <input required autoFocus id='cidade' type='text' value={cidade}
    onChange={(event) => setCidade(event.target.value)} />
   <label htmlFor="estado">Estado</label>
   <input required autoFocus id='estado' type='text' value={estado}
    onChange={(event) => setEstado(event.target.value)} />
   <button>Enviar</button>
  </form>
 )
}


export default Atividade
