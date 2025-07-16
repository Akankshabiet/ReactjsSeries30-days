import {useRouterError} from "react-router-dom";
export const ErrorPage = () =>{
    const error = useRouterError();
    console.log(error);

    return(
        <div>
            <h1>Oops! An error occurred.</h1>
            { error && <p>{error.data}</p>}
        </div>
    )
    
    
};