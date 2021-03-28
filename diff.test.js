const { test, expect } = require('@jest/globals')
const { exec } = require('child_process')

test('should print changes b/w two folders', () => {
	let result = ''
	exec('node diff sample/folder1 sample/folder2', (error, stdout, stderr) => {
		if (error) {
			console.log(`error: ${error.message}`)
			return
		}
		if (stderr) {
			console.log(`stderr: ${stderr}`)
			return
		}
		expect(stdout.length).toBeGreaterThan(0)
	})
})
