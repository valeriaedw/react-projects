import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        id:0,
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing:true
    },
    {
        id:1,
        userName: 'pheralb',
        name: 'Pablo H',
        isFollowing:false
    },
    {
        id:2,
        userName: 'PacoHdezs',
        name: 'Paco Hernandez',
        isFollowing:true
    },
    {
        id:3,
        userName: 'TMChein',
        name: 'Tomas',
        isFollowing:false
    }
]


export function App(){

    return(
        <section className="App">
            {
                users.map(({id,userName, name, isFollowing})=>{
                    return(
                        <TwitterFollowCard
                            key={id}
                            userName= {userName}
                            initialIsFollowing = {isFollowing}
                        >
                            
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
        
    )
}