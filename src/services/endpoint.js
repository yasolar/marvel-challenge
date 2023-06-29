import md5 from 'md5'
import { privateKey, publicKey } from './apiKey'

export default function Endpoint() {
	let timestamp = new Date().getTime()
	let hash = md5(timestamp + privateKey + publicKey)
	const endpoint = '&ts=' + timestamp + '&apikey=' + publicKey + '&hash=' + hash
	return endpoint
}