'use client';
import { useState } from "react";
import styles from "./style.module.css"

export default function Forms(props){
    // Estados para campo de input
    const [pokemon, setPokemon] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    // Função do botão
    function handleClick(){
    // Validação de campos
    if(pokemon === '' || mensagem === '' || email === '' || senha === '')
    {
        alert('Por favor preencha todos os campos');
        return;
    }

    // Verifica se o campo de email não está vazio e se corresponde ao padrão de e-mail
    if(email !== '' && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
        alert('Por favor, insira um endereço de e-mail válido');
        return;
    }

    alert('Meu pokemon favorito é o ' + pokemon)

    // Limpar os campos após enviar a mensagem
    setPokemon('');
    setMensagem('');
    setEmail('');
    setSenha('');
    }

    return(
        <>
        <div className={styles.container}>
            <h1>Envie uma mensagem para nós:</h1>

            <input placeholder={'Pokemon Favorito'}
            value = {pokemon}
            onChange={(e) => setPokemon(e.target.value)}/>

            <input placeholder={'Mensagem'}
            value = {mensagem}
            onChange={(e) => setMensagem(e.target.value)}/>

            <input placeholder={'Email'}
            value ={email}
            onChange={(e) => setEmail(e.target.value)}/>

            <input type = "password" 
            placeholder={'Senha do Cartão'}
            value = {senha}
            onChange={(e) => setSenha(e.target.value)}/>

            <button onClick={handleClick}>Enviar</button>
        </div>
        </>
    );
}