//done using one container and prop property
import{Mycont} from "./container/singlecont";
import styles from "./App.module.css"
function App3(){
    return (
        <div className="main">
            <div className={styles.firstone}><Mycont values={["blue","Join US"]}/>
            <Mycont values={["silver","Settings"]}/></div>

            <div className={styles.secondone}><Mycont values={["orange","Login"]}/><Mycont values={["red","Contact us"]}/></div>
            <div className={styles.thirdone}><Mycont values={["green","Search"]}/><Mycont values={["purple","Help"]}/></div>
            <div className={styles.fourthone}><Mycont values={["Pink","Home"]}/><Mycont values={["Brown","Download"]}/></div>
            
        </div>
    )
}

export {App3}