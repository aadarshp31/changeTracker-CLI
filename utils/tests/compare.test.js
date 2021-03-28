require('colors')
const path = require('path')
const { expect } = require('@jest/globals')
const { compareFiles } = require('../compare')

test('should track changes in two files', () => {
	const { differences, isModified } = compareFiles(
		path.join(__dirname, 'assets', 'folder1', 'file1.json'),
		path.join(__dirname, 'assets', 'folder2', 'file1.json'),
		'.json'
	)
	expect(isModified).toBeTruthy()
})

test('should track no-changes in two files', () => {
	const { differences, isModified } = compareFiles(
		path.join(__dirname, 'assets', 'folder1', 'file2.xml'),
		path.join(__dirname, 'assets', 'folder2', 'file2.xml'),
		'.json'
	)
	expect(isModified).toBeFalsy()
})
