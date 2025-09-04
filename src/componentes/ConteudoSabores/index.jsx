import estilos from "./ConteudoSabores.module.css";
import Image from "next/image";
import oreo from "../../../public/sabor-oreo.jpg";
import pistache from "../../../public/sabor-pistache.png";
import cookie from "../../../public/sabor-cookies-avela.png";
import kiwi from "../../../public/sorbet-kiwi.png";
import morango from "../../../public/sorbet-morango.png";
import limao from "../../../public/sorbet-limao.png";

export default function ConteudoSabores() {
    return(
        <main className={estilos.container_principal}>
            <h2>Sabores de Sorvete</h2>

            <div className={estilos.container_cards}>
                <figure className={estilos.cards}>
                    <Image src={ oreo } alt="Sabor óreo" className={estilos.imagem}/>
                </figure>

                <figure className={estilos.cards}>
                    <Image src={ pistache}  alt="Sabor pistache" className={estilos.imagem}/>
                </figure>

                <figure className={estilos.cards}>
                    <Image src={ cookie } alt="Sabor cookies com avelã" className={estilos.imagem}/>
                </figure>

                <figure className={estilos.cards}>
                    <Image src={ kiwi } alt="Sabor kiwi" className={estilos.imagem}/>
                </figure>

                <figure className={estilos.cards}>
                    <Image src={ morango } alt="Sabor morango" className={estilos.imagem}/>
                </figure>

                <figure className={estilos.cards}>
                    <Image src={ limao } alt="Sabor Limão" className={estilos.imagem}/>
                </figure> 
            </div>
        </main>
    )
}