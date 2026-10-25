# Social Media & Anxiety — QAMO 4651 (Simple Regression)

A live, in-class regression demo. Students scan a QR code and enter two
**anonymous** numbers:

- **X** — minutes per day on their favorite social media app
- **Y** — how anxious they think they generally are (1–10)

The instructor dashboard shows the class **scatter plot** at the click of a button,
then **estimates β̂₀ and β̂₁** by OLS (with the formulas worked out using the class's
numbers) and draws the fitted line.

| Page | Who | What |
|---|---|---|
| `index.html` | Students (phones, via QR) | Minutes per day + a 1–10 anxiety picker |
| `instructor.html` | You (projector, passcode **`Scrite1`**) | Open/close form, scatter plot, β̂₀ / β̂₁, PDF + CSV export |

Built from the same template as *Meet the Class* (see `../first-day-survey/TEMPLATE.md`):
same Firebase project, same rules, same anonymous sign-in. Its data is kept separate
by `activity: "socialanxiety"` in `config.js`.

## Setup (≈ 5 minutes — Firebase is already done)

Nothing to change in Firebase: the rules and Anonymous sign-in you set up for
*Meet the Class* already cover this activity.

1. Create a new GitHub repository, e.g. `social-media-anxiety` (public).
2. Upload **all** files from this folder (`index.html`, `instructor.html`, `core.js`,
   `config.js`, `styles.css`, `firestore.rules`, `README.md`).
3. Repo **Settings → Pages → Source:** Deploy from a branch → **main** → **/(root)** → Save.
4. After ~1 minute:
   - Student: `https://YOUR-USERNAME.github.io/social-media-anxiety/`
   - Instructor: `https://YOUR-USERNAME.github.io/social-media-anxiety/instructor.html`
5. Instructor page → **📱 Student link & QR** → **Download QR (PNG)** → put it on your slide.

## Running it in class

1. Open **instructor.html**, enter the passcode, pick **Section 1** or **Section 2**.
2. Click **🟢 Open form for Section X**.
   - **Before class:** you can open it early (e.g. the night before) so students can
     enter their numbers ahead of time.
   - **After class:** leave it open as long as you like; close it with **⏹ Close submissions**.
   - **all days** is ticked by default, so every submission for that section counts
     no matter which day it came in. Untick it and pick a **Class day** to see only one day.
3. **Step 2 — 📊 Show scatter plot.** Dots are jittered slightly (untick to turn off) so
   students who gave identical answers don't hide behind one another.
4. **Step 3 — 📐 Estimate β̂₀ and β̂₁.** Shows n, β̂₀, β̂₁, the fitted equation and the
   OLS formulas, and draws the red OLS line on the scatter plot. No interpretation is
   given — that's for the students.
5. New submissions keep arriving live — the plot and the estimates update by themselves.
6. **📄 Download PDF report** (scatter + line + estimates) for Canvas, or
   **Raw data (.csv)** to open in Excel/R/Stata.

> **Two sections:** switching the Section dropdown hides the plot and estimates again,
> so the second class gets the same "reveal". Open the form for that section.

### Units
Students enter **minutes** (that's what their phone shows); the regression uses
**hours** (minutes ÷ 60) so β̂₁ reads as "change in anxiety per extra hour".
To use minutes instead, set `xUnit: "minutes"` in `config.js`.

### Rehearsing
Click **🧪 Load test data** to fill the dashboard with ~45 fake students (with a
positive slope) and practice the whole flow. Switching sections reloads the real data.
