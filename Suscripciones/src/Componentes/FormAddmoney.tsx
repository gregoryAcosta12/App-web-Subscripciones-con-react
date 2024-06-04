import { useState } from "react";


const FormAddMoney = () =>{
    const [input,setInput] = useState ("");
    const [Error,setInput] = useState (false);

    const handleform =  e => {
        e.preventDefault ();
         if(input ===""|| Numero(input) <0){
           setError(true);

         }
        console.log(input);
        
    }
    return(
      <div className="form-add-money">
        {input}
       <form onSubmit={handleform}>
        <p>Agregar Presupuesto</p>
        <input type="number"  placeholder="100$" onChange ={e => setInput(e.target.value)}/>
        <input type="submit"  value = "Agregar"/>
       </form>

      </div>
    );
}

export default FormAddMoney;
