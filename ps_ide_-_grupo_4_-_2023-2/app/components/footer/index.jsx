import styles from './style.module.css'
export default function Footer(props){
    return(
        <>
        <div className={styles.container}>
            <imagens>
                <a href="https://www.pokemon.com/br/">
                    <img src='/images/pokemon-logo.png' style= {{width: '56px', height: '56px'}}/>
                </a>
                <a href="https://www.instagram.com/ide_jr/">
                    <img src='/images/instagram-logo.png' style= {{width: '56px', height: '56px'}}/>
                </a>
                <a href="https://www.linkedin.com/company/empresa-j%C3%BAnior-ide/?originalSubdomain=br">
                    <img src='/images/linkedin-logo.png' style= {{width: '56px', height: '56px'}}/>
                </a>
                <a href="https://www.idejr.com.br/">
                    <img src='/images/logo-pixelado-branco.png' style= {{width: '100px', height: '56px'}}/>
                </a>
            </imagens>
            <span>株式会社ポケモン (The Pokémon Company) © x IDE © Todos os direitos reservados. Termos de Uso | Politica de Privacidade | Política de Cookies</span>
            <ide>
                <img src='/images/logo-pixelado-branco.png' style= {{width: '150px', height: '80px'}}/>
            </ide>
        </div>
        </>
    )
}