# Nexora Digitals

<img src="assets/logo-mark.svg" alt="Nexora Digitals logo mark" width="72">

The website for **Nexora Digitals**, a web design and development studio. We build websites that grow your business.

## What's on the site

- **Hero** with the headline, call-to-action buttons and a browser/phone mockup
- **Services**: Web Design, Development, E-commerce, SEO
- **What every website includes**: mobile-first design, fast loading on mobile data, WhatsApp chat button, Google-ready setup, HTTPS, domain and launch help
- **Process**: four steps from first chat to launch
- **Contact**: both WhatsApp numbers, plus a form that turns the visitor's details into a ready-to-send WhatsApp message
- A floating "Chat with us" WhatsApp button on every screen

## Files

```
index.html          The page
styles.css          All styles (brand colours are at the top as CSS variables)
script.js           Mobile menu, footer year, contact form → WhatsApp
assets/favicon.svg  Browser tab icon
assets/logo-mark.svg  The "N" logo mark
```

It's plain HTML, CSS and JavaScript, so there's nothing to install or build.

## Run it locally

Open `index.html` in your browser. That's it.

## Change the WhatsApp numbers

- **Contact form**: edit `WHATSAPP_NUMBER` at the top of `script.js`
- **Buttons and links**: search `index.html` for `wa.me/` and replace the number

Numbers use the international format with no `+` or spaces, for example `2348132949373`.

## Brand

| Token | Colour |
| --- | --- |
| Navy | `#0B1B3A` |
| Orange | `#EE630A` |
| Paper | `#F4F6FA` |

Fonts: **Sora** (headings), **Instrument Sans** (body), **JetBrains Mono** (labels), all from Google Fonts.

## Put it online with GitHub Pages

1. On GitHub, open the repo's **Settings → Pages**
2. Under **Build and deployment**, choose **Deploy from a branch**
3. Select the `main` branch and the `/ (root)` folder, then **Save**

After a minute or two the site will be live at `https://<your-username>.github.io/nexora-digitals/`.
