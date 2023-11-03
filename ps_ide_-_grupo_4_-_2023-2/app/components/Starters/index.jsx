import styles from './style.module.css';

export default function Starters(props){
    return(
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Água</h1>
                    <div className={styles.container}>
                        <div className={styles.grid}>
                            <img src={'images/pokemons/agua/1.png'}/>
                            <img src={'images/pokemons/agua/2.png'}/>
                            <img src={'images/pokemons/agua/3.png'}/>
                            <img src={'images/pokemons/agua/4.png'}/>
                            <img src={'images/pokemons/agua/5.png'}/>
                            <img src={'images/pokemons/agua/6.png'}/>
                            <img src={'images/pokemons/agua/7.png'}/>
                            <img src={'images/pokemons/agua/8.png'}/>
                            <img src={'images/pokemons/agua/9.png'}/>
                            <img src={'images/pokemons/agua/10.png'}/>
                            <img src={'images/pokemons/agua/11.png'}/>
                            <img src={'images/pokemons/agua/12.png'}/>
                                <div className={styles.logos}>
                                    <img src={'images/tipos/Agua_longo.png'}/>
                                    <img src={'images/tipos/Planta_longo.png'}/>
                                    <img src={'images/tipos/Fogo_longo.png'}/>
                                </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

