import "./InputText.css";

const InputText = (props) => {
    const placeholderModified = `${props.placeholder}...`;

    const aoDigitado = (event) => {
        props.aoAlterado(event.target.value)
    };

    return (
        <div className='input-text'>
            <label>{props.label}</label>
            <input
                value={props.valor}
                onChange={aoDigitado}
                required={props.required}
                placeholder={placeholderModified}
            ></input>
        </div>
    );
};

export default InputText;
