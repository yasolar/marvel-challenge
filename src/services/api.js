import { endpointKey } from './apiKey'

export async function GetHeros(name, setInfos) {
    const endpoint = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}${endpointKey}`
    fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            console.log('INFOS DATA: ', data.data.results);
            const infos = data.data.results
            setInfos(infos)
        })
        .catch(error => {
            console.error('Ocorreu um erro:', error);
        })
}