import "./Dropdown.css";

const DropdownList = (props) => {
    return (
        <div className='dropdown-list'>
            <label>{props.label}</label>
            <select
                required={props.required}
                value={props.valor}
                onChange={(event) => props.aoAlterado(event.target.value)}
            >
                <option value=''></option>
                {props.items.map((item) => (
                    <option key={item.nome}>{item.nome}</option>
                ))}
            </select>
        </div>
    );
};

export default DropdownList;
