import Link from "next/link";
import Title from "./components/Title";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Title title="Bem-vindo ao Portal de Viagens"/>
      <section className={styles.apresentacao}>
        <p className={styles.apresentacao__texto}>
          Aqui você encontra ideias de destinos turísticos para planejar a sua próxima viagem.
        </p>
        <Link className={styles.apresentacao__link} href="/destinos">Ver destinos</Link>
      </section>
    </>
  );
}
