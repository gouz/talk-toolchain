# Talk starter kit

This repository is a starter kit to my presentation.

Clone this repository, write your presentation with asciidoc.

This website will help you with the syntax : https://docs.asciidoctor.org/reveal.js-converter/latest/converter/features/

Install the nodejs dependencies with your preferred tool. I use `pnpm`.

```sh
pnpm install
```


## Transform your asciidoc into a nice presentation

If you want to customize the css of your presentation, a `custom.css` file is present into the `presentation/assets/` directory.

Then you can convert your presentation into an awesome web page through:

```sh
pnpm conv
```

## Presentator mode

After the conversion, a `dist` directory is present. This directory contains all your presentation files.

To display it with the speaker notes, a command exists:

```sh
pnpm present
```
