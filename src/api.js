import {endpointKey} from './apiKey'

export async function testandoAPI(name, setImg, setName, setDesc) {
    const endpoint = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}${endpointKey}`
    fetch(endpoint)
        .then(response => response.json())
            .then(data => {
                console.log('INFOS DATA: ', data.data.results);
                const names = `${data.data.results[0].name}`
                const images = `${data.data.results[0].thumbnail.path}.${data.data.results[0].thumbnail.extension}`
                const descrs = `${data.data.results[0].description}`
                setImg(images)
                setDesc(descrs)
                setName(names)
            })
        .catch(error => {
            console.error('Ocorreu um erro:', error);
        })
}