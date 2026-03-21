// ============================================================
//  EXAMPLE ENTRY — USE THIS AS YOUR REFERENCE
//  Copy the block below and paste it into your
//  journal-entries.js array. Edit whatever you want.
// ============================================================

  {
    id:          "05",              // Entry number shown on the page
    date:        "2026-02-10",      // Date (YYYY-MM-DD)
    title:       "The Second File", // Title shown in handwriting font

    body:        `I wasn't supposed to find it. I know that now.

It was tucked behind the cabinet in storage room [REDACTED-S] — the one
they told me was a maintenance closet. The label on the folder said
[REDACTED-L]. My name was written underneath in pen. Not typed. Pen.

I don't know who put it there. I don't know how long it's been there.
I don't know if I was supposed to find it or if someone wanted me to.

Dr. [REDACTED] walked past the doorway while I was reading it.
He didn't stop. He didn't say anything. But he slowed down.

I took three pages. I don't know why. I just knew I couldn't leave them.`,

    stamp:       "FLAGGED FOR REVIEW",   // Red stamp. Use "" for none.
                                         // Other ideas:
                                         //   "CLASSIFIED"
                                         //   "PENDING DELETION"
                                         //   "UNDER INVESTIGATION"

    marginNote:  "he SAW me. he had to.", // Handwritten sticky note.
                                           // Use "" for none.
                                           // Keep it short — 1 or 2 lines.

    locked:      false,            // true = blurred ACCESS DENIED
                                   // false = visible normally
  },

// ============================================================
//  REDACTION REFERENCE — copy and paste into any body text
// ============================================================
//
//   [REDACTED-S]   →   ████            short  (codes, room numbers)
//   [REDACTED]     →   ████████        medium (names, words)  ← use this most
//   [REDACTED-L]   →   ██████████████  long   (titles, phrases, locations)
//
//  Examples:
//    "I spoke to [REDACTED] about the file."
//    "The door to [REDACTED-S] was open."
//    "The project was codenamed [REDACTED-L]."
//    "Dr. [REDACTED] told me [REDACTED-L] and walked away."
//
// ============================================================
//  STAMP OPTIONS (paste into the stamp field)
// ============================================================
//
//   "FLAGGED FOR REVIEW"
//   "CLASSIFIED"
//   "PENDING DELETION"
//   "UNDER INVESTIGATION"
//   "AUTHORIZED — TIER 3"
//   "DO NOT DISTRIBUTE"
//   "" ← no stamp at all
//
// ============================================================
//  LOCKED ENTRY REMINDER
// ============================================================
//
//  Set locked: true to blur the entry and show ACCESS DENIED.
//  You can still write the full content inside — players can't read it.
//  When you're ready to reveal it, just change true to false.
//
//  Good uses for locked entries:
//   - A future entry you're teasing but haven't "released" yet
//   - Something players have to earn access to (ARG puzzle reward)
//   - An entry that gets "unlocked" after a real-world event
//
// ============================================================
