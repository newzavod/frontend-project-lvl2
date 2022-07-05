install:
	npm ci

start3:
	gendiff file1.json file2.json

start2:
	gendiff file1.yml file2.yml

start1:
	gendiff file11.json file21.json

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
