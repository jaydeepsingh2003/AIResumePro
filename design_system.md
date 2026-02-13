# AI Resume Pro - Design System

## Color Palette
Using HSL for dynamic theming support.

### Primary Colors
- **Primary**: `hsl(var(--primary))` - Start with a deep, professional blue/indigo. `220 50% 40%`
- **Primary Foreground**: `hsl(var(--primary-foreground))` - White. `0 0% 100%`

### Secondary Colors
- **Secondary**: `hsl(var(--secondary))` - A softer, complementary shade. `210 20% 96%` (Light mode) / `217 19% 27%` (Dark mode)
- **Secondary Foreground**: `hsl(var(--secondary-foreground))` - `222.2 47.4% 11.2%`

### Neutral / Semantic Colors
- **Background**: `hsl(var(--background))` - Pure white or very light gray. `0 0% 100%`
- **Foreground**: `hsl(var(--foreground))` - Dark slate for text. `222.2 84% 4.9%`
- **Muted**: `hsl(var(--muted))` - For secondary text/icons. `210 40% 96.1%` (Light) / `217.2 32.6% 17.5%` (Dark)
- **Accent**: `hsl(var(--accent))` - For highlights. `210 40% 96.1%`
- **Destructive**: `hsl(var(--destructive))` - Red for errors/deletes. `0 84.2% 60.2%`

## Typography
Using **Inter** (Google Font) for UI and **Merriweather** (Google Font) for some resume templates.

### Scale
- **Display**: `text-4xl` to `text-6xl`, bold, tracking-tight
- **H1**: `text-3xl`, semi-bold
- **H2**: `text-2xl`, semi-bold
- **H3**: `text-xl`, medium
- **Body**: `text-base`, regular
- **Small**: `text-sm`, medium
- **Tiny**: `text-xs`, medium

## Spacing
Standard Tailwind spacing scale (4px grid).
- `p-4` (1m) is standard padding for cards.
- `gap-4` for lists.
- `m-8` for section separation.

## Components (ShadCN UI)
We will utilize the following primitives:
- **Button**: Variants (default, outline, ghost, link, destructive).
- **Card**: For dashboard widgets and resume previews.
- **Dialog/Modal**: For lengthy forms or detailed views.
- **Form**: Using `react-hook-form` + `zod` schema validation.
- **Toast**: For notifications.
- **Sheet**: For mobile navigation sidebar.

## Animation
Using **Framer Motion**:
- Page transitions: `opacity: 0` -> `1`, `y: 20` -> `0`.
- Hover effects on cards: `scale: 1.02`.
- List items: `staggerChildren`.
