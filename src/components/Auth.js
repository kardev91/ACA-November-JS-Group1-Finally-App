import React  from "react";
import {useAuth} from "../contexts/AuthContext";
import {useHistory} from "react-router-dom"
import {Button} from "@material-ui/core";


export default function Auth(){

    const {login} = useAuth();
    const history = useHistory();

    function handleLogin (event){
        event.preventDefault();
        try {
            login('aaa@aa.aa', 'aaa@aa.aa')
            history.push('/')
        }catch {
            alert(`Failed to log in`);
        }
    }



    return (
        <>
          <Button onClick={handleLogin} type="submit">Log In</Button>
        </>
    )
}
