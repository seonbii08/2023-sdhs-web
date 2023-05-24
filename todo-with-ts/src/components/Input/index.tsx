import {InputHTMLAttributes} from 'react'


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    color?: string;
}

function Input (props:InputProps) {
    return <input {...props} />;
}

export default Input;