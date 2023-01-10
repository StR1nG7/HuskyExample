npx husky-init && npm install

npx husky set .husky/pre-commit "npx eslint src"

For Windows:
node node_modules/husky/lib/bin set .husky/pre-commit "npx eslint src"

npx husky add .husky/pre-push "npx jest src"

For Windows:
node node_modules/husky/lib/bin add .husky/pre-push "npx jest src"
