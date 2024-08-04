import "./Button.css"
import * as React from 'react';

interface Props {
    text: string;
    onClick: () => void; // Add an onClick event handler prop
    selected?: boolean; // Add a selected prop
}

const Button: React.FC<Props> = ({ text, selected, onClick }) => {
    return (
        <button className={`Button ${selected ? 'selected' : ''}`} onClick={onClick}>{text}</button>
    )
}

export default Button