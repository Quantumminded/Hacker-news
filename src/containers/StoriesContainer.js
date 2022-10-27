import React, { useEffect, useState } from "react";
import { getStoryIds } from "../services/hnApi";
import { Story } from "../component/Story";

export const StoriesContainer = () => {

    const [storyIds, setStoryIds] = useState([]);

     useEffect(() => {
        getStoryIds().then((data) => setStoryIds(data));
        // getStory(33313873).then(data => console.log(data));
    }, []);

    return (
      // <p>{JSON.stringify(storyIds)}</p>
      storyIds.map((storyId) => <Story key={storyId} storyId={storyId} />)
    );
}