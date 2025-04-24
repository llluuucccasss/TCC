import { useState } from "react";
import styles from "./login.module.css";
import Header from "../../components/Header";
import Container from "../../components/Container";

function Login() {
    const [erros, setErros] = useState<{ email?: string; senha?: string }>({});

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const nome = (form.elements.namedItem("nome") as HTMLInputElement).value;
        const email = (form.elements.namedItem("email") as HTMLInputElement).value;
        const senha = (form.elements.namedItem("senha") as HTMLInputElement).value;

        const novosErros: typeof erros = {};

        // Verificação de email
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!emailValido) {
            novosErros.email = "Email inválido.";
        }

        // Verificação de senha
        const senhaValida = senha.length >= 6 && /\d/.test(senha) && /[a-zA-Z]/.test(senha);
        if (!senhaValida) {
            novosErros.senha = "A senha deve conter pelo menos 6 caracteres, letras e números.";
        }

        if (Object.keys(novosErros).length > 0) {
            setErros(novosErros);
            return;
        }

        setErros({});
        const usuario = { id: crypto.randomUUID(), nome, email, senha };
        console.log(usuario);
        // Aqui você pode redirecionar para o chat ou iniciar o WebSocket
    };

    return (
        <>
            <Header />
            <Container>
                <div className={styles.body}>
                    <section className={styles.login}>
                        <h2>Login</h2>
                        <form className={styles.loginForm} onSubmit={handleSubmit}>
                            <input
                                name="nome"
                                type="text"
                                className={styles.loginInput}
                                placeholder="Digite seu nome"
                                required
                            />
                            <input
                                name="email"
                                type="text"
                                className={styles.loginInput}
                                placeholder="Digite seu email"
                                required
                            />
                            {erros.email && <p className={styles.erro}>{erros.email}</p>}
                            <input
                                name="senha"
                                type="password"
                                className={styles.loginInput}
                                placeholder="Digite sua senha"
                                required
                            />
                            {erros.senha && <p className={styles.erro}>{erros.senha}</p>}
                            <button type="submit" className={styles.loginButton}>Entrar</button>
                        </form>
                    </section>
                </div>
            </Container>
        </>
    );
}

export default Login;
