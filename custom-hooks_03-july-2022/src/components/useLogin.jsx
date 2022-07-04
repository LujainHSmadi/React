import { useState } from "react";

export default function useLogin(username,password) {
    const [message, setMessage] = useState('');
    const handelSubmit = (e) => {
        e.preventDefault();
        if (username == 'Lujain' && password == '123')
            setMessage( 'successfull');
        else
            setMessage('faild');
    }

    return [message,handelSubmit];

}