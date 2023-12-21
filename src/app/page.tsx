import styles from './page.module.css'
import {Navigation} from "@/components/nav/index";
import {HomeComponent} from "@/components/home";


export default function Home() {
    return (
        <>
            <Navigation/>
            <main className={styles.main}>
                <HomeComponent/>
            </main>
        </>
    )
}


