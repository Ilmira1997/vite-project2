type TOAppButton = {
  buttonText:string,
  buttonType:"submit" | "button",
  isDisabled ?:boolean
}


const AppButton = ({buttonText,buttonType,isDisabled}:TOAppButton) => {
    return (
        <button disabled={isDisabled} type={buttonType}>{buttonText}</button>
    );
};

export default AppButton;