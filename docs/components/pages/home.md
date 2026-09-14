# Home Page

**File**: `src/pages/home.vue`  
**Route**: `/`

## Purpose

Landing page displaying all portfolio sections: hero, about, experience, projects, skills, contact.

## Props

None.

## Structure

Composed of molecules in sequence:
1. HeroSection
2. AboutSection
3. ExperienceSection
4. ProjectsSection
5. SkillsSection
6. ContactSection

## Implementation Notes

- Uses FullScreenContent wrappers for each section.
- Smooth scroll-to-section via anchor links in Header.
- All content is responsive and adapts to mobile/tablet/desktop.

