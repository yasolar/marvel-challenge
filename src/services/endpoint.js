import md5 from 'md5'
import { privateKey, publicKey } from './apiKey'

const endpoint = () => {
	let timestamp = new Date().getTime()
	let hash = md5(timestamp + privateKey + publicKey)
	return '&ts=' + timestamp + '&apikey=' + publicKey + '&hash=' + hash
}

export {endpoint}