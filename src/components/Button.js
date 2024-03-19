function Button({num}){
    function meuEvento(){
        console.log(`Button on click ${num}`);
    }
    return(
        <div> 
         <button onClick={meuEvento} type="button">Click Me!</button>
        </div>
    )
}

export default Button