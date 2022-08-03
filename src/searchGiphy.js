export default function searchGiphy(query) {
    let apiKey = "h1ps6bEK0xuXgKgxlokNMiA6qykkLnLX";
    let url = "https://api.giphy.com/v1/gifs/search?api_key="+apiKey+"&limit=1&q=";
    return fetch(url+query);
}