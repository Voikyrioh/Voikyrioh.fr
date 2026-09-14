# Components Inventory

Complete list of reusable Vue 3 components organized by atomic design level.

## Atoms

Smallest, most reusable UI units. No dependencies on other components (except imported utilities).

| Component | File | Purpose | Props | Emits |
|---|---|---|---|---|
| [FullScreenContent](atoms/full-screen-content.md) | `atoms/full-screen-content.vue` | Wrapper for full-viewport content sections | — | — |
| [IconLink](atoms/icon-link.md) | `atoms/icon-link.vue` | Icon hyperlink (social links, etc.) | href, icon, label | — |
| [LangSwitcher](atoms/lang-switcher.md) | `atoms/lang-switcher.vue` | Language selection dropdown | — | — |
| [ProjectCard](atoms/project-card.md) | `atoms/project-card.vue` | Project summary card with image, title, status | project: Project | — |
| [SectionTitle](atoms/section-title.md) | `atoms/section-title.vue` | Styled section heading | title, subtitle | — |
| [SkillBadge](atoms/skill-badge.md) | `atoms/skill-badge.vue` | Skill tag/badge | skill, color | — |
| [SwitchButton](atoms/switch-button.md) | `atoms/switch-button.vue` | Toggle switch (e.g., dark mode) | modelValue | update:modelValue |

## Molecules

Composite components combining atoms.

| Component | File | Purpose | Uses |
|---|---|---|---|
| [AboutSection](molecules/about-section.md) | `molecules/about-section.vue` | About/biography section | SectionTitle, FullScreenContent |
| [ContactSection](molecules/contact-section.md) | `molecules/contact-section.vue` | Contact CTA and links | SectionTitle, IconLink |
| [ContentCard](molecules/content-card.md) | `molecules/content-card.vue` | Generic content card wrapper | — |
| [Content](molecules/content.md) | `molecules/content.vue` | Generic content placeholder | — |
| [ExperienceSection](molecules/experience-section.md) | `molecules/experience-section.vue` | Work experience timeline | SectionTitle, FullScreenContent |
| [Footer](molecules/footer.md) | `molecules/footer.vue` | Site footer with copyright | IconLink |
| [Header](molecules/header.md) | `molecules/header.vue` | Navigation header with links and lang switcher | LangSwitcher |
| [HeroSection](molecules/hero-section.md) | `molecules/hero-section.vue` | Landing hero with title and subtitle | SectionTitle, FullScreenContent |
| [ProjectsSection](molecules/projects-section.md) | `molecules/projects-section.vue` | Project gallery grid | SectionTitle, ProjectCard |
| [SkillsSection](molecules/skills-section.md) | `molecules/skills-section.vue` | Skills display | SectionTitle, SkillBadge |

## Pages

Full-page views composed from molecules.

| Page | File | Route | Purpose |
|---|---|---|---|
| [Home](pages/home.md) | `pages/home.vue` | `/` | Landing page with all sections |
| [ProjectDetail](pages/project-detail.md) | `pages/project-detail.vue` | `/project/:slug` | Individual project showcase (lazy-loaded) |

## Composables

Reusable logic (not UI).

| Composable | File | Purpose |
|---|---|---|
| useFadeIn | `composables/useFadeIn.ts` | Intersection Observer for fade-in animations on scroll |
| useProjects | `composables/useProjects.ts` | Fetch and manage project data |

