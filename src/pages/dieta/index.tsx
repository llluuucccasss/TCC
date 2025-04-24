import Container from "../../components/Container";
import Header from "../../components/Header";
import style from "./dieta.module.css"
import { FaDumbbell } from "react-icons/fa6";

function Dieta() {
  return (
    <>
    <Header />
    <Container>

        <section className={style.body}>

            <div className={style.info_base}>
                <h3> dieta de hoje</h3>
                <p>data</p>
                <p>tipo</p>
            </div>

            <div className={style.bloco1}>

                <div className={style.row}>
                    <div className={style.dieta}>
                        <div className={style.icones}>
                            <FaDumbbell className={style.icone} />
                        </div>
                        <p>nome do prato</p>
                        <span> numero de kcal</span>
                        <button>ler receita</button>
                    </div>
                </div>

                <div className={style.row}>
                    <div className={style.dieta}>
                        <div className={style.icones}>
                            <FaDumbbell className={style.icone} />
                        </div>
                        <p>nome do prato</p>
                        <span> numero de kcal</span>
                        <button>ler receita</button>
                    </div>
                </div>

                <div className={style.row}>
                    <div className={style.dieta}>
                        <div className={style.icones}>
                            <FaDumbbell className={style.icone} />
                        </div>
                        <p>nome do prato</p>
                        <span> numero de kcal</span>
                        <button>ler receita</button>                                
                    </div>
                </div>

                <div className={style.row}>
                    <div className={style.dieta}>
                        <div className={style.icones}>
                            <FaDumbbell className={style.icone} />
                        </div>
                        <p>nome do prato</p>
                        <span> numero de kcal</span>
                        <button>ler receita</button>

                    </div>
                </div>

                <div className={style.barra_de_progresso}>
                    <div className={style.progresso_da_barra}></div>
                </div>

            </div>

        </section>


    </Container>
</>
  );
}

export default Dieta;
