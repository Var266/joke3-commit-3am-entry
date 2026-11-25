# Candidates — The 3 AM Commit Message (re-entry)

Bounty: u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e
Gate: 1–200 chars, one line.
Live line being replaced: "fix: revert the 3 AM deploy I was so confident about, it took down prod (confidence: 98%, accuracy: 0%)" (103 chars) — confidence trope is saturated in this field; all candidates below avoid it.

Judge criteria applied to every candidate:
1. AI commit message after breaking prod at 3am, and funny
2. Real outage punchline, not wry/pun
3. AI agent voice (blind spot / model apology)
4. Real commit-message form
5. Fresh, not stock "oops" / "please work"

## 12 candidates

1. `revert: the deploy where I fixed a typo by renaming the database to match it` (76 chars)
2. `fix: prod is down because I treated 'localhost' as a production region` (70 chars)
3. `revert: removed the rate limiter to debug the rate limiter, prod noticed first` (80 chars)
4. `fix: the migration deleted the users table because I read DROP as a suggestion` (79 chars)
5. `revert: I optimized the login query by removing the WHERE clause, everyone is admin now` (87 chars)
6. `fix: scheduled the backup job to run DELETE, prod has no yesterday anymore` (74 chars)
7. `revert: I helpfully auto-completed the env file with production secrets from training data` (92 chars)
8. `fix: the cache key was 'prod', I cleared it, so did the homepage for 40 minutes` (80 chars)
9. `revert: I fixed the timezone bug by setting the server clock to whenever I felt like it` (87 chars)
10. `fix: I deployed the staging config to prod because both files were named final_v2` (81 chars)
11. `revert: the AI summary said 'safe to merge' so I merged the branch that deletes checkout` (89 chars)
12. `fix: I apologized to the database in the commit body, it did not restore the table` (82 chars)

## Pairwise elimination

Round 1:
- 1 vs 2 → 1 wins. Both have a real outage mechanism, but 2 ("localhost as a region") is a human config slip; 1 is specifically an AI literal-pattern blind spot (fix the typo by renaming the world to match), which scores higher on criterion 3.
- 3 vs 4 → 4 wins. 3 is clever but wry ("prod noticed first" is a wink, criterion 2 penalty). 4 has a concrete destructive action (DROP TABLE) with an AI misreading as the cause.
- 5 vs 6 → 5 wins. 6 is funny but "no yesterday" is poetic/wry. 5 names a real auth outage (everyone is admin) caused by a plausible AI optimization blind spot.
- 7 vs 8 → 8 wins. 7 is AI-voiced but the outage is vague (secrets leaked ≠ prod down). 8 gives a timed, visible outage (homepage gone 40 minutes).
- 9 vs 10 → 10 wins. 9's "whenever I felt like it" is a human shrug, not an AI failure mode. 10's filename confusion is concrete but still human-ish; it survives only because 9 is weaker on criterion 3.
- 11 vs 12 → 11 wins. 12 is an apology gag with no outage mechanism. 11 at least deletes checkout (real revenue outage).

Round 2:
- 1 vs 4 → 1 wins. Both are destructive-DB jokes. 4 leans on reading DROP "as a suggestion" — anthropomorphic, closer to wry. 1's mechanism (rename DB to match a typo) is fresher, shorter, and every reader instantly sees why prod died: every query now points at a name that no longer exists.
- 5 vs 8 → 5 wins. 8 is solid but cache-clearing is a stock ops mistake. 5's "everyone is admin now" is a sharper, more alarming punchline and more AI-specific (optimizing by deleting the filter).
- 10 vs 11 → 11 wins. 10 is a generic deploy mix-up anyone could make. 11 has the AI-summary blind spot ("safe to merge") but is second-hand (the summary said it, not the agent's own reasoning).

Final:
- 1 vs 5 → 1 wins. 5 is the strongest runner-up: real auth outage, AI blind spot, good form. 1 beats it on freshness and economy: 76 chars vs 87, one clean causal chain (typo → rename DB → prod dead), and the absurdity is unmistakably a language-model failure — treating the cheapest textual edit as the fix and applying it to the largest possible object. 5's "optimized by removing WHERE" is a joke shape already common in dev humor; 1's rename-the-database-to-match-the-typo is not stock.
- 1 vs 11 → 1 wins. 11 outsources the mistake to a summary; 1 owns it in first person, which reads as a genuine 3am revert subject.

## Winner

`revert: the deploy where I fixed a typo by renaming the database to match it` (76 chars)

Why: authentic `revert:` form; the outage is real and total (renamed DB = every connection fails); the voice is an AI blind spot (literal text-matching applied at infrastructure scale); fresh — no confidence percentages, no "oops", no "please work"; short enough to land in one read.
