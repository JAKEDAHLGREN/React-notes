import React, {useState} from "react"
import Episode from "./components/Episode"
import MediaPlayer from "./components/MediaPlayer"
import "./App.css"


// react app will allways be defined as App (line below)
const App = () => {
  const episodes = ["A New Era of Framework Agnostic Components", "Goodbye Passwords, Hello Passkey", "Awesome Title", "Cool Stuff", "Random Info"]
  // line below is declaring useState, must import at top in {}, we are stating current episode is = episode 1 or index[0]
  const [currentEpisode, setCurrentEpisode] = useState(episode[0])
  // console.log(currentEpisode) tester log
  const triggerNextEpisode = () => {
    let nextEpisode = episodes.indexOf(currentEpisode) + 1
    // console.log(nextEpisode) testing to see if nextEpisode
    setCurrentEpisode(episodes[nextEpisode])
  }

  return (
    <>
     <h1>Compressed.fm Clone</h1>
     <MediaPlayer 
     currentEpisode={currentEpisode}
     triggerNextEpisode={triggerNextEpisode}/>
     <div className="cards">
        {episodes.map((episode, index) => {
          return <Episode title={episode}/>
        })}
     {/* we no longer need this information because of our episode.map function
     <Episode title={episodes[0]}/> 
     <Episode title={episodes[1]}/>
     <Episode title={episodes[2]}/>
     <Episode title={episodes[3]}/> */}
     </div>
    </>
  )
}
//Component call=<Episode /> for your episode file, you can pass in a title, which is called a prop. looks like,<Episode title="A New Era of Framework Agnostic Components"/> 
 // </>
//  Now that props are setup, you can pass in multiple Episode component calls that show up seperately and can have different title values
export default App
