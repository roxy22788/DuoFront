function Cadastro() {
    return ( 
        <div>
            <form>
                <p>Nome de Usuário</p>
                <input type="text" name="usuario"></input>

                <p>Email</p>
                <input type="text" name="email"></input>
                
                <p>Genero
                    <label>
                        <input type="radio" name="genero" value="masculino" />
                        Masculino
                    </label>
                    <label>
                        <input type="radio" name="genero" value="geminino" />
                        Feminino
                    </label>
                    <label>
                        <input type="radio" name="genero" value="os-dois"/>
                        Os dois
                    </label>
                    <label>
                        <input type="radio" name="genero" value="pnd" checked/>
                        Prefiro não dizer
                    </label>
                </p>


                <p>Senha</p>
                <input type="password" name="senha"></input>

                <p>Confirmar senha</p>
                <input type="password" name="confirmar-senha"></input>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Cadastro;