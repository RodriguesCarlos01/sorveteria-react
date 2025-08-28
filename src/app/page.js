import Banner from "@componentes/Banner";
import estilos from "./page.module.css";
import ConteudoPrincipal from "@/componentes/ConteudoPrincipal";

export default function Home() {
  return (
    <div className={estilos.page}>
      <main >
       <Banner />
       <ConteudoPrincipal />
      </main>
    </div>
  );
}
