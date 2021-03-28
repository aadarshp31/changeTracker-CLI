require('colors')

if (!process.argv[2] || !process.argv[3]) {
	console.log('Error: Both folder paths are required'.red)
	process.exit(1)
}
