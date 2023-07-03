import md5 from 'md5'

export default function Endpoint() {
	let timestamp = new Date().getTime()
	let hash = md5(timestamp + process.env.REACT_APP_PRIVATE_KEY + process.env.REACT_APP_PUBLIC_KEY)
	const endpoint = '&ts=' + timestamp + '&apikey=' + process.env.REACT_APP_PUBLIC_KEY + '&hash=' + hash
	return endpoint
}