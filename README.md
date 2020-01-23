# CSS url() linter

Try and lint `url()` paths in CSS files.

## USAGE

There are three ways to use this questionable tool:

1. Environment variables:

    ```sh
    CSS_URL=https://monitor.firefox.com/dist/app.min.css PUBLIC_DIR=./public npx pdehaan/css-url-linter
    ```

2. CLI arguments:

    ```sh
    npx pdehaan/css-url-linter --css-url=https://monitor.firefox.com/dist/app.min.css --public-dir=./public
    ```

3. Config file:

    Save the following file as "monitor.json" in the root directory 
    ```json
    {
      "cssUrl": "https://monitor.firefox.com/dist/app.min.css",
      "publicDir": "./public"
    }
    ```

    ```sh
    npx pdehaan/css-url-linter --env-path=./monitor.json
    ```
