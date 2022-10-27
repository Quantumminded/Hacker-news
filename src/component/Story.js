import Reach, {useState, useEffect} from 'react';
import { getStory } from '../services/hnApi';
import "../style/index.css";
import "../style/card.css";


export const Story = ({ storyId }) => {
    const [story, setStory] = useState({});

    useEffect(()=> {
        getStory(storyId). then(data => data && data.url && setStory(data))
    }, [])

    return story && story.url ? (
    <div>
      <div className="card-main-container">
        <div className="card-top">
          <h2 className="card-title">{story.title}</h2>
          <h3 className="card-author">{story.by}</h3>
        </div>
        <div className="read-more-section">
          <a href={story.url} target="_blank" className="read-more-text">
            read more >>
          </a>
        </div>
      </div>
    </div>      
    ) : null;

  
};