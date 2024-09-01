import "./Colaborator.css";

const Colaborator = ({ nome, imagem, cargo, cor }) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{ backgroundColor: cor }}>
                <img src={imagem} alt={nome}></img>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    );
};

export default Colaborator;
