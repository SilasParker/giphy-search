export default function searchGiphy(query, limit, rating, lang) {
    console.log(lang);
    let apiKey = "h1ps6bEK0xuXgKgxlokNMiA6qykkLnLX";
    let url = "https://api.giphy.com/v1/gifs/search?api_key="+apiKey+"&limit="+limit+"&q="+query+"&rating="+rating+"&lang="+lang;
    return fetch(url);
}