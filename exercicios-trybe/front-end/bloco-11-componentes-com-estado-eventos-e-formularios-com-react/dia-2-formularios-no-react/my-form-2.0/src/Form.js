import React, { Component } from "react";

class Form extends Component {
    render() {
        return (
            <form>
                <fieldset> Dados Pessoas:<br/>
                    <label htmlFor='nome'> Nome
                        <input type='text' id='nome' maxLength='40' required></input>
                    </label>
                    <br/>
                    <label htmlFor='email'> E-mail
                        <input type='text' id='email' maxLength='50' required></input>
                    </label>
                    <br/>
                    <label htmlFor='CPF'> CPF
                        <input type='text' id='CPF' maxLength='11' required></input>
                    </label>
                    <br/>
                    <label htmlFor='endereco'> Endereço
                        <input type='text' id='endereco' maxLength='200' required></input>
                    </label>
                    <br/>
                    <label htmlFor='cidade'> Cidade
                        <input type='text' id='cidade' maxLength='28' required></input>
                    </label>
                    <br/>
                    <label htmlFor='estado'> Estado
                        <select id='estado' required>
                            <option>GO</option>
                            <option>MG</option>
                            <option>SP</option>
                            <option>RJ</option>
                        </select>
                    </label>
                    <br/>
                </fieldset>
                <fieldset> Dados do último emprego: <br/>
                    <label htmlFor='resumoCur'> Resumo do currículo
                        <textarea id='resumoCur' maxLength='1000' required></textarea>
                    </label>
                    <br/>
                    <label htmlFor='cargo'> Cargo
                        <textarea id='cargo' maxLength='40' required></textarea>
                    </label>
                    <br/>
                    <label htmlFor='descricao-cargo'> Descrição do cargo
                        <input type='text' id='descricao-cargo' maxLength='500' required></input>
                    </label>
                </fieldset>
            </form>
        )
    }
}

export default Form;