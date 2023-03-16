import styles from './comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './avatar'

export function Comment ({content}) {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://source.unsplash.com/random"/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                       <div className={styles.authorAndTime}>
                            <strong>Iuri Reis</strong>
                            <time title='11 de março às 11:26h' dateTime='2023-03-11 11:26:32'>Cerca de 2h atras </time>
 
                       </div>
                       <button title='Delete comment'>
                                <Trash size={24}/>
                            </button>
                    </header>
                    <p>
                       {content}
                    </p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
           </div>
        </div>

    
        
    )

}