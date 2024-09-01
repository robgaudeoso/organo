import Colaborator from "../Colaborator";
import "./Team.css";

const Team = (props) => {
    const css = { backgroundColor: props.corSecundaria };

    return (
        props.colaboradores.length > 0 && (
            <section className='time' style={css}>
                <h3 style={{ borderColor: props.corPrimaria }}>{props.name}</h3>
                <div className='colaboradores'>
                    {props.colaboradores.map((colaborador) => (
                        <Colaborator
                            key={colaborador.nome}
                            nome={colaborador.nome}
                            cargo={colaborador.cargo}
                            imagem={colaborador.imagem}
                            cor={props.corPrimaria}
                        />
                    ))}
                </div>
            </section>
        )
    );
};

export default Team;
