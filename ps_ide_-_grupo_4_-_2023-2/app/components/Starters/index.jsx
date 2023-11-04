import styles from './style.module.css'
import Image from 'next/image'
export default function Starters(props){
    return(
        <>
        <div className={styles.container}>
            <titulo>CONHECENDO OS STARTERS</titulo>
            <span>
                <aspascima>
                    <img src='/images/aspas.png' style= {{width: '66px', height: '59px'}}/>
                </aspascima>
                <linha></linha>
                <subtitulo>ESCOLHA UM!</subtitulo>
                <neko>
                    <img src='/images/neko-dormindo.png' style= {{width: '310px', height: '250px'}}/>
                </neko>
                <texto>Treinadores Pokémon enfrentam uma decisão crucial ao escolher seu Pokémon inicial, pois isso moldará suas aventuras. Os tipos - Água, Fogo e Planta - influenciam as batalhas e estratégias. Água domina Fogo, Fogo vence Planta, e Planta supera Água. Escolher com sabedoria é a chave para o sucesso nas jornadas Pokémon. Conheça um pouco mais sobre esses tipos!</texto>
                <aspasbaixo>
                    <img src='/images/aspasbaixo.png' style= {{width: '66px', height: '59px'}}/>
                </aspasbaixo>
            </span>
            <tipos>
                <div>AGUA</div>
                <div>PLANTA</div>
                <div>FOGO</div>
            </tipos>
            <imagens>
                <div><img src='/images/tipos/Agua_longo.png' style= {{width: '100px', height: '59px'}}/></div>
                <div><img src='/images/tipos/Planta_longo.png' style= {{width: '100px', height: '59px'}}/></div>
                <div><img src='/images/tipos/Fogo_longo.png' style= {{width: '100px', height: '59px'}}/></div>
            </imagens>
            <ide>
                <a href="https://www.idejr.com.br/">
                    <img src='/images/logo-pixelado-roxo.png' style= {{width: '100px', height: '59px'}}/>
                </a>
            </ide>
        </div>
        </>
    )
}