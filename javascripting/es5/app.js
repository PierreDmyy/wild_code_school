process.stdin.resume()
process.stdin.setEncoding('utf8')

console.log('How old are you ? ')
process.stdin.on('data', (Number) => {
	if ( Number>0 && Number<99 )
console.log(2018 - Number)
process.exit()
})
