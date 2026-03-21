// ============================================================
//  GSC — ALEX'S JOURNAL ENTRIES
//  Edit this file to add, remove, or change journal entries.
// ============================================================
//
//  FULL ENTRY TEMPLATE:
//
//  {
//    id:          "01",              // Entry number shown on page
//    date:        "2026-01-09",      // Date (YYYY-MM-DD)
//    title:       "Your Title",      // Shown in handwriting font
//    body:        `Your text here.   // Use \n\n for paragraph breaks
//
// Second paragraph here.`,
//    tags:        ["work", "anomaly"],  // Optional. Used for tag filtering.
//                                       // Use [] for no tags.
//    stamp:       "",                // Optional red stamp. E.g. "FLAGGED FOR REVIEW"
//    marginNote:  "",                // Optional green margin scribble
//    locked:      false,             // true = blurred ACCESS DENIED
//  },
//
// ── REDACTION TOKENS (use anywhere in body or title) ────────
//
//   [REDACTED-S]   →  ████             short  (codes, room numbers)
//   [REDACTED]     →  ████████         medium (names)       ← use most
//   [REDACTED-L]   →  ██████████████   long   (phrases, locations)
//
// ── STAMP OPTIONS ───────────────────────────────────────────
//
//   "FLAGGED FOR REVIEW"  /  "CLASSIFIED"  /  "PENDING DELETION"
//   "UNDER INVESTIGATION" /  "DO NOT DISTRIBUTE"  /  "" (none)
//
// ── TAG IDEAS ───────────────────────────────────────────────
//
//   "anomaly"  "personnel"  "incident"  "personal"
//   "flagged"  "classified" "field"     "research"
//
// ============================================================

const JOURNAL_ENTRIES = [

  {
    id:          "01",
    date:        "2026-01-09",
    title:       "First Day",
    tags:        ["personal"],
    body:        `I didn't know organizations like GSC existed. The building doesn't have a sign outside.
They gave me a badge with a number on it — no name. Just a number. I asked why.
The woman at the desk looked at me like I'd said something dangerous.

They told me not to ask questions. I'm going to try my best. I really am.
But I've never been good at that.`,
    stamp:       "",
    marginNote:  "",
    locked:      false,
  },

  {
    id:          "02",
    date:        "2026-01-14",
    title:       "The File",
    tags:        ["research", "anomaly"],
    body:        `They assigned me to review a biological anomaly discovered decades ago.
The file was incomplete. Not like pages were missing — it felt more like the file
had been written around something. Like someone had removed the middle
and stitched the edges back together.

I flagged it to my supervisor, Dr. [REDACTED]. He said that was normal.
He didn't look at me when he said it.`,
    stamp:       "",
    marginNote:  "why was it incomplete??",
    locked:      false,
  },

  {
    id:          "03",
    date:        "2026-01-22",
    title:       "I Heard Something",
    tags:        ["personal", "incident"],
    body:        `I stayed late tonight. Most of the floor was empty.
The lights in the east corridor were off — they're never off.

I heard two people arguing behind a door marked [REDACTED-S].
I couldn't make out words. Just tone. One of them was scared.
The other one was not.

I went home and couldn't sleep. I keep thinking about that file.`,
    stamp:       "FLAGGED FOR REVIEW",
    marginNote:  "",
    locked:      false,
  },

  {
    id:          "04",
    date:        "2026-02-03",
    title:       "[REDACTED]",
    tags:        ["classified"],
    body:        `They called me into a room I had never seen before.
There were three people I didn't recognize. One of them knew my mother's name.
I don't know how. I've never put that in any form.

They asked me what I'd seen. I told them nothing. They smiled.
That was worse than if they hadn't.`,
    stamp:       "",
    marginNote:  "",
    locked:      true,
  },

  // ── ADD YOUR NEW ENTRIES BELOW THIS LINE ───────────────────
  //
  // {
  //   id:          "05",
  //   date:        "2026-MM-DD",
  //   title:       "Your Title",
  //   tags:        [],
  //   body:        `Your writing here.`,
  //   stamp:       "",
  //   marginNote:  "",
  //   locked:      false,
  // },

];
