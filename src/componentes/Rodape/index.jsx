import estilos from "./Rodape.module.css";
import Image from "next/image"; 
import Logo from "../../../public/logo.png";

export default function Rodape() {
    return(
        <section className={estilos.container_rodape}>
            <div className={estilos.conteudo_rodape}>
                <figure className={estilos.container_imagem}>
                    <Image src={Logo} alt="Logo da sorveteria" className={estilos.rodape_imagem}/>
                </figure>
                <div className={estilos.container_texto}>
                    <span>Endereço</span>
                    <p>Av. Bernadino de Campos, 98 São Paulo, SP 12345-678</p>
                </div>

                <div className={estilos.container_texto}>
                    <span>Contato</span>
                    <p>info@meusite.com tel:(11)3456-7890</p>
                </div>

                <div className={`${estilos.container_texto} ${estilos.conatianer_horario}`}>
                    <span>Horários</span>
                    <p>Aberto todos os dias 10:00 - 22:00</p>
                </div>
            </div>
            <p className={estilos.desenvolvedor}>Gelateria. Orgulhosamente desenvolvido por <span>Carlos Alcides</span> </p>
        </section>
    )
}