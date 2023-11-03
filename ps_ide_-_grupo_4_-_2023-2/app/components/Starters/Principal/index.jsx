import styles from './style.module.css'
export default function Principal(props){
    return(
        <>
        <div className={styles.container}>
            <titulo>CONHECENDO OS STARTERS</titulo>
            <span>
                <subtitulo>ESCOLHA UM!</subtitulo>
                <neko>
                    <img src='/images/neko-dormindo.png' style= {{width: '280px', height: '230px'}}/>
                </neko>
                <aspascima>
                    <img src='/images/aspas.png' style= {{width: '66px', height: '59px'}}/>
                </aspascima>
                <texto>Treinadores Pokémon enfrentam uma decisão crucial ao escolher seu Pokémon inicial, pois isso moldará suas aventuras. Os tipos - Água, Fogo e Planta - influenciam as batalhas e estratégias. Água domina Fogo, Fogo vence Planta, e Planta supera Água. Escolher com sabedoria é a chave para o sucesso nas jornadas Pokémon. Conheça um pouco mais sobre esses tipos!</texto>
                <aspasbaixo>
                    <img src='/images/aspasbaixo.png' style= {{width: '66px', height: '59px'}}/>
                </aspasbaixo>
            </span>
        </div>
        </>
    )
}