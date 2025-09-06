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
            <h2 className={estilos.subtitulo}>Sabores de Sorvete</h2>

            <div className={estilos.container_cards}>
                <figure className={estilos.cards}>
                    <Image src={ oreo } alt="Sabor óreo" className={estilos.imagem}/>
                    <h3>Sorvete de Oreo</h3>
                    <p>
                        Delicioso sorvete sabor Oreo. Uma explosão de sabor.
                    </p>
                </figure>

                <figure className={estilos.cards}>
                    <Image src={ pistache}  alt="Sabor pistache" className={estilos.imagem}/>
                    <h3>Sorvete de Pistache</h3>
                    <p>
                        Cremoso sorvete sabor pistache com pedacinos de semente.
                    </p>
                </figure>

                <figure className={estilos.cards}>
                    <Image src={ cookie } alt="Sabor cookies com avelã" className={estilos.imagem}/>
                    <h3>Sorvete de Cookies & Avelã</h3>
                    <p>
                        O nosso melhor sorvete. Você vai adorar o sabor.
                    </p>
                </figure>

                <figure className={estilos.cards}>
                    <Image src={ kiwi } alt="Sabor kiwi" className={estilos.imagem}/>
                    <h3>Sorvete de Kiwi</h3>
                    <p>
                       Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.
                    </p>
                </figure>

                <figure className={estilos.cards}>
                    <Image src={ morango } alt="Sabor morango" className={estilos.imagem}/>
                    <h3>Sorvete de Morango</h3>
                    <p>
                        Sorvete de morango gourmet. Tradicional e saboroso.
                    </p>
                </figure>

                <figure className={estilos.cards}>
                    <Image src={ limao } alt="Sabor Limão" className={estilos.imagem}/>
                    <h3>Sorvete de Limão Siciliano</h3>
                    <p>
                        O incrível sorvete gourmet de limão siciliano vai te encantar.
                    </p>
                </figure> 
            </div>
        </main>
    )
}