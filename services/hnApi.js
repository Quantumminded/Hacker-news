import axios from 'axios';

export const baseURL = 'https://hacker-news.firebaseio.com/v0/';

export const newStoriesURL =`${baseUrl}newstories.json`;
export const storyUrl=`${baseUrl}item/`;

export const getStoryIds = async () => {
    const result = await axios.get(newsStoriesURL).then((data) => data);

    return result;
};