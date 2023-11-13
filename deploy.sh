#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'Deployment'
git remote add origin git@github.com:Artem-Martiyanov/event_list.git
git push -f origin master:gh-pages

cd -