import {endpointKey} from './apiKey'

export async function testandoAPI(setImg, setName, setDesc) {
    const endpoint = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=Spider-Man%20(Peter%20Parker)${endpointKey}`
    fetch(endpoint)
        .then(response => response.json())
            .then(data => {
                console.log('INFOS DATA: ', data.data.results);
                const name = `${data.data.results[0].name}`
                const image = `${data.data.results[0].thumbnail.path}.${data.data.results[0].thumbnail.extension}`
                const descr = `${data.data.results[0].description}`
                setImg(image)
                setDesc(descr)
                setName(name)
            })
        .catch(error => {
            console.error('Ocorreu um erro:', error);
        })
}