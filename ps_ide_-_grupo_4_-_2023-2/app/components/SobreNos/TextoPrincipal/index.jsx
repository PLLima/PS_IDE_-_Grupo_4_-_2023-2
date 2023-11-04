import styles from './style.module.css'
import Image from 'next/image'

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
                <Image
                    className={styles.logo}
                    src='/images/logo-pixelado-branco.png'
                    height={300}
                    width={550}
                    alt=""
                />
                </div>
             </div>
        </div>
        
        </>
    )
}