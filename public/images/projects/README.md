# Portfolio screenshots and project links

All project information lives in `src/data/projects.ts`.

## Screenshots

The supplied screenshots have been copied into these paths:

| Project | Screenshot file | Configured browser path |
| --- | --- | --- |
| MAISON NOIR | `public/images/projects/maison-noir.png` | `/images/projects/maison-noir.png` |
| Anthony J. Brian | `public/images/projects/anthony-j-brian.png` | `/images/projects/anthony-j-brian.png` |
| Solaris | `public/images/projects/solaris.png` | `/images/projects/solaris.png` |
| InboxZero | `public/images/projects/inboxzero.png` | `/images/projects/inboxzero.png` |

Replace these files with new screenshots using the same filenames, or copy another image here and update the matching `image` path in the configuration. Paths omit `public` and must match filename capitalization.

`image` controls the card. `detailImage` controls the modal; an empty string reuses `image`. Cards use object-fit: cover. Modal images default to cover; `detailImageFit` can use contain to preserve a full interface screenshot without stretching. Set `imagePosition` for card cropping and `detailImagePosition` independently for modal cropping, using CSS values such as `50% 30%`. `detailImageScale` optionally crops baked-in screenshot margins (currently MAISON NOIR only). Preview hover retains the existing grayscale-to-color transition; modal images remain in full color.

## Live website links

Find each title in `src/data/projects.ts` and paste its real deployed HTTPS URL into the `projectUrl: ''` directly below its named comment. There are four separate fields, one per project, now populated with the supplied live URLs. Clear a field to disable its link if needed. Missing/invalid destinations disable Visit Project gracefully; valid links open a new tab with `noopener noreferrer`. `caseStudyUrl` is optional and follows the same rules.

## Project information and ordering

- `title`, `category`, and `overview` contain the supplied project names, categories, and descriptions.
- `services` and `techStack` accept arrays of verified names. Empty arrays display "To be added".
- `client` uses the supplied Portfolio Concept attribution. Unverified completion years remain empty; no date is inferred from copyright text or filesystem timestamps.
- The first array entry is the featured card. Anthony J. Brian and Solaris follow beneath it; InboxZero uses the next normal grid position. Append an entry with a unique id to add a future project.
- Legacy `images`, `challenge`, `solution`, `results`, `glow`, `coords`, and `gridClass` fields are not used by the current presentation.

Preview with `npm run dev`. Check with `npm run build` and `npm run lint`. Deploy the screenshot files with the site.

## Verified source references

Anthony J. Brian: `../Lawyer Up/package.json`, `src/App.tsx`, `src/index.css`.
Solaris: `../Energy Calc/package.json`, `src/components/LandingPage.tsx`, and the matching SOLARIS source.
InboxZero: `../Inbox Zero/packages/web/package.json`, `packages/api/package.json`, and their source files (React/CSS frontend, Fastify/Drizzle/PostgreSQL backend).

These references verify local source technologies; they do not imply an independently audited production deployment. Completion years for these three projects could not be verified and are omitted.
