import Endpoint from './endpoint'

export async function GetHeros(name, setInfos, setIsLoading) {
    const endp = Endpoint()
    const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}${endp}`
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log('INFOS DATA: ', data.data.results)
            const infos = data.data.results
            setInfos(infos)
            setIsLoading(false)
        })
        .catch(error => {
            console.error('Ocorreu um erro:', error)
        })
}