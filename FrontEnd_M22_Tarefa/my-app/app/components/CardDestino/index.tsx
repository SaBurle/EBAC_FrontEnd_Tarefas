import { Destino } from "@/types/types";
import styles from "./CardDestino.module.css";

type Props = {
    destino: Destino
}

const CardDestino = ({destino} : Props) => {
    const {nome, imagem, descricao} = destino;
    return(
        <div className={styles.card}>
            <img className={styles.card__imagem} src={imagem} alt={`Imagem do destino ${nome}`} width={300} height={200} />
            <div className={styles.card__info}>
                <h3 className={styles.card__title}>{nome}</h3>
                <p className={styles.card__description}>{descricao}</p>
            </div>
        </div>
    )
}
export default CardDestino;
