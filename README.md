# Beastify Extension

Firefox Extension to communicate to LAN Web Sockets. Made to be used with Media_Remote.

## Install

1. Open **about:debugging > This Firefox > Load Temporary Add On**
2. Navigate to **manifest.json** of this directory

## Files & Folders

1. **background-script.js** : Background script to run the WS Client
1. **popup/** : Popup window 
    1. **choose_beast.css** : popup CSS
    1. **choose_beast.html** : popup page
    1. **choose_beast.js** : interaction js
1. **icons/** : Extension icons

## Notes

1. Use the **Inspect** button next to the beastify app in about:debugging > This Firefox to see the background-script.js and popup console messages