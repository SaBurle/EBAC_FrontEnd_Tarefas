import { Destino } from "@/types/types";
import CardDestino from "../CardDestino";
import styles from "./Grid.module.css";

type Props = {
    destinos: Destino[]
}
const Grid = ({destinos} : Props) => {

    return(
        <section className={styles.grid}>
            {destinos.map(destino => <CardDestino key={destino.id} destino={destino}/>)}
        </section>
    )
}
export default Grid;
