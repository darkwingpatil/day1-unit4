let style1={
    fontSize:"20px",
    borderRadius:"20px",
    color:"white"
}
let Mycont=(prop)=>{
    console.log(prop.values[0])
    return(
        <button style={{backgroundColor:`${prop.values[0]}`,...style1}}>{prop.values[1]}</button>
    )
}

export{Mycont}