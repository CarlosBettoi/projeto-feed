import { ThumbsUp, Trash, TrashSimple } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

interface CommentProps {
  content: string;
  onDeleteComment: (comment:string) => void;
}


export function Comment({content, onDeleteComment}: CommentProps) {
  
  const [likeCount, setLikeCount] = useState(0);
  
  
  function handleDeleteComment () {
      onDeleteComment(content)
      
    }

  function handleLikeComment () {
      setLikeCount((state) => {
        return state + 1
      });
       
  }

  return (
        <div className={styles.comment}>

            <Avatar 
            hasBorder={false}  
            src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg&_gl=1*6yybio*_ga*OTYxOTc4MTM2LjE2NjgwMzIyNDc.*_ga_8JE65Q40S6*MTY2ODA4NDQ3MS4yLjEuMTY2ODA4NDUzOS4wLjAuMA.." 
            alt=""
            />

            <div className={styles.commentBox}>
              <div className={styles.commentContent}>
                
                <header>

                  <div className={styles.authorAndTime}>

                    <strong>White Cat</strong>
                    <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
                  </div>

                  <button onClick={handleDeleteComment} title="Deletar comentário">

                    <Trash size={24}/>
                  </button>


                </header>

                <p>{content}</p>
              </div>

            

              <footer>
                <button onClick={handleLikeComment}>
                  <ThumbsUp/>
                  Aplaudir <span>{likeCount}</span>
                  
                </button>

              </footer>
            </div>

        </div>
    )

}