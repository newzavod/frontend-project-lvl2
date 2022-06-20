install:
	npm ci

start:
	gendiff __fixtures__/file1.json __fixtures__/file2.json

lint:
	npx eslint .

publish:
	npm publish --dry-run

test:
	npm test
