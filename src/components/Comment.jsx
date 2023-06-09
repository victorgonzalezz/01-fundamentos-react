import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css'
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikesCount] = useState(0)
  function handleDeleteComment() {
  onDeleteComment(content)
  }
  
  // function handleClickLikes() {
  //   setLikesCount(likeCount + 1);
  // }

  //Padrão + adequado segundo a aula
  function handleClickLikes() {
    setLikesCount((state) => {
      return state + 1
    });
  }


  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/63113447?v=4"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Greici Weinzierl</strong>
              <time title="27 de Abril às 14:02" dateTime="2022-04-11 08:13:33">
                Cerca de uma 1h atrás
              </time>
            </div>
            
            <button
              onMouseDown={handleDeleteComment}
              title="Deletar Comentário"
            >
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleClickLikes}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}