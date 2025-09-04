
import BannerSabores from "@/componentes/BannerSabores";
import estilos from "./page_sabores.module.css";
import ConteudoSabores from "@/componentes/ConteudoSabores";

export default function SaboresBanner() {
    return(
        <main className={estilos.container_banner_sabores}>
            <BannerSabores />
            <ConteudoSabores />

        </main>
    )
}