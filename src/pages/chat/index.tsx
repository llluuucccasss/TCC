import { useState, useEffect } from "react";
import styles from "./chat.module.css";
import Header from "../../components/Header";
import Container from "../../components/Container";
import { io, Socket } from "socket.io-client";

// Tipo da mensagem
type Mensagem = {
  id: string;       // ID do remetente
  texto: string;    // Conteúdo da mensagem
};

const socket: Socket = io(import.meta.env.VITE_API_URL);

const Chat = () => {
  const [mensagens, setMensagens] = useState<Mensagem[]>([]);
  const [novaMensagem, setNovaMensagem] = useState("");
  const [userId] = useState(crypto.randomUUID()); // Gerar um ID único para o usuário

  useEffect(() => {
    socket.on("connect", () => console.log("Cliente conectado"));
    socket.on("connect_error", (error) => console.error("Erro ao conectar ao servidor:", error));
    
    // Recebe a mensagem do servidor e atualiza o estado com a mensagem recebida
    socket.on("message", (mensagem: Mensagem) => {
      // Se a mensagem foi enviada pelo remetente, não a adicionamos de novo.
      if (mensagem.id !== userId) {
        setMensagens((prev) => [...prev, mensagem]);
      }
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("message");
      socket.off("connect_error");
    };
  }, [userId]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const mensagem = {
      id: userId,        // Passa o ID do usuário junto com a mensagem
      texto: novaMensagem,
    };

    socket.emit("message", mensagem); // Envia a mensagem para o servidor
    setMensagens((prev) => [...prev, mensagem]); // Atualiza o estado com a própria mensagem
    setNovaMensagem(""); // Limpa o campo de input
  };

  return (
    <>
      <Header />
      <Container>
        <div className={styles.body}>
          <section className={styles.chat}>
            <section className={styles.chatMessages}>
              {mensagens.map((msg, i) => (
                <div
                  key={i}
                  className={msg.id === userId ? styles.mensageSelf : styles.mensageOther}
                >
                  {msg.texto}
                </div>
              ))}
            </section>

            <form className={styles.chatForm} onSubmit={handleSubmit}>
              <input
                type="text"
                className={styles.chatInput}
                placeholder="Digite uma mensagem"
                value={novaMensagem}
                onChange={(e) => setNovaMensagem(e.target.value)}
                required
              />
              <button type="submit" className={styles.chatButton}>
                Enviar
              </button>
            </form>
          </section>
        </div>
      </Container>
    </>
  );
};

export default Chat;
