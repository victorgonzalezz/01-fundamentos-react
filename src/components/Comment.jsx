import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://avatars.githubusercontent.com/u/63113447?v=4" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Greici Weinzierl</strong>
              <time
                title="27 de Abril às 14:02"
                dateTime="2022-04-11 08:13:33">
                Cerca de uma 1h atrás
              </time>
            </div>

            <button title='Deletar Comentário'>
              <Trash size={24}/>
            </button>
          </header>

          <p>Muito bom Greici, parabéns !! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
          Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}