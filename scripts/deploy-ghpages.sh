#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
REPO_NAME="${1:-Excercises_practice}"
export BASE_PATH="/${REPO_NAME}/"
npm install
npm run build
npx gh-pages -d dist
echo "Done. Enable GitHub Pages on branch gh-pages."
