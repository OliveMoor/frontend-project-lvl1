install:
	npm install

brain-games:
	node bin/brain-games.js

brain-even:
	node games/brain-even

brain-calc:
	node games/brain-calc.js

publish:
	npm publish --dry-run

make lint:
	npx eslint .
