import React from 'react'
import {useState} from 'react'
import ListPokemon from '../content/ListPokemon'
import {InputItem,ConteinerInput} from './InputStyle.js'


function InputLimite() {
 const[valo,setValor] =  useState(0)

  return (
    <>
    <ConteinerInput>
    <InputItem type='number' onChange={(e) => setValor(e.target.value)} placeholder="Digite a Quantidade" />
   
    </ConteinerInput>
   
     
       <ListPokemon valor={valo} />
   
    
    </>
  )
}

export default InputLimite