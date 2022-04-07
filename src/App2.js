//done using 8 different conatiner files
import styles from "./App.module.css"
import {Joinus} from "./container/Joinus";
import{Settings} from "./container/Settings";
import Login from "./container/Login";
import{Contactus} from "./container/Contactus";
import{Search} from "./container/Serach"
import{Help} from "./container/help";
import{Home} from "./container/Home";
import{Download} from "./container/Download"
function App2(){
    return (
        <>
        <div className={styles.firstone}><Joinus/><Settings/></div>
        <div className={styles.secondone}><Login/><Contactus/></div>
        <div className={styles.thirdone}><Search/><Help/></div>
        <div className={styles.fourthone}><Home/><Download/></div>
        </>
        
        
    )
}
export {App2}