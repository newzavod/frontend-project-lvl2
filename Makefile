install:
	npm ci

start:
	gendiff file1.json file2.json

start1:
	gendiff file1.yml file2.yml

lint:
	npx eslint .

publish:
	npm publish --dry-run

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

test-watch:
	npm test -- --watch
