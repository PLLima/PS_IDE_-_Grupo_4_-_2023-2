import styles from './style.module.css'
export default function TextoPrincipal(props)
{
    return(
        <>
        <div className={styles.border}>
            <div className={styles.container}>
                <p> A IDE é a empresa júnior dos cursos
                Ciência e Engenharia de Computação da Universidade Federal do Rio Grande do 
                Sul. Formada por alunos interessados em 
                se tornarem empreendedores e profissionais excepcionais, a IDE fornece 
                soluções em software, como sites e 
                sistemas, com preços abaixo do 
                mercado, aliados à excelência da UFRGS, 
                o Instituto de Informática e seus professores, que fornecem apoio técnico 
                e aconselhamento aos estudantes.
                 </p>
                <div className={styles.logo}>
                <img src='/images/logo-pixelado-branco.png' alt="Logo" className={styles.logo}/>
                </div>
             </div>
        </div>
        
        </>
    )
}