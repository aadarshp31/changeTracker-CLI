require('colors')
const path = require('path')
const { expect } = require('@jest/globals')
const { compareFiles, compareFolders } = require('../compare')

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

test('should compare two folders', () => {
	const result = compareFolders(
		path.join(__dirname, 'assets', 'folder1'),
		path.join(__dirname, 'assets', 'folder2')
	)
	expect(result.length).toBeGreaterThan(0)
})

test('should track changes between two folders', () => {
	const result = compareFolders(
		path.join(__dirname, 'assets', 'folder1'),
		path.join(__dirname, 'assets', 'folder2')
	)
	expect(result[0].isModified).toBeTruthy()
	expect(result[1].isModified).toBeFalsy()
	expect(result[2].isModified).toBeFalsy()
	expect(result[3].isAdded).toBeTruthy()
})
