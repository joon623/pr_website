import styles from './page.module.css'
import {Navigation} from "@/components/nav/index";

export default function Home() {
    return (
        <>
            <Navigation/>
            <main className={styles.main}>
                <div>안녕하세요 박남준 입니다.</div>
            </main>
        </>
    )
}


