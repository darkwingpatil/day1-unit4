import React from 'react';
import styles from '../App.module.css';

const List = ()=>{
    return (
        <React.Fragment>
            <h1 className={styles.class11}>React Menu</h1>
        </React.Fragment>
    ) 
}

const Jaiho =(prop)=>{
// console.log(prop.headers[0])
    return(
        <>
        <h2>{prop.headers[0]}</h2>
        <ul>
        <li>{prop.headers[1]}</li>
        <li>{prop.headers[2]}</li>
        <li>{prop.headers[3]}</li>
        <li>{prop.headers[4]}</li>
        </ul>
        
        </>
    )

    
}
export default List
export{Jaiho}