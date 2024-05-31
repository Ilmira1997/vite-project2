import { SCAppInput } from "./AppInput.style";

interface TOAppInput  {
    inputType:"text" | "password" | "email",
    id:string,
    inputValue:string,
    isRequired ?:boolean
}



const AppInput = ({inputType,id,inputValue,isRequired}:TOAppInput) => {
    return (
       <SCAppInput
          type={inputType}
          id={id}
          value={inputValue}
          required={isRequired}
        />
    );
};

export default AppInput;