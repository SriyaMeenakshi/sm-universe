# SM Universe implementation roadmap

## Repository audit

- Repository started with only the MIT `LICENSE`; no application files, package manifest, dependencies, or framework configuration were present.
- Initial commit: `ad446af` (`Initial commit`). Working tree was clean on `main`, which tracked `origin/main`.
- Remote: `origin` → `https://github.com/SriyaMeenakshi/sm-universe.git`.
- Existing Git identity: `SriyaMeenakshi` (`chsriyameenu2818@gmail.com`). This project will use that configured identity without changing it.
- Work will proceed on a feature branch, with phase-scoped conventional commits. The remote's branch protection rules are not visible locally; no direct push to `main` is planned.
- No `AGENTS.md`, app, tests, assets, `.env`, or secrets were present in the repository during the audit.

## Architecture and implementation checklist

- [ ] Build a Next.js App Router application with TypeScript and Tailwind CSS; keep content and types centralized.
- [ ] Implement two distinct responsive visual systems with one persistent universe selector, shared navigation, motion that respects reduced-motion preferences, and accessible controls.
- [ ] Keep missing profile/avatar imagery, resume, certificates, and personal photography explicit as placeholders; use only provided personal content and verified project links.
- [ ] Build TechVerse from the supplied profile, interests, project list, achievements, experience categories, research interests, and social links. Treat unspecified details and links as editable placeholders.
- [ ] Build VisualVerse with a real-photo-first gallery experience and clear empty placeholders until personal images are supplied.
- [ ] Integrate Supabase through environment-backed clients, SQL migrations, RLS, and Storage policies. Never include service-role credentials in client code.
- [ ] Build `/admin` using Supabase Auth and real CRUD/upload flows; do not present a disconnected mock dashboard as functional.
- [ ] Add metadata, keyboard support, reduced-motion behavior, loading/error/empty states, and responsive layouts.
- [ ] Document local setup, Supabase provisioning, admin access, content management, and Vercel deployment.

## External inputs and service requirements

- Personal photograph and a photograph for the custom avatar (the avatar must be based on the user's photograph).
- Resume file, if resume downloads should be enabled.
- Personal photographs, artwork, certificates, project screenshots, and any missing project repositories or live URLs.
- Optional Instagram profile/post URLs and public contact email. No contact email or Instagram URL was supplied in the brief.
- Supabase project URL and public anon/publishable key for local/public integration; an authorized administrator account must be configured in Supabase Auth.
- Vercel account/project for deployment. Deployment will not be claimed until performed and confirmed.

## Phase tracking

Status values: `Pending`, `In progress`, `Complete`, or `Blocked`. A phase is complete only when its implementation, requested checks, review, and phase-scoped commit are complete. Push status is recorded separately; missing credentials or external service access must not be represented as success.

| Phase | Scope | Status | Commit | Push |
| --- | --- | --- | --- | --- |
| 0 | Repository audit and implementation roadmap | Complete | `ee2955e` | Pushed to `origin/feature/sm-universe-roadmap` |
| 1 | Next.js application foundation and shared design systems | Complete | `74e169a` | Pushed to `origin/feature/sm-universe-roadmap` |
| 2 | Hybrid hero and universe switching | Complete | `936706f` | Pushed to `origin/feature/sm-universe-roadmap` |
| 3 | TechVerse portfolio | Pending | — | — |
| 4 | VisualVerse portfolio | Pending | — | — |
| 5 | Supabase schema, security, storage, and content services | Pending | — | — |
| 6 | Authenticated admin dashboard and content management | Pending | — | — |
| 7 | Verification, accessibility, and performance fixes | Pending | — | — |
| 8 | Documentation and deployment readiness | Pending | — | — |

## Phase 0 — Repository audit and planning

- [x] Inspect repository, Git history/status, configured identity, and remote.
- [x] Confirm no existing application/configuration/assets need preservation.
- [x] Record architecture, checklist, and external requirements.
- [x] Commit the roadmap on a feature branch and push that branch if the configured remote accepts it.

## Phase 1 — Application foundation

- [x] Add the Next.js App Router, React, TypeScript, Tailwind CSS, Motion for React, and Lucide React with compatible stable versions.
- [x] Add global layout, typography, metadata, responsive navigation, and centralized tokens for both universes.
- [x] Keep the initial app buildable without external credentials.
- [x] Run typecheck, lint, and production build; review the phase diff and commit.

## Phase 2 — Hybrid hero and universe switching

- [x] Build the profile/avatar placeholder composition, animated roles, universe toggle, transition, and persistent selection.
- [x] Add mobile behavior, reduced-motion support, and functional navigation/CTA links.
- [x] Run typecheck, lint, and production build; review the phase diff and commit.

## Phase 3 — TechVerse

- [ ] Build profile/about, skills without invented ratings, editable academic/experience entries, supplied projects, achievements, research interests, open-source profiles, and contact links.
- [ ] Keep missing facts and media visibly marked as editable placeholders.
- [ ] Run the relevant checks, review the phase diff, and commit.

## Phase 4 — VisualVerse

- [ ] Build an editorial creative home, photo and artwork collections, filters, accessible lightbox, journal, and contact/social areas.
- [ ] Do not populate personal galleries with stock or generated personal imagery.
- [ ] Run the relevant checks, review the phase diff, and commit.

## Phase 5 — Supabase backend

- [ ] Add environment examples, clients, migrations, relational schema, indexes, RLS, Storage buckets/policies, and typed content services.
- [ ] Keep the public app usable with clearly identified local sample content when Supabase is not configured.
- [ ] Validate migrations and available checks; commit.

## Phase 6 — Admin dashboard

- [ ] Add Supabase Auth login, protected admin routes, overview, validated CRUD, uploads, draft/published flow, delete confirmation, and feedback/empty states.
- [ ] Verify public queries cannot return drafts and admin mutations require authorized identity.
- [ ] Validate available flows and checks; commit.

## Phase 7 — Verification and optimization

- [ ] Run production build, TypeScript, lint, route/component, responsive, keyboard, reduced-motion, and integration checks that the configured environment supports.
- [ ] Fix regressions, review accessibility and performance, and commit only phase-specific fixes.

## Phase 8 — Documentation and deployment readiness

- [ ] Document install, environment, Supabase setup/migrations/admin, content workflow, and Vercel deployment.
- [ ] Verify final production build and ensure `.env` files, private media, credentials, and build artifacts are excluded.
- [ ] Commit documentation. Deploy only when the required external accounts and configuration are available.
