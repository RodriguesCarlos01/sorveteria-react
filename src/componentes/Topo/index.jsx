import estilos from "./Topo.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";

export default function Topo() {
  return(
		<section className={estilos.container_topo}>
			<div className={estilos.container_navegacao}>
				<div className={estilos.topo_container_img}>
					<Image src={ logo } alt="Logo Sorveteria" className={estilos.topo_img} />
				</div>

				<nav className={estilos.topo_navegacao}>
					<Link className={estilos.topo_link} href="/" >Home</Link>
					<Link className={estilos.topo_link} href="/sabores" >Sabores</Link>
					<Link className={estilos.topo_link} href="/sobre" >Sobre</Link>
				</nav>
			</div>
		</section>
	);
}
