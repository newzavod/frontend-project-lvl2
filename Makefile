install:
	npm ci

start:
	gendiff file1.json file2.json

lint:
	npx eslint .

publish:
	npm publish --dry-run

test:
	npm test
