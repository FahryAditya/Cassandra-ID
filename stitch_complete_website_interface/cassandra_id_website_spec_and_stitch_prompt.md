# Cassandra.ID — Website Specification & Google Stitch Prompts

> Version: 0.1.0
> Type: Community Portal Website
> Tagline: Anime Community · Research · Innovation · Discussion
> Frontend rekomendasi: React + TypeScript + Tailwind CSS (atau Next.js jika butuh SEO/blog-like content untuk Knowledge Base)

---

## 1. Konsep & Positioning

Cassandra.ID bukan website anime biasa dan bukan pengganti grup WhatsApp. Fungsinya:

- **WhatsApp** → tempat komunitas berinteraksi dan berdiskusi secara langsung (real-time).
- **Cassandra.ID** → portal resmi + pusat dokumentasi: tempat mengarsipkan, mengembangkan, dan mempublikasikan hasil diskusi (Community → Knowledge → Innovation).
- **Clover Archive** → tempat menjaga sejarah dan kenangan komunitas pendahulu (CloverOtaku.ID).

Karakter komunitas: anime sebagai titik temu, tapi aktivitas inti adalah riset, pengembangan ide, inovasi, dan forum diskusi lintas topik (anime, teknologi, sains, kreatif).

---

## 2. Identitas Visual (Logo & Warna)

Logo: lingkaran biru tebal mengelilingi daun maple gradasi oranye-merah bata di tengah, dengan 4 bintang emas di dalam lingkaran (atas/bawah/kiri/kanan), latar putih, urat daun putih.

### Palet Warna

| Warna | Kode Referensi | Penggunaan |
|---|---|---|
| Sky Blue | `#5EC1E8` (approx) | Warna dominan — lingkaran luar logo, elemen header/aksen utama |
| White | `#FFFFFF` | Background utama, outline, urat daun, ruang negatif |
| Orange (peach/apricot) | `#FFB37A` (approx) | Ujung atas gradasi daun maple — aksen hangat sekunder |
| Coral / Red-Orange (merah bata) | `#E85D3D` (approx) | Bagian bawah gradasi daun maple — aksen CTA/highlight |
| Golden Yellow | `#F2B705` (approx) | 4 bintang, garis horizontal tipis pengapit teks — aksen dekoratif |
| Dark Navy/Charcoal (teks, untuk kontras) | `#1B2A38` (approx, tambahan) | Warna teks utama di atas background putih |

> Catatan: kode hex di atas adalah estimasi warna dari deskripsi logo (belum dari sample file logo asli). Sesuaikan dengan color-picker langsung dari file logo untuk hasil final produksi.

### Prinsip Penggunaan Warna di Web
- Sky Blue sebagai warna brand utama (header, link, ikon aktif, border aksen).
- Putih sebagai dominasi background agar terasa bersih, modern, tidak "anime-website" gelap/ramai.
- Gradasi oranye→merah bata dipakai selektif untuk CTA utama, badge "Golden Era"/"Archive", atau elemen yang butuh perhatian (bukan dominan, karena ini warna aksen emosional/hangat, cocok untuk Archive/Clover section).
- Kuning emas dipakai tipis sebagai garis dekoratif, bintang/badge achievement, dan status "Completed"/"Featured".

---

## 3. Struktur Situs (Sitemap)

```
CASSANDRA.ID
│
├── HOME
│
├── ABOUT
│
├── COMMUNITY
│   ├── Forum
│   ├── Discussions
│   ├── Events
│   └── Members
│
├── RESEARCH
│   ├── Research Hub
│   ├── Papers
│   └── Research Notes
│
├── INNOVATION
│   ├── Projects
│   ├── Ideas
│   └── Experiments
│
├── KNOWLEDGE
│   ├── Articles
│   ├── Guides
│   └── Discussions Archive
│
└── ARCHIVE
    │
    └── 🍀 CLOVEROTAKU.ID
        ├── History
        ├── Timeline
        ├── 349 Members
        ├── Memories
        ├── Messages
        ├── Golden Era
        └── Legacy
```

---

## 4. Rincian Tiap Halaman (untuk konten & referensi Stitch)

### 4.1 Home
- Hero: judul besar "CASSANDRA.ID", tagline "Anime. Research. Innovation. Community.", deskripsi singkat komunitas.
- Statistik: Community (01), Discussions (XX), Research (XX), Projects (XX), Members (XXXX) — ditampilkan sebagai angka besar berjajar.
- CTA ganda: "Join Community" (primary, ke WhatsApp) dan "Explore Cassandra" (secondary, scroll/ke About).

### 4.2 About
- Narasi filosofi: dari komunitas anime → ruang diskusi lebih luas.
- Daftar pertanyaan reflektif komunitas ("Kenapa ini terjadi?", "Bagaimana cara membuatnya?", dst) sebagai quote list.

### 4.3 Community / Forum
- Kategori forum: Anime, Technology, Research, Innovation, Creative, Community — tiap kategori kartu dengan ikon & deskripsi singkat.
- Sub-halaman Discussions (thread list), Events (timeline), Members (contributor directory).

### 4.4 Research
- Research Hub dengan 6 bidang: AI & Machine Learning, Anime & Japanese Culture, Technology, Digital Media, Community Research, Space & Science.
- Tiap riset punya metadata: Judul, Penulis, Kontributor, Tanggal, Status, Referensi, Hasil, Diskusi.
- Contoh kartu: "Exploring AI in Anime Production" — Status: Completed — Researchers: Cassandra Research Team.

### 4.5 Innovation Lab
- Daftar project komunitas (Website, Bot, AI project, Aplikasi, Game, Tools, Automation, Eksperimen).
- Tiap project: Name, Description, Creator, Technology, Status, Progress.
- Status pipeline: IDEA → RESEARCH → DEVELOPMENT → TESTING → RELEASED.

### 4.6 Knowledge Base
- Artikel hasil rapihan diskusi WhatsApp (mis. "AI Vision — Research Notes #001").
- Kategori: Articles, Guides, Discussions Archive.

### 4.7 Community Projects
- Grid status project: Cassandra Bot (Active), Anime Database (Development), Research Archive (Active), Community Website (Online).

### 4.8 Events
- Kalender/timeline event: Research Discussion, Anime Night, Innovation Session, dst — dikelompokkan per bulan (contoh: September 2026).

### 4.9 Members
- Contributor Directory berdasarkan peran: Researchers, Developers, Designers, Writers, Editors, Moderators, Contributors.

### 4.10 Archive → CloverOtaku.ID
- Landing Archive: "Preserving the communities that came before us." → tautan ke Museum CloverOtaku.ID.
- Museum CloverOtaku.ID: The Beginning, Date Founded, Our Journey, Community, Golden Era, 349 Members, Memories, Messages & Impressions, Events, Digital Artifacts, Legacy.
- Halaman "The 349": narasi perjalanan Foundation → Early Community → Growth → Golden Era → 349 Members → Archive.
- Memory Wall: galeri kenangan (screenshot, event, meme, karya, foto) dengan metadata (Title, Date, Era, Contributors).
- Pesan & Kesan (Voices of Clover): kumpulan testimoni anggota lama.
- Transisi Clover → Cassandra: halaman naratif diagram alur Clover → Experience → Knowledge → Cassandra → Research/Innovation/Discussion/Community.

---

## 5. Prinsip Desain

1. Bersih, modern, dominan putih dengan aksen biru sebagai identitas utama (bukan tema gelap).
2. Bagian Cassandra utama (Home, Community, Research, Innovation, Knowledge) terasa **aktif, ilmiah, kolaboratif** — banyak whitespace, kartu data, badge status.
3. Bagian Archive/CloverOtaku terasa **hangat, nostalgic, personal** — gunakan gradasi oranye-merah bata & emas lebih banyak di sini dibanding halaman lain, tipografi lebih naratif/editorial (seperti museum digital).
4. Konsisten pakai logo lingkaran biru + daun maple sebagai watermark/emblem di elemen-elemen penting (footer, halaman About, Archive landing).
5. Ikon bintang emas bisa dipakai sebagai bullet/marker dekoratif kecil (bukan dominan) di elemen achievement atau highlight.

---

# Prompt Google Stitch — Cassandra.ID

> Cara pakai: buka stitch.withgoogle.com → platform **Web** → model **Gemini 3 Pro** → paste **Master Context** dulu, lalu lanjutkan tiap halaman satu per satu secara berurutan.

---

## 0. Master Context (paste dulu sebagai prompt pertama)

```
Context:
Design the website "Cassandra.ID" — an anime community portal that is also a research, innovation, and discussion hub. The community originates from a WhatsApp group centered on anime, but its core activities are research, idea development, innovation projects, and cross-topic discussion forums (anime, technology, science, creative work). This website is NOT a chat replacement — it's an official documentation and showcase portal.

User:
Community members and visitors — anime fans who are also into research, technology, creative projects, and collaborative innovation. Age range roughly late teens to young adults.

Design mood:
Clean, modern, bright, mostly white background with sky-blue as the dominant brand accent. Feels scientific/collaborative yet still warm and community-driven — not a dark "anime fan site" aesthetic. Generous whitespace, clear card-based layout, rounded soft corners, subtle shadows.

Color palette (use exactly):
- Sky Blue (primary brand color): #5EC1E8
- White (dominant background): #FFFFFF
- Orange/Peach (secondary warm accent, used sparingly): #FFB37A
- Coral/Red-Orange (accent for highlights, CTAs on warm sections): #E85D3D
- Golden Yellow (decorative accent — stars, thin dividing lines, badges): #F2B705
- Dark Navy/Charcoal (body text): #1B2A38
- Muted gray-blue (secondary text): #6B7C93

Logo concept (use as inspiration for a small emblem/favicon element, do not need to render literally): a thick sky-blue ring encircling a white center, with a maple leaf in the middle gradiating from peach-orange at the top to coral red-orange at the base/stem, white leaf veins as outline detail, and four small four-pointed golden-yellow stars placed at top, bottom, left, and right inside the blue ring.

Typography: clean modern sans-serif for UI and body text, with a slightly more editorial/serif-influenced display font allowed for hero headlines and the Archive/CloverOtaku section to give a "documented history" feel.

Screen type:
Home page (landing page)

Layout & hierarchy:
- Top navigation bar: logo/emblem + "CASSANDRA.ID" wordmark on the left, nav links (Home, About, Community, Research, Innovation, Knowledge, Archive) center/right, and a "Join Community" button (filled sky blue) on the far right
- Hero section: large centered headline "CASSANDRA.ID", subheadline "Anime. Research. Innovation. Community.", a short descriptive paragraph below, and two CTA buttons — "Join Community" (filled sky blue, primary) and "Explore Cassandra" (outline, secondary)
- Stats row below hero: 5 large number stats side by side with labels underneath — Community (01), Discussions (XX), Research (XX), Projects (XX), Members (XXXX) — numbers in bold sky-blue or coral accent color
- A preview section below showcasing 3-4 highlight cards linking to Research, Innovation, Knowledge, and Community sections, each card with an icon, title, and short description
- Footer with logo emblem, quick links, and community social/WhatsApp link

Expectations:
Generate a high-fidelity, polished community portal homepage that feels credible, research-oriented, and welcoming — not a generic fan wiki.
```

---

## 1. About

```
Design the About page for Cassandra.ID.

Layout:
- Header section: "About Cassandra" title with a short intro paragraph explaining Cassandra started from a shared interest in anime and grew into a broader discussion space
- A visually distinct quote block section titled "More than just..." showing a list of reflective questions as styled quote items, each in its own row or card: "Why does this happen?", "How do you make this?", "How does this technology work?", "What can we develop?", "What if we applied this idea?" — each with a small quotation mark icon or golden star bullet
- A closing section reinforcing the community's three pillars: Community, Research, Innovation — shown as 3 icon+text columns

Style: white background, sky blue (#5EC1E8) section accents, quote items with a thin golden yellow (#F2B705) left border or star bullet, dark navy body text (#1B2A38), generous whitespace, clean editorial feel.
```

---

## 2. Community / Forum

```
Design the Community / Forum page for Cassandra.ID.

Layout:
- Page header: "Community Forum" title with short description
- Grid of 6 category cards: Anime (discussions about anime, manga, character, story, theory), Technology (programming, AI, cybersecurity, software), Research (research and topic exploration), Innovation (new ideas and concepts), Creative (AMV, design, writing, art, multimedia), Community (events, announcements, chat) — each card with a distinct icon, category name, short description, and a thread/post count badge
- Below the grid: a "Recent Discussions" list showing 4-5 thread preview rows with title, category tag, author avatar, reply count, and last activity timestamp

Style: white background, category cards with soft sky-blue (#5EC1E8) border/icon accent, category tag badges color-coded per category, thread list rows with subtle hover highlight, rounded cards, clean modern forum layout.
```

---

## 3. Research Hub

```
Design the Research Hub page for Cassandra.ID.

Layout:
- Page header: "Research Hub" title with description of Cassandra's research activities
- Grid of 6 research field cards, each numbered (01-06): AI & Machine Learning, Anime & Japanese Culture, Technology, Digital Media, Community Research, Space & Science — each with an icon and short description
- Below: a "Featured Research" list showing research entry cards, each with: title (e.g. "Exploring AI in Anime Production"), status badge (Completed/Ongoing), researcher/team name, date, and a short excerpt

Style: white background, numbered field cards with sky-blue (#5EC1E8) number badge, status badges color-coded (Completed = golden yellow #F2B705 or green, Ongoing = sky blue), research cards with clean typography hierarchy, rounded corners, academic-but-friendly feel.
```

---

## 4. Research Detail Page

```
Design a Research Detail page for Cassandra.ID, showing a single research entry (e.g. "Exploring AI in Anime Production").

Layout:
- Header: research title (large), status badge, and metadata row (Author, Contributors as avatar group, Date, Category tag)
- Table of contents or section anchors sidebar (optional, left side): Overview, References, Results, Discussion
- Main content area: structured sections — Overview/Abstract paragraph, References list (numbered), Results section (could include a placeholder chart or summary box), Discussion/comments section at the bottom with a few comment entries

Style: white background, sky-blue (#5EC1E8) accent for section headers and status badge, dark navy (#1B2A38) body text, clean academic article layout, golden yellow (#F2B705) small star icon for "Completed" status, rounded card sections, readable line-length for body text.
```

---

## 5. Innovation Lab

```
Design the Innovation Lab page for Cassandra.ID.

Layout:
- Page header: "Cassandra Innovation Lab" title with description of member-driven experimental projects (Website, Bot, AI project, App, Game, Tools, Automation)
- A horizontal status pipeline visual at top: IDEA → RESEARCH → DEVELOPMENT → TESTING → RELEASED, shown as connected stage badges
- Grid of project cards below, each showing: project name, short description, creator name/avatar, technology tags (small pills), current status badge (matching one of the 5 pipeline stages, color-coded), and a progress bar

Style: white background, pipeline stages color-progression from sky blue (#5EC1E8, early stage) to coral/orange (#E85D3D, released/final stage), project cards with rounded corners and soft shadow, tech tag pills in muted gray-blue (#6B7C93), progress bars in sky blue fill.
```

---

## 6. Knowledge Base

```
Design the Knowledge Base page for Cassandra.ID.

Layout:
- Page header: "Cassandra Knowledge Base" title with a note explaining these articles are curated from community WhatsApp discussions
- Search bar and category filter tabs: Articles, Guides, Discussions Archive
- Grid/list of article cards, each showing: title (e.g. "AI Vision — Research Notes #001"), short excerpt, category tag, author, read time, and publish date

Style: white background, article cards with clean editorial typography, sky-blue (#5EC1E8) category tags, golden yellow (#F2B705) thin divider lines between sections, rounded cards, blog/wiki-like clean readable layout.
```

---

## 7. Community Projects

```
Design the Community Projects page for Cassandra.ID.

Layout:
- Page header: "Community Projects" title
- Grid of project status cards: Cassandra Bot (Active), Anime Database (Development), Research Archive (Active), Community Website (Online) — each card with project icon/thumbnail, name, status badge with a colored status dot, short description, and a "View project" link

Style: white background, status dots color-coded (Active/Online = sky blue or green, Development = golden yellow), cards with rounded corners and soft shadow, clean grid layout, consistent card sizing.
```

---

## 8. Events

```
Design the Events page for Cassandra.ID.

Layout:
- Page header: "Events" title with month selector (e.g. "September 2026")
- Vertical timeline layout: a center or left vertical line connecting event nodes, each node showing event type icon, event name (Research Discussion, Anime Night, Innovation Session, etc.), date/time, and short description in a card beside the timeline node

Style: white background, timeline line in sky blue (#5EC1E8), event nodes as filled circle markers, event cards with rounded corners and soft shadow, event type icons color-coded by category, clean chronological visual flow.
```

---

## 9. Members / Contributor Directory

```
Design the Members page for Cassandra.ID, framed as a Contributor Directory rather than a full member list.

Layout:
- Page header: "Members" title with description explaining this highlights contributors, not the full WhatsApp group list
- Category filter tabs: Researchers, Developers, Designers, Writers, Editors, Moderators, Contributors
- Grid of member profile cards, each showing avatar, name, role badge, and a short tag of their contribution area or notable project

Style: white background, role badges color-coded per category using the palette accents, profile cards with circular avatar and rounded card frame, clean grid layout, sky-blue (#5EC1E8) accent for active filter tab.
```

---

## 10. Archive Landing

```
Design the Archive landing page for Cassandra.ID — the entry point to preserved community history, distinctly warmer/more nostalgic in tone than the rest of the site.

Layout:
- Full-width header section with a warm gradient accent (peach to coral, #FFB37A to #E85D3D) as a subtle background band or border, containing the headline "Cassandra Archive" and subtext "Preserving the communities that came before us."
- Below: a featured archive entry card for "🍀 CLOVEROTAKU.ID" with subtitle "A Chapter of Our History" and a "View Museum" button

Style: white main background with the warm orange-coral gradient band as an accent element (not dominant), golden yellow (#F2B705) decorative thin lines/stars around the CloverOtaku card, more editorial/serif-influenced typography for headline, rounded card with soft shadow, nostalgic yet clean feel.
```

---

## 11. CloverOtaku.ID Museum (Landing)

```
Design the CloverOtaku.ID Museum landing page, nested within Cassandra Archive.

Layout:
- Header: "🍀 CLOVEROTAKU.ID" title with a small clover emblem, subtitle "A Chapter of Our History"
- A navigation grid/menu of museum sections as cards: The Beginning, Date Founded, Our Journey, Community, Golden Era, 349 Members, Memories, Messages & Impressions, Events, Digital Artifacts, Legacy — each card with an icon and short label

Style: warm nostalgic palette — white/cream background with peach-to-coral gradient accents (#FFB37A to #E85D3D) on card borders or icons, golden yellow (#F2B705) decorative stars scattered subtly, more editorial serif-influenced typography for the museum title, rounded museum-plaque-style cards, gentle warm shadows.
```

---

## 12. The 349

```
Design "The 349" page for Cassandra.ID — a narrative page documenting the journey to 349 CloverOtaku.ID members.

Layout:
- Header: large text "349 MEMBERS" with subtext "One number. Hundreds of stories."
- Below: a vertical narrative journey diagram with connected stages: FOUNDATION → EARLY COMMUNITY → GROWTH → GOLDEN ERA → 349 MEMBERS → ARCHIVE, each stage as a milestone card with a short description and connecting line/arrow between them

Style: warm nostalgic palette, milestone cards with peach-to-coral gradient accent (#FFB37A to #E85D3D) markers, golden yellow (#F2B705) connecting line or arrow accents, large bold "349" numeral in coral/orange gradient text, editorial serif-influenced typography, white/cream background.
```

---

## 13. Memory Wall

```
Design the Memory Wall page for CloverOtaku.ID Archive — a gallery of community memories.

Layout:
- Page header: "Memory Wall" title with short description
- Masonry-style or grid gallery of memory cards, each showing an image/screenshot placeholder thumbnail (representing WhatsApp screenshots, event photos, memes, artwork, posters), with a metadata overlay or caption below: memory number/title (e.g. "MEMORY #024 — The Late Night Discussion"), date, era tag (e.g. "Golden Era"), and contributor names

Style: warm nostalgic palette, gallery thumbnails with soft rounded corners and subtle coral-tinted overlay on hover, era tags as small golden-yellow (#F2B705) pill badges, caption text in dark navy (#1B2A38), masonry grid with varied card heights for organic scrapbook feel.
```

---

## 14. Pesan & Kesan (Voices of Clover)

```
Design the "Voices of Clover" (Pesan & Kesan) page — testimonials from former CloverOtaku.ID members.

Layout:
- Page header: "Voices of Clover" title with description explaining this documents how the community was experienced by its members
- List/grid of testimonial cards, each showing member avatar, name, a quote-style message (in italic or distinct quote styling), and small metadata (their era/role in the community)

Style: warm nostalgic palette, quote cards with a large golden yellow (#F2B705) quotation mark accent, coral-to-peach gradient thin card border, editorial serif-influenced quote typography, white/cream background, gentle warm shadows, intimate scrapbook-letter feel.
```

---

## 15. From Clover to Cassandra (Transition Page)

```
Design the "From Clover to Cassandra" narrative transition page.

Layout:
- Centered vertical flow diagram: CLOVEROTAKU.ID at top, arrow down to EXPERIENCE, arrow down to KNOWLEDGE, arrow down to CASSANDRA, arrow down to four branching labels: RESEARCH, INNOVATION, DISCUSSION, COMMUNITY
- Below the diagram: a narrative paragraph explaining CloverOtaku.ID became part of history, and Cassandra.ID continues the journey by carrying forward the experience, knowledge, and spirit of the community into something new

Style: a visual gradient transition from the warm nostalgic palette (peach/coral #FFB37A to #E85D3D, golden #F2B705) at the top (Clover) smoothly shifting to the primary sky-blue (#5EC1E8) palette at the bottom (Cassandra) — symbolizing the transition, connected flow nodes with arrows, centered narrative typography, white background, elegant storytelling layout.
```

---

## Checklist Semua Halaman

- [ ] 0. Master Context (Home)
- [ ] 1. About
- [ ] 2. Community / Forum
- [ ] 3. Research Hub
- [ ] 4. Research Detail Page
- [ ] 5. Innovation Lab
- [ ] 6. Knowledge Base
- [ ] 7. Community Projects
- [ ] 8. Events
- [ ] 9. Members / Contributor Directory
- [ ] 10. Archive Landing
- [ ] 11. CloverOtaku.ID Museum (Landing)
- [ ] 12. The 349
- [ ] 13. Memory Wall
- [ ] 14. Pesan & Kesan (Voices of Clover)
- [ ] 15. From Clover to Cassandra (Transition)

## Tips

- Generate **Master Context (Home)** dulu agar gaya sky-blue/white konsisten diterapkan Stitch ke halaman-halaman Cassandra utama (0-9).
- Untuk halaman Archive/CloverOtaku (10-15), tetap dalam sesi Stitch yang sama tapi prompt-nya secara eksplisit meminta palet lebih hangat (peach-coral-emas) — ini disengaja agar bagian Archive terasa "berbeda era" dari bagian Cassandra aktif, sambil tetap dalam satu keluarga desain.
- Setelah semua halaman di-generate, gunakan **Paste to Figma** atau **Export code** di Stitch untuk lanjut ke tahap desain sistem/development, lalu sesuaikan kode hex final dengan color-picker dari file logo asli (bukan estimasi di dokumen ini).
