import styles from './style.module.css'
export default function TextoPrincipal(props)
{
    return(
        <>
        <div className={styles.border}>
            <div className={styles.container}>
                <p> A IDE é a empresa júnior dos cursos<br></br> 
                Ciência e Engenharia de Computação da Universidade Federal do Rio Grande do <br></br>
                Sul. Formada por alunos interessados em <br></br>
                se tornarem empreendedores e profissionais excepcionais, a IDE fornece <br></br>
                soluções em software, como sites e <br></br>
                sistemas, com preços abaixo do <br></br>
                mercado, aliados à excelência da UFRGS, <br></br>
                o Instituto de Informática e seus professores, que fornecem apoio técnico <br></br>
                e aconselhamento aos estudantes.<br></br>
                 </p>
                <img src='/imagens/logo-pixelado-branco.png' alt="Logo" className={styles.logo}/>
             </div>
        </div>
        
        </>
    )
}