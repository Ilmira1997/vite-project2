import { SCAppLink } from "./AppLink.style";

type TOAppLink = {
linkText:string
}

const Applink = ({linkText}:TOAppLink) => {
    return (
        <SCAppLink  className="forgot-password-link">{linkText}</SCAppLink>
    );
};

export default Applink;