import { SCAppHeader } from "./AppHeader.style";

interface TOAppHeader {
  headerType:"h1" | "h2" | "h3" | "h4" | "h5" |"h6",
  headerText:string
}

const AppHeader = ({headerText, headerType}:TOAppHeader) => {
    const renderHeader = () => {
        switch (headerType) {
            case "h1":
                return <SCAppHeader>{headerText}</SCAppHeader>;
            case "h2":
                return <h2>{headerText}</h2>;
            case "h3":
                return <h3>{headerText}</h3>;
            case "h4":
                return <h4>{headerText}</h4>;
            case "h5":
                return <h5>{headerText}</h5>;
            case "h6":
                return <h6>{headerText}</h6>;
        }
    }
    return (
        renderHeader()
    );
};

export default AppHeader;