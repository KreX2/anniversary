# Our Story — 1‑Year Anniversary Website

A scrapbook-style, horizontally-scrolling website telling the story of
your first year together. Scroll (or swipe, or use the arrows) to move
through each month, from the day you met to your anniversary.

## Quick start

Open `index.html` in any web browser — that's it, no build step, no
installation. Double-click the file, or drag it into a browser tab.

To put it online, upload the whole folder (keeping the file structure
below) to any static host — GitHub Pages, Netlify, Vercel, or similar
all work great and are free.

## Everything you'll want to edit lives in one place

Open **`script.js`**. Right at the top, under the big comment that says:

```
// ============================================
// EDIT YOUR STORY HERE
// ============================================
```

you'll find four things:

### 1. Your names (`couple`)
```js
const couple = {
  name1: "Alex",
  name2: "Jamie",
  anniversary: "August 27, 2025",
  eyebrow: "Our Story",
  subheading: "One Year Together",
  tagline: "From the day we met to all the little moments that became our favorite memories.",
  beginButtonLabel: "Begin Our Story"
};
```
Change any of these strings — they update the intro screen automatically.

### 2. Your colors (`theme`)
```js
const theme = {
  primary:    "#6B1E2B",
  secondary:  "#A8425A",
  accent:     "#EFB3C4",
  background: "#2E1B1E",
  cream:      "#F8ECDC",
  brown:      "#8B6248",
  honey:      "#E8B95C",
  clay:       "#D98F63"
};
```
Change any hex code and the **whole site** re-colors itself — buttons,
text, backgrounds, decorations. You never need to touch `style.css` to
change colors.

### 3. Your timeline (`timeline`)
This is the array that generates every panel of the story, in order.
Each entry looks like:

```js
{
  month: "Month 01",              // the label shown at the top of the screen
  title: "Our First Month Together",
  description: "A sentence or two — a short paragraph is fine too.",
  caption: "",                    // optional small handwritten note, or "" to skip
  image: "images/month1.jpg",     // or "" to show the cute placeholder
  alt: "Description of the photo for screen readers"
}
```

- **To add a moment:** copy one whole `{ ... }` block, paste it where you
  want it in the list, and edit the values.
- **To remove a moment:** delete its whole `{ ... }` block (and the comma
  after it if it was the last one in the list).
- **To reorder:** just move the blocks up or down — the site always
  renders them top to bottom in array order.
- **To leave a photo out for now:** set `image: ""` — you'll get a soft
  "Our photo goes here ♡" placeholder instead of a broken image.

### 4. Your ending (`ending`)
```js
const ending = {
  eyebrow: "365 Days of Us",
  heading: "Happy 1st Anniversary, Jamie ♡",
  message: "One year down, and I still can't wait to see where the rest of our story takes us.",
  signoff: "— with all my love",
  image: "",
  alt: "Our favorite photo together"
};
```
This is the final full-screen section after the timeline ends.

**You should not need to edit anything below the "RENDERING & LOGIC"
comment in `script.js`, or anything in `style.css`, to update your
content.** Those files make the site work; `couple`, `theme`, `timeline`,
and `ending` are the only parts meant to change often.

## Adding photos

1. Drop your image files into the `images/` folder.
2. Point to them from `script.js` using a relative path, e.g.
   `image: "images/our-trip.jpg"`.
3. Portrait-ish photos (about 4:5, like a polaroid) fit the frames best,
   but any photo will be cropped to fit nicely.

See `images/README.txt` for a couple more tips.

## Navigating the site

- **Mouse wheel / trackpad:** scroll normally — it moves the story
  horizontally.
- **Shift + scroll**, or a trackpad's horizontal swipe, also works.
- **Arrow keys:** left/right move a panel at a time.
- **On-screen arrows:** the ‹ › buttons on either side of the screen.
- **Click and drag:** click anywhere in the story area and drag left/right.
- **Touch:** swipe up/down on mobile, like a normal page.
- **Progress trail:** the small dots at the bottom show where you are in
  the story — click any of them to jump straight there.

## File structure

```
/
├── index.html      → page structure (rarely needs editing)
├── style.css        → visual design (rarely needs editing)
├── script.js         → YOUR STORY lives at the top of this file
├── images/           → put your photos here
│   └── README.txt
└── README.md         → this file
```

## Notes

- Built with plain HTML, CSS, and JavaScript — no frameworks, no build
  step, nothing to install.
- Respects "reduce motion" accessibility settings — animations calm down
  automatically if the visitor has that turned on in their system.
- Fully responsive — works on desktop, tablet, and mobile.
