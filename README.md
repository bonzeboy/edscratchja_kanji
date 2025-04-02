# edscratchja_kanji
Browser plugin for Edison EdScratch V3 with Japanese Kanji localization.

- [Edison EdScratch V3](https://www.edscratchapp.com/v3/)

## How does it work?
`block_rules.json` replaces two JavaScript files downloaded to the browser as part of the Edison EdScratch application with their translated copies. This translates categories, blocks, and warning/error messages into Japanese.

![Blocks navigation](./readme_images/readme_menu.png)

![Blocks](./readme_images/readme_blocks.png)

![Errors and warnings](./readme_images/readme_errors.png)

## How to create your own Edison EdScratch translation plugin
To translate Edison EdScratch into your language:
1. Download the following original JavaScript files:
   - https://www.edscratchapp.com/v3/msg/messages.js
   - https://www.edscratchapp.com/v3/blocks_compressed_vertical.js
2. Search for and translate each piece of text in [Edison EdScratch V3](https://www.edscratchapp.com/v3/) from the `messages.js` and `blocks_compressed_vertical.js` files. The text content is primarily defined in `messages.js`, while `blocks_compressed_vertical.js` handles display methods. In this plugin, the translated files are stored in the v3 directory.
3. Save all translated JavaScript files, open the `block_rules.json` file, and replace the `extensionPath` properties in all rules with the paths to your translated files.
4. Open the `manifest.json` file, update the plugin `name`, `version`, and `description`, and change the `resources` in the `web_accessible_resources` section to match the paths of your translated JavaScript files.
5. Create your own tile and icon images.
