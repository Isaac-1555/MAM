# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

**Mind Always Matters (MAM)** is a static website for a Canadian counseling service that provides culturally sensitive mental health therapy. The site consists of five main pages built with vanilla HTML and CSS.

## Project Structure

```
MAM/
├── home.html           # Landing page with hero, services preview, testimonials
├── about.html          # Company story, vision, mission
├── services.html       # Detailed service offerings (Individual, Couples, Trauma, etc.)
├── therapist.html      # Therapist profiles and trauma-informed approach
├── contact.html        # Contact form and location information
├── home.css            # Styles for home page
├── about.css           # Styles for about page
├── services.css        # Styles for services page
├── therapist.css       # Styles for therapist page
├── contact.css         # Styles for contact page
├── home_assets/        # Images and icons for home page
├── about_assets/       # Images and icons for about page
├── services_assets/    # Images and icons for services page
├── therapist_assets/   # Images and icons for therapist page
└── contact_assets/     # Images and icons for contact page
```

## Architecture & Design Patterns

### Page Structure
Each HTML page follows a consistent structure:
1. **Disclaimer bar** - Emergency contact information (911 for crisis situations)
2. **Header** - Logo, navigation menu, phone number (+1(604) 716-9979), "Book Appointment Now" button
3. **Main content** - Page-specific sections
4. **Footer** - Brand info, quick links, contact details, social media links

### CSS Organization
- Each page has its own dedicated CSS file
- CSS Reset & base styles at the top
- Component-based organization (disclaimer, header, hero, sections, footer)
- Consistent design system:
  - Primary brand color: `#1b2851` (navy blue)
  - Background: `#ffffff` (white) and `#2a2c34` (dark gray)
  - Text color: `#2a2c34`, `#374151`
  - Accent colors: Various blues, beiges, and pinks for cards/badges
  - Typography: 'Poppins' (headings), 'Lato' (body text), 'Inter' (supplementary)
  - Border radius: `9999px` for buttons (pill-shaped), `0.5rem` for cards

### Asset Management
- Assets are organized by page: `[page]_assets/`
- Each assets folder contains:
  - SVG icons (disclaimer, phone, calendar, social media, etc.)
  - JPG/PNG images (photos, hero images, therapist profiles)
  - Logo file (`logo.png` - 4.5MB, appears in multiple asset folders)

### Common Components

**Navigation Menu:**
- Links: Home, About Us, Services, Therapist, Article, Contact
- Active state indicated with `.active` class or inline styling

**CTA Buttons:**
- Primary: "Book Appointment Now" (pill-shaped, navy blue border)
- Secondary CTAs: "Book Free Consultation", "Schedule a Call", "Book a Session"
- Icon + text pattern used frequently (calendar icon + text)

**Cards:**
- Service cards with icon, title, description, feature list with checkmarks
- Therapist cards with photo, badges, bio, booking CTA
- Approach/value cards with icons and descriptions

## Development Commands

This is a **static website** with no build process or package manager. Development is straightforward:

### Viewing the site
```bash
# Option 1: Open directly in browser
open home.html

# Option 2: Use a local server (recommended for testing)
python3 -m http.server 8000
# Then navigate to http://localhost:8000/home.html

# Option 3: Use PHP built-in server
php -S localhost:8000
```

### Making changes
1. Edit HTML files directly in any text editor
2. Edit corresponding CSS files for styling
3. Refresh browser to see changes (hard refresh: Cmd+Shift+R on Mac)

### Version control
```bash
# View recent changes
git log --oneline -10

# Stage and commit changes
git add .
git commit -m "Description of changes"

# Push to remote
git push origin main
```

## Key Brand Elements

- **Tagline:** "Feel-Heal-Thrive" (appears with heart icon on home page)
- **Brand messaging:** "Your mind always matters"
- **Phone:** +1(604) 716-9979
- **Email:** hello@mindalwaysmatter.ca / hello@mindalwaysmatter.com (both appear)
- **Location:** Vancouver, Canada / Toronto references (inconsistent - needs verification)
- **Core values:** Confidential & Secure, Culturally Aware, Flexible Scheduling

## Therapy Services Offered

1. **Individual Therapy** - Anxiety, depression, trauma, grief & loss, stress
2. **Couples & Family** - Relationship building, communication improvement
3. **Trauma Informed Care** - PTSD, complex trauma, childhood trauma
4. **Training Workshop** - Professional development
5. **Group Session** - Collective healing

## Common Tasks

### Adding a new page
1. Create `[pagename].html` following the structure of existing pages
2. Create `[pagename].css` with page-specific styles
3. Create `[pagename]_assets/` directory for page assets
4. Update navigation links across all existing pages
5. Ensure disclaimer bar, header, and footer are consistent

### Updating contact information
Phone number and email appear in multiple locations:
- Header on all pages
- Footer on all pages  
- Contact page content
Search and replace across all `.html` files

### Adding/modifying assets
- Place assets in the appropriate `[page]_assets/` directory
- Reference in HTML as: `src="[page]_assets/filename.ext"`
- Use SVG for icons (scalable, small file size)
- Optimize images before adding (logo.png is quite large at 4.5MB)

### Styling consistency
When adding new components, follow existing patterns:
- Use consistent spacing units (rem-based: 0.5rem, 0.75rem, 1rem, 1.5rem, 2rem)
- Match existing button styles (`.btn-primary`, `.btn-secondary`, `.btn-outline`)
- Use existing color palette
- Maintain mobile-responsive approach (though breakpoints not visible in current code)

## Important Notes

- **No JavaScript:** This is a purely HTML/CSS project with no interactivity
- **No build tools:** No package.json, no bundlers, no preprocessors
- **Static forms:** Contact form has no backend - will need integration with form service (e.g., Formspree, Netlify Forms)
- **Asset optimization:** Logo files are duplicated across asset folders and quite large
- **Accessibility:** Includes semantic HTML and alt text for images
- **Responsive design:** CSS includes some responsive considerations, but mobile breakpoints should be verified

## Browser Testing

Test in modern browsers:
- Chrome/Edge (Chromium)
- Firefox
- Safari

Key pages to test:
1. `home.html` - Hero section, service cards carousel, testimonials
2. `about.html` - Story section, vision/mission cards
3. `services.html` - Service items with reverse layout pattern
4. `therapist.html` - Therapist cards with photo left/right alternating
5. `contact.html` - Contact form, location map placeholder
