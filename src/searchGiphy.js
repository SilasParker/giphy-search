export default function searchGiphy(query, limit, rating, lang) {
    let apiKey = "h1ps6bEK0xuXgKgxlokNMiA6qykkLnLX";
    //calls api with all additional parameters
    let url = "https://api.giphy.com/v1/gifs/search?api_key="+apiKey+"&limit="+limit+"&q="+query+"&rating="+rating+"&lang="+lang;
    return fetch(url);
}