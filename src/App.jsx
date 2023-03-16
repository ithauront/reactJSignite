import { Header } from "./components/header";
import { Post } from "./components/post";
import { Sidebar } from "./components/sidebar"
import styles from "./App.module.css"
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=417&q=80",
      name: 'Iuri Reis',
      role: 'Web developer'
    },
    content: [
      { type: 'paragraph', content:'Oi tudo bem?',},
      { type: 'paragraph', content: 'Aqui vai estar o conteudo do post da pessoa.',},
      { type: 'paragraph', content:'Esse é o site'},
      { type: 'link', content: 'iuri.com.br'}
       ],
    publishedAt: new Date('2023-03-14 20:00:00')
    
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://images.unsplash.com/photo-1542880941-1abfea46bba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
      name: 'Queise Carvalho',
      role: 'Web developer'
    },
    content: [
      { type: 'paragraph', content:'Oi tudo bem?',},
      { type: 'paragraph', content: 'Eu sou Queise',},
      { type: 'paragraph', content:'Esse é o meu site'},
      { type: 'link', content: 'myafrohair.com.br'}
       ],
    publishedAt: new Date('2023-03-13 20:00:00')
    
  },
]

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
      
      
        <main>
             {posts.map(post => {
              return (
              <Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}

              />              
              )
            
            }) 
              }

      </main>
      
      </div>
      
    </div>
    

  )
}

