/* =====================================================================
   OUR STORY — script.js
   =====================================================================

   HOW THIS FILE IS ORGANIZED
   ---------------------------------------------------------------------
   1. EDIT YOUR STORY HERE   -> everything you'll actually want to touch
   2. RENDERING & LOGIC      -> makes the site work, you shouldn't need
                                 to edit this to update your content

   You should be able to make almost every change you want (names,
   dates, timeline events, text, images, colors) by editing ONLY the
   section below. Nothing else in the file needs to change.
   ===================================================================== */


// ============================================
// EDIT YOUR STORY HERE
// ============================================

// ---- 1. Your names & the headline info on the intro screen ----------
const couple = {
  name1: "Khryz",
  name2: "Juanne",
  anniversary: "August 27, 2025",     // not shown directly, kept here for your reference
  eyebrow: "Story of Us",                // small label above your names
  subheading: "I love you",     // line under your names
  tagline: "From the day we met to all the little moments we shared together until now",
  beginButtonLabel: "Les go"
};

// ---- 2. Theme colors --------------------------------------------------
// Change any hex value below and the ENTIRE site updates automatically —
// buttons, text, backgrounds, decorations, everything reads from here.
const theme = {
  primary:    "#6B1E2B", // deep burgundy   — headings, ending background
  secondary:  "#A8425A", // wine rose       — buttons, active accents
  accent:     "#EFB3C4", // soft blossom    — doodles, captions, hearts
  background: "#2E1B1E", // cocoa brown     — main page background
  cream:      "#F8ECDC", // warm cream      — light text, polaroid paper
  brown:      "#8B6248", // light brown     — bear-inspired decorative touches
  honey:      "#E8B95C", // soft yellow     — stars, active progress marker
  clay:       "#D98F63"  // muted orange    — washi tape, small accents
};

// ---- 3. Your timeline ---------------------------------------------------
// This is the heart of the site. Add, remove, rename, or reorder entries
// freely — the page is built entirely from this array, in order.
//
//   month        -> small label + the big banner at the top of the screen
//   title        -> the large headline for this moment
//   description  -> a sentence or two of story (a few short paragraphs is fine)
//   caption      -> optional small handwritten-style note (leave "" to omit)
//   image        -> path to a photo, e.g. "images/first-meeting.jpg"
//                   leave as "" to show the cute "Our photo goes here ♡" placeholder
//   alt          -> alt text for the photo (for screen readers / accessibility)
//
// To ADD a moment: copy one whole { ... } block and paste it wherever
//                  you want it to appear, then edit the values.
// To REMOVE one:   delete its whole { ... } block (and the comma after it
//                  if it was the last one).
// To REORDER:      just move the blocks up or down in the list.
const timeline = [
  {
    month: "Where It Began",
    title: "Our first meeting",
    description: "We met before we even realized it years before we even knew that each other existed. One random day we were already playing this game together without knowing and as fate would have it we met again playing the same game as if we were always destined to meet mwehehehe.",
    caption: "the very start ♡",
    image: "images/one.jpg",
    alt: ""
  },
  {
    month: "Not Long After",
    title: "What really started it all",
    description: "And of course i remember what really started it all not just us playing a game we both liked but you bravely reaching out to me and I am so so glad that you did <3. I rushed to download it immediately after you asked me hehe.",
    caption: "Mwehehehehe",
    image: "images/two.jpg",
    alt: ""
  },
  {
    month: "Getting Closer",
    title: "Chemistry",
    description: "We mixed pretty much instantly, we found the same things funny, had the same humor (and freakiness heh), and before I even knew it I found myself waking up in the morning excited to talk to you and longing to speak to you when either you or I had to things to do. The more we talked the more I missed you when you were gone :< , and miraculously I noticed you felt the same way hehehe :>, from your messages and voice calls I could feel that you cared for me and wanted to be with me (of course I didn't assume romantically dayun pero i was hoping hehehehe).",
    caption: "Before I knew it my heart was already longing for you",
    image: "images/three.jpg",
    alt: "A memory from when we started getting closer"
  },
  {
    month: "Confession",
    title: "I love you",
    description: "Whenever you I wasn't with you my chest tightened, I never truly knew how love or longing for someone really felt, and to be quite honest it did not go as I planned it to be. I remember there was a lot of us that day we were playing valorant or whatever I cant even remember now hehehehe, one thing I gurantee you is that did not go as I planned it, I was going to wait for the group talking to like die down and I'd somehow make a way to talk to you privately but me and my stupid ahh just had to basically announce it aloud hehe (sorry 🥹). I was very scared youd reject me I was overthinking that maybe youd reject me, but thankfully my longing for you was much stronger than my fears :), I just couldnt stand it anymore I had to tell you how I felt, I dont understand it myself i've never felt that way my entire life.",
    caption: "I was super nervous :>",
    image: "images/four.jpg",
    alt: ""
  },
  {
    month: "Day One",
    title: "The Day We Became Official",
    description: "That night I couldn't even process it fully but the morning after I felt like my heart jumped out of my chest. I was so happy I think that was the happiest ive ever felt ever since ever mwehehehehe",
    caption: "Happiest day of my life at the time ",
    image: "images/five.gif",
    alt: "The day we became a couple"
  },
  {
    month: "Our First Meeting",
    title: "Here I come Cebu",
    description: "It was late night, I got a call from my cousin telling me to come to cebu and celebrate, I instantly thought of the oppurunity to finally meet you in person :>, so me and uncle instantly went to go get the bus next morning. Couldnt help but mention to my cousin multiple times I wanted to go to the city, and eventually on the third or fourth day there I was finally able to go and meet you, and you were even more beautiful than I expected, any and all images I saw could not do justice to how wonderfully amazing you truly were ♡♡♡. I was practically drooling, and when i finally got the chance to kiss you my brain js fried I was like a little kid again having the best time of my life ♡",
    caption: "I was so happy, happiest i've ever been at the time hehe :>",  
    image: "images/six.jpg",
    alt: ""
  },
  {
    month: "Your First Visit",
    title: "Hotel Essencia",
    description: "I was anticipating your visit so much, I missed you so much and felt like the time we spent in Cebu was definately not enough (one day ra huhuhu 🥹) so I was looking forward to spending more time with you, although we spent it mostly in bed together hehehe, I couldn't be more happier since I could spend my time with you 😊",
    caption: "Please come again :)",
    image: "images/seven.jpg",
    alt: ""
  },
  {
    month: "Cebu Pt.2",
    title: "My 2nd Visit",
    description: "I was able to save up moneys from cousin and balon and instantly headed for cebu, I could not wait to see you again 🥹, I wanted to be with you so much (and still do all the time). It was an amazing experience going around to malls, and restaurants, and doing anything with you so great I could feel my heart beating out of my chest at how happy I was :>, I'd like for us to go explore and adventure again maybe not just in the city but provinces pd hehe puhon when we gets moneys ♡",
    caption: "I count this as first proper visit 🥹 (also first proper sex? 👀 hehehe)",
    image: "images/eight.jpg",
    alt: ""
  },
  {
    month: "Your Birhtday",
    title: "Cebu Pt.3",
    description: "When June came around I really wanted to do something special for your birthday, so I planned another trip to cebu and even bought you a gift but mistakenly set the delivery address to mine instead (🥹😔 me sorry huhuhu), I love spending time with you, It made me feel so glad that you could come home to me after school and rest in my arms as I tried my best to take care of you (I hope I did a good job 🥹)",
    caption: "I hope you liked your bday gift 🥹",
    image: "images/nine.jpg",
    alt: ""
  },
  {
    month: "Dumaguete Pt.2",
    title: "Your 2nd Visit",
    description: "You came to Dumaguete again and I was so happy that you could stay at my house this time hehehe :D (even if dili the whole stay heheh what can we do strict parents D: ) Although some things didnt go as planned  and some things had happened, I was still so very happy that you were able to come and we were able to spend so much more time together :> . Naka laag2 najd ta gamay sa duma together ♡ many more to come pls 😊 ",
    caption: "My house dis time hehe",
    image: "images/ten.jpg",
    alt: ""
  },
  {
    month: "Month 12 · One Year",
    title: "One Year Together",
    description: "Im very grateful that youre my partner Juanne, Im grateful that you chose me and allowed me to choose you, and I promise you I will choose you every single day. We've had our ups and downs together my love and Im so grateful that you work through them with me, I am grateful we can sit down and talk to eachother and be frank about our problems, wants and needs. I promise you I am steadily making myself better day by day to be the best version of myself for you and for me :>. Im so grateful for your kindness and acceptance of me my love, parts of myself that I didn't accept you showed them love and made me think more of myself, I hope and pray that I do that for you, I strive to do that for you as you've done for me 😊",
    caption: "365 days have passed",
    image: "images/eleven.jpg",
    alt: ""
  }
];

// ---- 4. The ending / anniversary section -------------------------------
const ending = {
  eyebrow: "365 Days of Us",
  heading: "Happy 1st Anniversary, Juanne ♡",
  message: "One year down, and forever more to go mwehehehehe",
  signoff: "— with all my heat and soul I love you honey🖤",
  image: "images/twelve.jpg", // e.g. "images/anniversary.jpg" — leave "" for the placeholder frame
  alt: ""
};


// ============================================
// RENDERING & LOGIC
// You shouldn't need to edit anything below
// this line to update your story.
// ============================================

(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- Theme ---------------- */
  function applyTheme() {
    const root = document.documentElement;
    Object.keys(theme).forEach((key) => {
      root.style.setProperty(`--${key}`, theme[key]);
    });
  }

  /* ---------------- Intro ---------------- */
  function renderIntro() {
    document.getElementById("introEyebrow").textContent = couple.eyebrow;
    document.getElementById("introName1").textContent = couple.name1;
    document.getElementById("introName2").textContent = couple.name2;
    document.getElementById("introSub").textContent = couple.subheading;
    document.getElementById("introTagline").textContent = couple.tagline;
    document.getElementById("beginBtn").querySelector("span").textContent = couple.beginButtonLabel;
    document.title = `${couple.name1} & ${couple.name2} — Our Story`;
  }

  /* ---------------- Photo box (shared by panels + ending) ---------------- */
  function buildPhotoBox(imagePath, altText, { large = false, altTape = false } = {}) {
    const wrapper = document.createElement("div");
    wrapper.className = "polaroid" + (large ? " polaroid--large" : "");

    const tape = document.createElement("div");
    tape.className = "polaroid-tape" + (altTape ? " tape-alt" : "");
    wrapper.appendChild(tape);

    const imageBox = document.createElement("div");
    imageBox.className = "polaroid-image";

    function showPlaceholder() {
      imageBox.innerHTML = "";
      const span = document.createElement("span");
      span.className = "placeholder-text";
      span.textContent = "Our photo goes here ♡";
      imageBox.appendChild(span);
    }

    if (imagePath) {
      const img = document.createElement("img");
      img.src = imagePath;
      img.alt = altText || "";
      img.loading = "lazy";
      img.onerror = showPlaceholder;
      imageBox.appendChild(img);
    } else {
      showPlaceholder();
    }

    wrapper.appendChild(imageBox);
    return wrapper;
  }

  /* ---------------- Timeline panels ---------------- */
  const tiltPattern = ["-3deg", "2deg", "-2deg", "3deg"];

  function renderTimeline() {
    const track = document.getElementById("storyTrack");
    const trail = document.getElementById("progressTrail");
    const frag = document.createDocumentFragment();
    const trailFrag = document.createDocumentFragment();

    timeline.forEach((event, i) => {
      const panel = document.createElement("article");
      panel.className = "panel";
      panel.setAttribute("role", "listitem");
      panel.style.setProperty("--tilt", tiltPattern[i % tiltPattern.length]);

      const text = document.createElement("div");
      text.className = "panel-text";

      const ghost = document.createElement("span");
      ghost.className = "panel-ghost-number";
      ghost.setAttribute("aria-hidden", "true");
      ghost.textContent = String(i + 1).padStart(2, "0");
      text.appendChild(ghost);

      const month = document.createElement("span");
      month.className = "panel-month";
      month.textContent = event.month;
      text.appendChild(month);

      const title = document.createElement("h2");
      title.className = "panel-title";
      title.textContent = event.title;
      text.appendChild(title);

      const desc = document.createElement("p");
      desc.className = "panel-description";
      desc.textContent = event.description;
      text.appendChild(desc);

      if (event.caption) {
        const caption = document.createElement("p");
        caption.className = "panel-caption";
        caption.textContent = event.caption;
        text.appendChild(caption);
      }

      panel.appendChild(text);

      const photoWrap = document.createElement("div");
      photoWrap.className = "panel-photo";
      photoWrap.appendChild(buildPhotoBox(event.image, event.alt || event.title, { altTape: i % 2 === 1 }));
      panel.appendChild(photoWrap);

      frag.appendChild(panel);

      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "trail-dot";
      dot.setAttribute("aria-label", `Go to: ${event.title}`);
      dot.dataset.index = String(i);
      trailFrag.appendChild(dot);
    });

    track.appendChild(frag);
    trail.appendChild(trailFrag);

    document.getElementById("storyScroller").style.setProperty("--panel-count", String(timeline.length));
  }

  /* ---------------- Ending ---------------- */
  function renderEnding() {
    document.getElementById("endingEyebrow").textContent = ending.eyebrow;
    document.getElementById("endingHeading").textContent = ending.heading;
    document.getElementById("endingMessage").textContent = ending.message;
    document.getElementById("endingSignoff").textContent = ending.signoff;

    const photoSlot = document.getElementById("endingPhoto");
    photoSlot.innerHTML = "";
    photoSlot.appendChild(buildPhotoBox(ending.image, ending.alt, { large: true }));

    if (!prefersReducedMotion) {
      const heartsHost = document.getElementById("endingHearts");
      const heartCount = 10;
      for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement("span");
        heart.className = "floating-heart";
        heart.setAttribute("aria-hidden", "true");
        heart.textContent = "♡";
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.fontSize = `${1 + Math.random() * 1.4}rem`;
        heart.style.setProperty("--drift", `${(Math.random() - 0.5) * 120}px`);
        heart.style.animationDuration = `${9 + Math.random() * 7}s`;
        heart.style.animationDelay = `${Math.random() * 10}s`;
        heartsHost.appendChild(heart);
      }
    }
  }

  /* ---------------- Horizontal story navigation ---------------- */
  function initStoryNavigation() {
    const scroller = document.getElementById("storyScroller");
    const sticky = document.getElementById("storySticky");
    const track = document.getElementById("storyTrack");
    const monthBanner = document.getElementById("monthBanner");
    const counter = document.getElementById("storyCounter");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const dots = Array.from(document.querySelectorAll(".trail-dot"));
    const panels = Array.from(document.querySelectorAll(".panel"));
    const panelCount = timeline.length;

    let bounds = { top: 0, total: 1 };
    let targetTranslate = 0;
    let currentTranslate = 0;
    let activeIndex = 0;

    function recalcBounds() {
      const rect = scroller.getBoundingClientRect();
      const top = window.scrollY + rect.top;
      const total = Math.max(scroller.offsetHeight - window.innerHeight, 1);
      bounds = { top, total };
    }

    function updateUI(progress) {
      const newIndex = Math.min(panelCount - 1, Math.round(progress * (panelCount - 1)));

      monthBanner.textContent = timeline[newIndex].month;
      counter.textContent = `${String(newIndex + 1).padStart(2, "0")} / ${String(panelCount).padStart(2, "0")}`;
      prevBtn.disabled = progress <= 0;
      nextBtn.disabled = progress >= 1;

      if (newIndex !== activeIndex || panels[activeIndex] === undefined) {
        panels.forEach((panel, i) => {
          panel.classList.toggle("is-active", i === newIndex);
          panel.classList.toggle("is-adjacent", Math.abs(i - newIndex) === 1);
        });
        dots.forEach((dot, i) => {
          dot.classList.toggle("is-current", i === newIndex);
          dot.classList.toggle("is-past", i < newIndex);
        });
        activeIndex = newIndex;
      }
    }

    function onScroll() {
      const progress = Math.min(1, Math.max(0, (window.scrollY - bounds.top) / bounds.total));
      targetTranslate = -progress * (panelCount - 1) * window.innerWidth;
      updateUI(progress);
    }

    function loop() {
      const ease = prefersReducedMotion ? 1 : 0.14;
      currentTranslate += (targetTranslate - currentTranslate) * ease;
      if (Math.abs(currentTranslate - targetTranslate) < 0.5) currentTranslate = targetTranslate;
      track.style.transform = `translate3d(${currentTranslate}px, 0, 0)`;
      requestAnimationFrame(loop);
    }

    function goTo(index) {
      const clamped = Math.min(panelCount - 1, Math.max(0, index));
      const targetY = bounds.top + (clamped / (panelCount - 1)) * bounds.total;
      window.scrollTo({ top: targetY, behavior: prefersReducedMotion ? "auto" : "smooth" });
    }

    function step(delta) {
      window.scrollBy({ top: delta, behavior: prefersReducedMotion ? "auto" : "smooth" });
    }

    // Initial measurement + listeners
    recalcBounds();
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", () => {
      recalcBounds();
      onScroll();
    });

    requestAnimationFrame(loop);

    // Buttons
    prevBtn.addEventListener("click", () => step(-window.innerHeight));
    nextBtn.addEventListener("click", () => step(window.innerHeight));

    // Progress dots
    dots.forEach((dot) => {
      dot.addEventListener("click", () => goTo(Number(dot.dataset.index)));
    });

    // Arrow keys
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        step(window.innerHeight);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        step(-window.innerHeight);
      }
    });

    // Shift+wheel / trackpad horizontal gestures: redirect to vertical scroll,
    // which the sticky trick then turns back into horizontal motion.
    scroller.addEventListener(
      "wheel",
      (e) => {
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 2) {
          e.preventDefault();
          window.scrollBy(0, e.deltaX);
        }
      },
      { passive: false }
    );

    // Click-and-drag navigation (desktop)
    let dragging = false;
    let dragStartX = 0;
    let dragStartScrollY = 0;

    sticky.addEventListener("pointerdown", (e) => {
      if (e.target.closest(".nav-arrow, .progress-trail")) return;
      if (e.pointerType === "touch") return; // let native touch scrolling handle mobile
      dragging = true;
      dragStartX = e.clientX;
      dragStartScrollY = window.scrollY;
      sticky.classList.add("is-dragging");
      sticky.setPointerCapture(e.pointerId);
    });
    sticky.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      const dx = e.clientX - dragStartX;
      window.scrollTo(0, dragStartScrollY - dx * 2.2);
    });
    ["pointerup", "pointercancel", "pointerleave"].forEach((evt) => {
      sticky.addEventListener(evt, () => {
        dragging = false;
        sticky.classList.remove("is-dragging");
      });
    });

    // Begin Our Story button
    document.getElementById("beginBtn").addEventListener("click", () => {
      const rect = scroller.getBoundingClientRect();
      const top = window.scrollY + rect.top;
      window.scrollTo({ top, behavior: prefersReducedMotion ? "auto" : "smooth" });
    });
  }

  /* ---------------- Boot ---------------- */
  function init() {
    applyTheme();
    renderIntro();
    renderTimeline();
    renderEnding();
    initStoryNavigation();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
