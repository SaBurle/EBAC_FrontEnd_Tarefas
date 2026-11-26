import Grid from "../components/Grid";
import Title from "../components/Title";
import {destinos} from "@/lib/destinos";

const Destinos = () => {

    return(
        <>
            <Title title="Destinos"/>
            <Grid destinos={destinos}/>
        </>
    )
}
export default Destinos;
