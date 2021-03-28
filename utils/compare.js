const diff = require('diff')
const fs = require('fs')
const { result } = require('lodash')

const compareFiles = (filePath1, filePath2, extName) => {
	let isModified = false
	let differences = ''
	let changes = ''

	const file1 = fs.readFileSync(filePath1, {
		encoding: 'utf-8',
	})
	const file2 = fs.readFileSync(filePath2, {
		encoding: 'utf-8',
	})

	switch (extName) {
		case '.json':
			changes = diff.diffJson(file1, file2)
			break
		case '.txt':
			changes = diff.diffChars(file1, file2)
			break

		default:
			changes = diff.diffLines(file1, file2)
			break
	}

	changes.forEach(part => {
		// green for additions, red for deletions
		// grey for common parts
		let color = ''
		if (part.added) {
			color += 'green'
			isModified = true
		} else if (part.removed) {
			color += 'red'
			isModified = true
		} else {
			color += 'grey'
		}
		differences += part.value[color]
	})

	return { differences, isModified }
}

const compareFolders = (folderPath1, folderPath2) => {
	let result = []

	return result
}

module.exports = { compareFiles, compareFolders }
