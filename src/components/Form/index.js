import { useState } from "react";
import Button from "../Button";
import DropdownList from "../Dropdown";
import InputText from "../InputText";
import "./Form.css";

const Form = (props) => {
    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [time, setTime] = useState("");

    const aoSalvar = (event) => {
        event.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time,
        });
        setNome("");
        setCargo("");
        setImagem("");
        setTime("");
    };

    return (
        <section className='form'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <InputText
                    required
                    label='Nome'
                    placeholder='Digite seu nome'
                    valor={nome}
                    aoAlterado={(valor) => setNome(valor)}
                />
                <InputText
                    required
                    label='Cargo'
                    placeholder='Digite seu cargo'
                    valor={cargo}
                    aoAlterado={(valor) => setCargo(valor)}
                />
                <InputText
                    label='Imagem'
                    placeholder='Digite o endereço da imagem'
                    valor={imagem}
                    aoAlterado={(valor) => setImagem(valor)}
                />
                <DropdownList
                    required
                    valor={time}
                    aoAlterado={(valor) => setTime(valor)}
                    label='Time'
                    items={props.teams}
                />
                <Button text='Criar Card'>Criar Card</Button>
            </form>
        </section>
    );
};

export default Form;
