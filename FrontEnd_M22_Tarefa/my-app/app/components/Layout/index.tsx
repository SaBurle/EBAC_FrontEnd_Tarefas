import Header from "../Header";
import Footer from "../Footer";
import styles from "./Layout.module.css";

type Props = {
    children: React.ReactNode
}

const Layout = ({children} : Props) => {
    return(
        <div className={styles.layout}>
            <Header/>
            <main className={styles.layout__conteudo}>
                {children}
            </main>
            <Footer/>
        </div>
    );
}
export default Layout;
