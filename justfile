serve:
    zola serve

build:
    zola build --output-dir ./docs/

tail:
    npx @tailwindcss/cli -i ./styles/in.css -o ./static/styles/out.css --watch

