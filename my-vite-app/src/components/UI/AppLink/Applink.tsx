type TOAppLink = {
linkText:string
}

const Applink = ({linkText}:TOAppLink) => {
    return (
        <a  className="forgot-password-link">{linkText}</a>
    );
};

export default Applink;