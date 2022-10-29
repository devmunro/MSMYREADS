
const CloseSearch = ({setScreenPage}) => {
    return (

        <a
          className="close-search"
          onClick={() => setScreenPage("mainPage")}
        >
          Close
        </a>
      );
}
 
export default CloseSearch;