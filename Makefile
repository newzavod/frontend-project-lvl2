install:
	npm ci

start5:
	gendiff --format json file1.json file2.json

start4:
	gendiff --format json file1.yml file2.yml

start3:
	gendiff --format json file1.yaml file2.yaml

start2:
	gendiff --format plain file1.json file2.json

start1:
	gendiff file1.json file2.json

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
