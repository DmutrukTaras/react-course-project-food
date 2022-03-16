import { useHistory } from "react-router-dom";


function BtnGoBack(props) {
    const { goBack } = useHistory();

    return <>
        <button className="btn btn-go-back hide-on-med-and-down" onClick={goBack}>Go Back</button>

    </>
}

export { BtnGoBack }