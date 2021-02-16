import React, {Fragment, useState} from 'react';
import { useForm } from 'react-hook-form';

const MiFormulario = () => {
    
    const {register, errors, handleSubmit} = useForm();
    const [Entrada, setEntrada] = useState([]);

    const onSubmit = (data, e) =>{
        console.log(data)
        setEntrada([
            ...Entrada, data
        ])

        e.target.reset();
    }

    return ( 
        <Fragment>
            <h2>Mi Formulario</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name='titulo'
                    className="form-control"
                    ref={
                        register({
                            required: {
                                value: true,
                                message: 'Campo obligatorio'
                            },
                            maxLength: {
                                value: 20,
                                message: 'El limite de caracteres es de 20'
                            }
                        })
                    }
                />
                <br/>
                <span className="text-danger">
                    {errors?.titulo?.message}
                </span>
                <br/>
                <button className="btn btn-primary">Enviar</button>
            </form>
            <br/>
            <hr/>
            <ol>
                {
                    Entrada.map(item => <li>{item.titulo}</li>)
                }
            </ol>
        </Fragment>
     );
}
 
export default MiFormulario;