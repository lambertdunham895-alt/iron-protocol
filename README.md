[README.md](https://github.com/user-attachments/files/26775903/README.md)
# Iron Protocol

Personal discipline system. Daily schedule, habit tracker, workouts, meals, and weekly reset — built for early shifts.

---

## Getting it on your phone (step-by-step)

You don't need a local dev environment. Everything happens in the browser — same workflow you use for CoachConnect Pro.

### Step 1 — Put it on GitHub

1. Go to https://github.com/new
2. Name the repo `iron-protocol` (or whatever you want)
3. Set it to **Private** (this is personal)
4. Don't check any of the "add README/gitignore" boxes — we already have those
5. Click **Create repository**
6. On the next screen, click **"uploading an existing file"** link
7. Drag every file and folder from this unzipped bundle into the browser — the whole contents (package.json, vite.config.js, index.html, src folder, public folder, etc.)
8. Scroll down, click **Commit changes**

### Step 2 — Deploy to Vercel

1. Go to https://vercel.com/new
2. Click **Import** next to your `iron-protocol` repo
3. Leave all settings as-is (Vercel auto-detects Vite)
4. Click **Deploy**
5. Wait ~60 seconds. Done.

You'll get a URL like `iron-protocol-xyz.vercel.app`.

### Step 3 — Save to your phone's home screen

**iPhone (Safari):**
1. Open the Vercel URL in Safari
2. Tap the **Share** button (square with arrow)
3. Scroll down → tap **Add to Home Screen**
4. Name it "Iron Protocol" → tap **Add**

**Android (Chrome):**
1. Open the Vercel URL in Chrome
2. Tap the **three-dot menu** (top right)
3. Tap **Add to Home screen** (or **Install app**)
4. Confirm

Now it lives as an app icon. Tap to open full-screen — no browser bars.

---

## Making changes later

Same workflow you already know:

1. Describe what you want changed → get updated `App.jsx`
2. Go to GitHub → `src/App.jsx` → click the pencil icon
3. Paste the new version → commit
4. Vercel auto-deploys in ~60 seconds
5. Refresh on your phone

---

## Your data

- Everything is stored locally on your phone (localStorage)
- No login, no account, no backend
- If you clear browser data or uninstall, your streaks/logs reset
- If you want cross-device sync later, we'd add Supabase (you already have it set up for CoachConnect Pro)

---

## Project structure

```
iron-protocol/
├── index.html          # Entry point with mobile meta tags
├── package.json        # Dependencies (React + Vite)
├── vite.config.js      # Build config
├── public/
│   └── icon.svg        # App icon (lightning bolt)
└── src/
    ├── main.jsx        # React bootstrap
    └── App.jsx         # The entire app — edit this file
```

Only file you'll ever edit: `src/App.jsx`.
