import estilos from "./ConteudoPrincipal.module.css";

export default function ConteudoPrincipal() {
    return(
        <section className={estilos.container_conteudo}>
            <div className={estilos.conteudo}>
                <figure className={estilos.container_sabores}>
                                       
                </figure>

                <div className={estilos.conteudo_texto}>
                    <h2>Nossos Sabores</h2>
                    <span>Novos e deliciosos!</span>
                    <p>
                       Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à basse de frutas e sem nenhum conservante! Também temos opcções em lactose e sem açucar. Venha conhecer e perceber que tem como o sorvete se delicioso e saudável ao mesmo tempo! 
                    </p>
                </div>
            </div>

            <div className={estilos.conteudo}>
                <div className={estilos.conteudo_texto}>
                        <h2>Nossos eventos</h2>
                    <span>Delicias com sorvete!</span>
                    <p>
                       Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvetes da sua vida! Venha nos conhecer e passar um tempo aqui com a gente. 
                    </p>
                </div>

                <figure className={estilos.container_eventos}>
                           
                </figure>
            </div>

            <div className={estilos.conteudo}>
                <figure className={estilos.container_sobre}>           
                </figure>

                <div className={estilos.conteudo_texto}>
                        <h2>Sobre nós</h2>
                    <span>Alegria em cada casquinha!</span>
                    <p>
                       Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveitar o melhor atendimento e o melhor sorvete da cidade.
                    </p>
                </div>
            </div>
        </section>
    )
}