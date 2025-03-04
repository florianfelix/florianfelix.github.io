default:
    bun run dev

build:
    bun run prod

publish: build
    git add . && git commit -m "publish" && git push
