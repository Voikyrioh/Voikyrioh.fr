# Business Rules

Portfolio website enforces the following business rules:

| Rule | Domain | Status |
|---|---|---|
| Project status must be one of: `live`, `published`, `in-progress`, `learning` | Projects | Active |
| Only projects with `status !== 'learning'` displayed in main gallery | Projects | Active |
| Navigation links are hardcoded; no dynamic menu loading | Navigation | Active |
| Multi-language support via @Voikyrioh/vue-translate; fallback to English | i18n | Active |
| Project slug must be URL-safe (alphanumeric + hyphens) | Projects | Active |

### Future Rules (Not Yet Implemented)

- Project filtering by skill tag.
- Dark mode toggle persistence (currently theme-only via OS preference).

