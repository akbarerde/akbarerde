---
name: Akbarerde Design System
version: 1.0.0
status: active
updated: 2026-11-04
locale: id-ID
preset:
  code: b3QwSmPho
  url: https://ui.shadcn.com/create?preset=b3QwSmPho
  style: nova
  base: base
  baseColor: zinc
  theme: lime
  chartColor: lime
  iconLibrary: lucide
  font: geist
  fontHeading: inherit
  radius: default
  menuColor: default
  menuAccent: subtle
customization:
  headingFont:
    family: Bricolage Grotesque
    variable: Bricolage Grotesque Variable
    source: "@fontsource-variable/bricolage-grotesque"
    axes: [wght]
    weights: "200 800"
    license: OFL-1.1
    note: "Override lokal. Preset asli memakai fontHeading: inherit."
sourceOfTruth:
  tokens: packages/ui/src/styles/globals.css
  components: packages/ui/src/components
  app: apps/web/src
  aliases:
    ui: "@workspace/ui/components"
    utils: "@workspace/ui/lib/utils"
colors:
  light:
    background: "oklch(1 0 0)"
    foreground: "oklch(0.141 0.005 285.823)"
    card: "oklch(1 0 0)"
    card-foreground: "oklch(0.141 0.005 285.823)"
    popover: "oklch(1 0 0)"
    popover-foreground: "oklch(0.141 0.005 285.823)"
    primary: "oklch(0.841 0.238 128.85)"
    primary-foreground: "oklch(0.405 0.101 131.063)"
    secondary: "oklch(0.967 0.001 286.375)"
    secondary-foreground: "oklch(0.21 0.006 285.885)"
    muted: "oklch(0.967 0.001 286.375)"
    muted-foreground: "oklch(0.552 0.016 285.938)"
    accent: "oklch(0.967 0.001 286.375)"
    accent-foreground: "oklch(0.21 0.006 285.885)"
    destructive: "oklch(0.577 0.245 27.325)"
    border: "oklch(0.92 0.004 286.32)"
    input: "oklch(0.92 0.004 286.32)"
    ring: "oklch(0.705 0.015 286.067)"
    chart-1: "oklch(0.897 0.196 126.665)"
    chart-2: "oklch(0.768 0.233 130.85)"
    chart-3: "oklch(0.648 0.2 131.684)"
    chart-4: "oklch(0.532 0.157 131.589)"
    chart-5: "oklch(0.453 0.124 130.933)"
    sidebar: "oklch(0.985 0 0)"
    sidebar-foreground: "oklch(0.141 0.005 285.823)"
    sidebar-primary: "oklch(0.648 0.2 131.684)"
    sidebar-primary-foreground: "oklch(0.986 0.031 120.757)"
    sidebar-accent: "oklch(0.967 0.001 286.375)"
    sidebar-accent-foreground: "oklch(0.21 0.006 285.885)"
    sidebar-border: "oklch(0.92 0.004 286.32)"
    sidebar-ring: "oklch(0.705 0.015 286.067)"
  dark:
    background: "oklch(0.141 0.005 285.823)"
    foreground: "oklch(0.985 0 0)"
    card: "oklch(0.21 0.006 285.885)"
    card-foreground: "oklch(0.985 0 0)"
    popover: "oklch(0.21 0.006 285.885)"
    popover-foreground: "oklch(0.985 0 0)"
    primary: "oklch(0.768 0.233 130.85)"
    primary-foreground: "oklch(0.405 0.101 131.063)"
    secondary: "oklch(0.274 0.006 286.033)"
    secondary-foreground: "oklch(0.985 0 0)"
    muted: "oklch(0.274 0.006 286.033)"
    muted-foreground: "oklch(0.705 0.015 286.067)"
    accent: "oklch(0.274 0.006 286.033)"
    accent-foreground: "oklch(0.985 0 0)"
    destructive: "oklch(0.704 0.191 22.216)"
    border: "oklch(1 0 0 / 10%)"
    input: "oklch(1 0 0 / 15%)"
    ring: "oklch(0.552 0.016 285.938)"
    chart-1: "oklch(0.897 0.196 126.665)"
    chart-2: "oklch(0.768 0.233 130.85)"
    chart-3: "oklch(0.648 0.2 131.684)"
    chart-4: "oklch(0.532 0.157 131.589)"
    chart-5: "oklch(0.453 0.124 130.933)"
    sidebar: "oklch(0.21 0.006 285.885)"
    sidebar-foreground: "oklch(0.985 0 0)"
    sidebar-primary: "oklch(0.768 0.233 130.85)"
    sidebar-primary-foreground: "oklch(0.274 0.072 132.109)"
    sidebar-accent: "oklch(0.274 0.006 286.033)"
    sidebar-accent-foreground: "oklch(0.985 0 0)"
    sidebar-border: "oklch(1 0 0 / 10%)"
    sidebar-ring: "oklch(0.552 0.016 285.938)"
typography:
  sans:
    family: Geist Variable
    fallback: ui-sans-serif, system-ui, sans-serif
  heading:
    family: Bricolage Grotesque Variable
    fallback: Geist Variable, sans-serif
  scale:
    display:
      size: 3rem
      lineHeight: 1.05
      weight: 600
      tracking: "-0.03em"
      family: heading
    h1:
      size: 2.25rem
      lineHeight: 1.1
      weight: 600
      tracking: "-0.02em"
      family: heading
    h2:
      size: 1.875rem
      lineHeight: 1.2
      weight: 600
      tracking: "-0.02em"
      family: heading
    h3:
      size: 1.5rem
      lineHeight: 1.33
      weight: 600
      tracking: "-0.015em"
      family: heading
    h4:
      size: 1.25rem
      lineHeight: 1.4
      weight: 600
      tracking: "-0.01em"
      family: heading
    title:
      size: 1.125rem
      lineHeight: 1.55
      weight: 600
      tracking: "-0.01em"
      family: heading
    body:
      size: 1rem
      lineHeight: 1.5
      weight: 400
      tracking: "0"
      family: sans
    body-sm:
      size: 0.875rem
      lineHeight: 1.43
      weight: 400
      tracking: "0"
      family: sans
    label:
      size: 0.875rem
      lineHeight: 1.43
      weight: 500
      tracking: "0"
      family: sans
    caption:
      size: 0.75rem
      lineHeight: 1.33
      weight: 500
      tracking: "0.01em"
      family: sans
    overline:
      size: 0.75rem
      lineHeight: 1.33
      weight: 600
      tracking: "0.08em"
      family: sans
rounded:
  base: 0.625rem
  sm: 0.375rem
  md: 0.5rem
  lg: 0.625rem
  xl: 0.875rem
  "2xl": 1.125rem
  "3xl": 1.375rem
  "4xl": 1.625rem
spacing:
  base: 0.25rem
  controls:
    xs: 1.5rem
    sm: 1.75rem
    md: 2rem
    lg: 2.25rem
components:
  button:
    variants: [default, outline, secondary, ghost, destructive, link]
    sizes: [xs, sm, default, lg, icon-xs, icon-sm, icon, icon-lg]
    heights:
      xs: 1.5rem
      sm: 1.75rem
      default: 2rem
      lg: 2.25rem
      icon: 2rem
    focus: "3px ring-ring/50"
---

# Akbarerde Design System

Dokumen ini adalah acuan visual dan interaksi untuk antarmuka Akbarerde. Fondasinya berasal dari preset shadcn/ui **`b3QwSmPho`**, dengan satu kustomisasi lokal: **Bricolage Grotesque** untuk heading/display, sementara **Geist** tetap menjadi font body dan UI.

Sumber kebenaran token adalah [`packages/ui/src/styles/globals.css`](../packages/ui/src/styles/globals.css). Dokumen ini menjelaskan cara memakai token tersebut, bukan menggantikannya. Jika ada perbedaan antara dokumen dan CSS, CSS menang.

> **Status implementasi:** seluruh komponen shadcn/ui untuk preset ini sudah terpasang di `packages/ui/src/components` lewat `shadcn add --all`. Komponen dalam dokumen ini adalah standar yang harus diikuti saat memakainya.

---

## 1. Ringkasan & karakter

| Aspek            | Nilai                                              |
| ---------------- | -------------------------------------------------- |
| Gaya             | Nova — compact, padding rapi, kontrol default 32px |
| Netral           | Zinc — abu-abu dingin dengan sedikit chroma        |
| Aksen            | Lime — satu warna aksi utama                       |
| Body/UI          | Geist Variable                                     |
| Heading/display  | Bricolage Grotesque Variable                       |
| Ikon             | Lucide                                             |
| Radius           | 10px base                                          |
| Library primitif | Base UI, bukan Radix                               |
| Dark mode        | Class `.dark`                                      |

Karakter yang ingin dicapai: **produk yang padat, tenang, dan presisi, dengan satu aksen lime yang tegas.** Bricolage memberi karakter pada hierarki atas tanpa mengorbankan keterbacaan UI di ukuran kecil.

---

## 2. Prinsip desain

1. **Compact by default.** Gunakan kontrol 32px, grid 4px, dan jarak yang cukup untuk pemindaian cepat. Jangan membuat layout longgar hanya karena ada ruang.
2. **Satu aksen.** Lime hanya untuk aksi utama, state aktif, atau sorotan data. Struktur memakai zinc dan permukaan muted.
3. **Border-first.** Prioritaskan border 1px dan permukaan datar. Shadow hanya untuk lapisan mengambang seperti dialog, popover, dan dropdown.
4. **Token semantik.** Gunakan `bg-primary`, `text-muted-foreground`, `border-border`; jangan pernah memakai warna mentah seperti `bg-lime-400` atau `text-emerald-600`.
5. **Aksesibel sejak awal.** Fokus terlihat, kontras diuji, keyboard berfungsi, dan kegagalan kontras yang diketahui didokumentasikan di [Known gaps](#16-known-gaps).
6. **Base UI.** Gunakan `render` untuk mengganti elemen, bukan `asChild`. Cek `base` dari `npx shadcn@latest info --json` sebelum menulis komposisi.

---

## 3. Preset & source of truth

### 3.1 Metadata preset

| Properti            | Nilai                                           |
| ------------------- | ----------------------------------------------- |
| Kode                | `b3QwSmPho`                                     |
| Style               | `nova`                                          |
| Base                | Base UI                                         |
| Base color          | `zinc`                                          |
| Theme               | `lime`                                          |
| Chart color         | `lime`                                          |
| Font preset         | `geist`                                         |
| Font heading preset | `inherit`                                       |
| Ikon                | `lucide`                                        |
| Radius              | `default`                                       |
| Menu color          | `default`                                       |
| Menu accent         | `subtle`                                        |
| URL builder         | <https://ui.shadcn.com/create?preset=b3QwSmPho> |

Kustomisasi lokal:

| Properti          | Nilai                                                                             |
| ----------------- | --------------------------------------------------------------------------------- |
| Heading/display   | Bricolage Grotesque Variable                                                      |
| Sumber            | `@fontsource-variable/bricolage-grotesque`                                        |
| Axis yang dipakai | `wght` (200–800)                                                                  |
| Lisensi           | OFL-1.1                                                                           |
| Alasan            | Geist untuk UI kecil; Bricolage untuk hierarki atas agar brand terasa lebih hidup |

### 3.2 Perintah verifikasi

```bash
# Melihat isi preset.
npx shadcn@latest preset decode b3QwSmPho

# Melihat preset yang terdeteksi pada workspace UI.
npx shadcn@latest preset resolve -c packages/ui --json

# Melihat konfigurasi proyek.
npx shadcn@latest info --json -c apps/web
```

### 3.3 Catatan penting

- `packages/ui/package.json` adalah tempat dependency UI.
- `packages/ui/src/styles/globals.css` adalah tempat token warna, font, radius, dan dark mode.
- `packages/ui/src/components` adalah tempat komponen shadcn.
- `apps/web` mengonsumsi UI lewat alias `@workspace/ui/*`.
- `packages/ui/components.json` saat ini mencatat `baseColor: neutral`, sedangkan CSS dan preset memakai `zinc`. Ini adalah metadata yang stale. **Percayai CSS, bukan field tersebut.** Perbaiki hanya saat sengaja melakukan re-theme.
- Menjalankan `npx shadcn@latest apply b3QwSmPho` akan menimpa token, termasuk `--font-heading` kembali ke `inherit`. Setelah apply, pasang ulang kustomisasi Bricolage.

---

## 4. Warna

### 4.1 Prinsip

- **Zinc** adalah warna struktur: canvas, teks, border, permukaan.
- **Lime** adalah warna aksi dan data. Jangan pakai lime untuk dekorasi acak.
- **Merah** hanya untuk error/destructive.
- **Border dan input** adalah garis struktural, bukan warna teks.
- **Alpha** di dark mode dipakai untuk border dan input; jangan diganti dengan abu-abu solid.
- Semua warna di bawah ditulis dalam OKLCH (sumber) dan hex sRGB (perkiraan untuk desain/QA).

### 4.2 Token warna

| Token                        | Light                                    | Dark                                     | Kelas Tailwind                    | Penggunaan              |
| ---------------------------- | ---------------------------------------- | ---------------------------------------- | --------------------------------- | ----------------------- |
| `background`                 | `oklch(1 0 0)` · `#ffffff`               | `oklch(0.141 0.005 285.823)` · `#09090b` | `bg-background`                   | Canvas halaman          |
| `foreground`                 | `oklch(0.141 0.005 285.823)` · `#09090b` | `oklch(0.985 0 0)` · `#fafafa`           | `text-foreground`                 | Teks utama              |
| `card`                       | `oklch(1 0 0)` · `#ffffff`               | `oklch(0.21 0.006 285.885)` · `#18181b`  | `bg-card`                         | Permukaan card          |
| `card-foreground`            | `oklch(0.141 0.005 285.823)` · `#09090b` | `oklch(0.985 0 0)` · `#fafafa`           | `text-card-foreground`            | Teks di card            |
| `popover`                    | `oklch(1 0 0)` · `#ffffff`               | `oklch(0.21 0.006 285.885)` · `#18181b`  | `bg-popover`                      | Panel mengambang        |
| `popover-foreground`         | `oklch(0.141 0.005 285.823)` · `#09090b` | `oklch(0.985 0 0)` · `#fafafa`           | `text-popover-foreground`         | Teks di popover         |
| `primary`                    | `oklch(0.841 0.238 128.85)` · `#9ae600`  | `oklch(0.768 0.233 130.85)` · `#7ccf00`  | `bg-primary`                      | Fill aksi utama         |
| `primary-foreground`         | `oklch(0.405 0.101 131.063)` · `#35530e` | `oklch(0.405 0.101 131.063)` · `#35530e` | `text-primary-foreground`         | Teks di atas lime       |
| `secondary`                  | `oklch(0.967 0.001 286.375)` · `#f4f4f5` | `oklch(0.274 0.006 286.033)` · `#27272a` | `bg-secondary`                    | Permukaan sekunder      |
| `secondary-foreground`       | `oklch(0.21 0.006 285.885)` · `#18181b`  | `oklch(0.985 0 0)` · `#fafafa`           | `text-secondary-foreground`       | Teks sekunder           |
| `muted`                      | `oklch(0.967 0.001 286.375)` · `#f4f4f5` | `oklch(0.274 0.006 286.033)` · `#27272a` | `bg-muted`                        | Band/permukaan tenang   |
| `muted-foreground`           | `oklch(0.552 0.016 285.938)` · `#71717b` | `oklch(0.705 0.015 286.067)` · `#9f9fa9` | `text-muted-foreground`           | Teks deskriptif         |
| `accent`                     | `oklch(0.967 0.001 286.375)` · `#f4f4f5` | `oklch(0.274 0.006 286.033)` · `#27272a` | `bg-accent`                       | Hover/aktif netral      |
| `accent-foreground`          | `oklch(0.21 0.006 285.885)` · `#18181b`  | `oklch(0.985 0 0)` · `#fafafa`           | `text-accent-foreground`          | Teks di accent          |
| `destructive`                | `oklch(0.577 0.245 27.325)` · `#e7000b`  | `oklch(0.704 0.191 22.216)` · `#ff6467`  | `text-destructive`                | Error/destructive       |
| `border`                     | `oklch(0.92 0.004 286.32)` · `#e4e4e7`   | `oklch(1 0 0 / 10%)` · `#ffffff` 10%     | `border-border`                   | Border struktural       |
| `input`                      | `oklch(0.92 0.004 286.32)` · `#e4e4e7`   | `oklch(1 0 0 / 15%)` · `#ffffff` 15%     | `border-input`                    | Border field            |
| `ring`                       | `oklch(0.705 0.015 286.067)` · `#9f9fa9` | `oklch(0.552 0.016 285.938)` · `#71717b` | `ring-ring`                       | Focus ring              |
| `chart-1`                    | `oklch(0.897 0.196 126.665)` · `#bbf451` | sama                                     | `bg-chart-1`                      | Data viz terang         |
| `chart-2`                    | `oklch(0.768 0.233 130.85)` · `#7ccf00`  | sama                                     | `bg-chart-2`                      | Data viz                |
| `chart-3`                    | `oklch(0.648 0.2 131.684)` · `#5ea500`   | sama                                     | `bg-chart-3`                      | Data viz                |
| `chart-4`                    | `oklch(0.532 0.157 131.589)` · `#497d00` | sama                                     | `bg-chart-4`                      | Data viz gelap          |
| `chart-5`                    | `oklch(0.453 0.124 130.933)` · `#3c6300` | sama                                     | `bg-chart-5`                      | Data viz tergelap       |
| `sidebar`                    | `oklch(0.985 0 0)` · `#fafafa`           | `oklch(0.21 0.006 285.885)` · `#18181b`  | `bg-sidebar`                      | Rail navigasi           |
| `sidebar-foreground`         | `oklch(0.141 0.005 285.823)` · `#09090b` | `oklch(0.985 0 0)` · `#fafafa`           | `text-sidebar-foreground`         | Teks sidebar            |
| `sidebar-primary`            | `oklch(0.648 0.2 131.684)` · `#5ea500`   | `oklch(0.768 0.233 130.85)` · `#7ccf00`  | `bg-sidebar-primary`              | Aksi di sidebar         |
| `sidebar-primary-foreground` | `oklch(0.986 0.031 120.757)` · `#f7fee7` | `oklch(0.274 0.072 132.109)` · `#192e03` | `text-sidebar-primary-foreground` | Teks di sidebar-primary |
| `sidebar-accent`             | `oklch(0.967 0.001 286.375)` · `#f4f4f5` | `oklch(0.274 0.006 286.033)` · `#27272a` | `bg-sidebar-accent`               | Hover/aktif sidebar     |
| `sidebar-accent-foreground`  | `oklch(0.21 0.006 285.885)` · `#18181b`  | `oklch(0.985 0 0)` · `#fafafa`           | `text-sidebar-accent-foreground`  | Teks di sidebar-accent  |
| `sidebar-border`             | `oklch(0.92 0.004 286.32)` · `#e4e4e7`   | `oklch(1 0 0 / 10%)` · `#ffffff` 10%     | `border-sidebar-border`           | Border sidebar          |
| `sidebar-ring`               | `oklch(0.705 0.015 286.067)` · `#9f9fa9` | `oklch(0.552 0.016 285.938)` · `#71717b` | `ring-sidebar-ring`               | Focus di sidebar        |

### 4.3 Matriks kontras

Nilai dihitung dari OKLCH. Ambang WCAG: **4.5:1** untuk teks normal, **3:1** untuk teks besar dan komponen non-teks.

| Pasangan                                         | Light |  Dark | Status                               |
| ------------------------------------------------ | ----: | ----: | ------------------------------------ |
| `foreground` / `background`                      | 19.89 | 19.05 | Lulus AAA                            |
| `muted-foreground` / `background`                |  4.83 |  7.56 | Lulus AA                             |
| `primary-foreground` / `primary`                 |  5.68 |  4.46 | Lulus (light); **borderline** (dark) |
| `secondary-foreground` / `secondary`             | 16.11 | 14.26 | Lulus AAA                            |
| `accent-foreground` / `accent`                   | 16.11 | 14.26 | Lulus AAA                            |
| `destructive` / `background`                     |  4.76 |  6.88 | Lulus AA                             |
| `sidebar-foreground` / `sidebar`                 | 19.05 | 16.98 | Lulus AAA                            |
| `sidebar-primary-foreground` / `sidebar-primary` |  2.96 |  7.47 | **Gagal** (light); lulus (dark)      |
| `primary` / `background`                         |  1.54 | 10.21 | Gagal sebagai teks; fill saja        |
| `ring` / `background`                            |  2.63 |  4.12 | **Di bawah 3:1** (light)             |

### 4.4 Aturan pemakaian warna

1. **Lime adalah fill, bukan teks.** `text-primary` di atas putih hanya 1.54:1. Gunakan `bg-primary text-primary-foreground` untuk tombol, atau `text-chart-4` / `text-foreground` untuk teks.
2. **Varian `link` perlu perhatian.** `Button` varian `link` memakai `text-primary`; di light mode kontrasnya gagal. Untuk link teks, gunakan `text-foreground underline underline-offset-4` atau `text-chart-4`. Jika mempertahankan varian `link`, tambahkan underline dan uji di light mode.
3. **Hindari `sidebar-primary` di light mode** untuk item navigasi berisi teks kecil. Kontras 2.96:1. Gunakan `sidebar-accent` + `sidebar-accent-foreground`, atau override `--sidebar-primary-foreground` menjadi hijau gelap.
4. **`primary-foreground` di dark mode 4.46:1.** Untuk teks normal, ini sedikit di bawah AA. Gunakan untuk label tombol yang tebal/large, atau gelapkan `--primary-foreground` jika tombol lime dipakai untuk teks kecil.
5. **Border bukan teks.** `border-border` dan `border-input` hanya untuk garis. Jangan memakainya sebagai warna teks atau ikon.
6. **Dark mode memakai alpha.** Border 10% dan input 15% putih. Jangan menggantinya dengan `border-zinc-800`; alpha menjaga elevasi permukaan.
7. **Jangan memakai warna mentah.** Tidak ada `bg-lime-400`, `text-emerald-600`, `border-gray-200`. Selalu token semantik.
8. **Gunakan `cn()`** untuk penggabungan class kondisional; jangan menulis ternary template literal.

### 4.5 Warna data

| Token     | Hex       | Kontras vs putih | Saran                                         |
| --------- | --------- | ---------------: | --------------------------------------------- |
| `chart-1` | `#bbf451` |             1.30 | Fill area/bar besar; jangan untuk garis tipis |
| `chart-2` | `#7ccf00` |             1.96 | Bar/area; sertakan label                      |
| `chart-3` | `#5ea500` |             3.06 | Garis minimal 2px; cukup untuk non-teks       |
| `chart-4` | `#497d00` |             4.96 | Garis, teks data, sumbu                       |
| `chart-5` | `#3c6300` |             7.05 | Teks data, garis tipis, kontras tinggi        |

Aturan:

- Jangan mengandalkan warna saja. Tambahkan label, pola, atau bentuk berbeda.
- Untuk line chart di light mode, prioritaskan `chart-4` atau `chart-5`.
- Untuk bar/area, `chart-1`–`chart-3` boleh, tetapi beri label nilai dan sumbu yang jelas.
- Di dark mode, semua chart tetap memakai nilai yang sama; uji ulang karena latar berubah.

### 4.6 Do & Don't warna

| Do                                               | Don't                         |
| ------------------------------------------------ | ----------------------------- |
| `bg-primary text-primary-foreground`             | `bg-[#9ae600] text-[#35530e]` |
| `text-muted-foreground` untuk deskripsi          | `text-gray-500`               |
| `border-border` untuk garis                      | `border-zinc-200`             |
| `bg-destructive/10 text-destructive` untuk error | `bg-red-100 text-red-600`     |
| `chart-4` untuk garis data di light mode         | `chart-1` untuk garis 1px     |

---

## 5. Tipografi

### 5.1 Keluarga font

| Peran           | Font                         | Fallback                                         | Catatan                                                         |
| --------------- | ---------------------------- | ------------------------------------------------ | --------------------------------------------------------------- |
| Body/UI         | Geist Variable               | `ui-sans-serif, system-ui, sans-serif`           | Netral, teknis, nyaman di 12–16px                               |
| Heading/display | Bricolage Grotesque Variable | `Geist Variable, sans-serif`                     | Ekspresif, untuk hierarki atas                                  |
| Mono            | belum didefinisikan          | `ui-monospace, SFMono-Regular, Menlo, monospace` | Gunakan system mono untuk kode; tambahkan Geist Mono jika perlu |

Bricolage Grotesque adalah variable font dengan axis `opsz`, `wdth`, dan `wght`. Implementasi saat ini mengimpor axis **`wght`** saja (200–800) dari Fontsource. Tidak ada italic.

### 5.2 Skala tipografi

Skala ini adalah rekomendasi pemakaian, bukan utility yang dipaksakan. Gunakan kelas Tailwind yang sesuai.

| Token      | Ukuran / line-height     | Weight | Tracking | Font    | Pemakaian                   |
| ---------- | ------------------------ | -----: | -------: | ------- | --------------------------- |
| `display`  | 48px / 1.05 (`text-5xl`) |    600 |  -0.03em | Heading | Hero, landing page          |
| `h1`       | 36 / 40px (`text-4xl`)   |    600 |  -0.02em | Heading | Judul halaman               |
| `h2`       | 30 / 36px (`text-3xl`)   |    600 |  -0.02em | Heading | Section utama               |
| `h3`       | 24 / 32px (`text-2xl`)   |    600 | -0.015em | Heading | Subsection                  |
| `h4`       | 20 / 28px (`text-xl`)    |    600 |  -0.01em | Heading | Judul grup                  |
| `title`    | 18 / 28px (`text-lg`)    |    600 |  -0.01em | Heading | Dialog/Card title           |
| `body`     | 16 / 24px (`text-base`)  |    400 |        0 | Sans    | Long-form                   |
| `body-sm`  | 14 / 20px (`text-sm`)    |    400 |        0 | Sans    | Default UI                  |
| `label`    | 14 / 20px (`text-sm`)    |    500 |        0 | Sans    | Label form                  |
| `caption`  | 12 / 16px (`text-xs`)    |    500 |   0.01em | Sans    | Helper, metadata            |
| `overline` | 12 / 16px (`text-xs`)    |    600 |   0.08em | Sans    | Kategori, uppercase         |
| `data`     | 14 / 20px (`text-sm`)    |    500 |        0 | Sans    | Angka/tabel; `tabular-nums` |

### 5.3 Implementasi font

```css
@import "@fontsource-variable/geist";
@import "@fontsource-variable/bricolage-grotesque";

@theme inline {
  --font-sans: "Geist Variable", sans-serif;
  --font-heading: "Bricolage Grotesque Variable", "Geist Variable", sans-serif;
}
```

Pemakaian:

```tsx
<h1 className="font-heading text-3xl font-semibold tracking-tight">
  Judul halaman
</h1>
<p className="text-sm text-muted-foreground">
  Deskripsi singkat.
</p>
```

Catatan:

- `font-heading` adalah utility Tailwind yang dihasilkan dari `--font-heading`.
- Tidak semua komponen shadcn otomatis memakai `font-heading`. `Button` tidak memakainya. Untuk `CardTitle`, `DialogTitle`, atau judul section, tambahkan `font-heading` secara eksplisit.
- Jangan menulis `font-family` langsung di komponen. Gunakan `font-heading` atau `font-sans`.

### 5.4 Aturan Bricolage Grotesque

- Hanya untuk **heading dan display**, bukan body, label, tombol, tabel, atau paragraf panjang.
- Ukuran minimum **18px**; ideal **20px+**. Jangan memakai Bricolage di bawah 18px.
- Weight 500–700. Untuk judul besar, 600 sudah cukup; hindari 800 kecuali untuk hero yang sangat besar.
- Tracking negatif hanya untuk ukuran besar: -0.01em sampai -0.03em.
- Jangan memakai italic (tidak tersedia di import saat ini).
- Jangan memakai `font-stretch` kecuali mengimpor `standard.css`; import default hanya `wght`.
- Untuk teks panjang di dalam card, tetap gunakan Geist.

### 5.5 Loading & performa

- Font di-self-host lewat Fontsource; tidak ada request ke Google Fonts.
- `font-display: swap` sudah disediakan oleh Fontsource.
- Import default `@fontsource-variable/bricolage-grotesque` membawa subset latin/latin-ext/vietnamese dengan axis `wght`; file latin sekitar 40KB.
- Jika butuh optical sizing, impor `@fontsource-variable/bricolage-grotesque/opsz.css`.
- Jika butuh width axis, impor `@fontsource-variable/bricolage-grotesque/standard.css` (lebih besar). Jangan mengimpor semua axis tanpa alasan.
- Untuk hero yang sangat penting, pertimbangkan `<link rel="preload">` untuk file latin; jangan preload semua subset.

### 5.6 Do & Don't tipografi

| Do                                    | Don't                                       |
| ------------------------------------- | ------------------------------------------- |
| `font-heading text-3xl font-semibold` | `font-[Bricolage] text-[42px]`              |
| `text-sm leading-5` untuk UI          | `text-base` untuk semua kontrol compact     |
| `tabular-nums` untuk angka tabel      | Angka rata kiri tanpa `tabular-nums`        |
| Maksimal 3 ukuran heading per layar   | 5 ukuran heading berbeda dalam satu halaman |
| `text-muted-foreground` untuk caption | `text-gray-400`                             |

---

## 6. Spacing & layout

### 6.1 Grid

- Basis: **4px** (`0.25rem`).
- Gunakan `gap-*`, bukan `space-x-*` atau `space-y-*`.
- Untuk stack vertikal: `flex flex-col gap-*`.
- Untuk form: `FieldGroup` + `gap-4`/`gap-6`.

### 6.2 Tinggi kontrol

| Ukuran    | Tinggi | Kelas    | Pemakaian                      |
| --------- | -----: | -------- | ------------------------------ |
| `xs`      |   24px | `h-6`    | Aksi sangat compact, icon-only |
| `sm`      |   28px | `h-7`    | Toolbar padat                  |
| `default` |   32px | `h-8`    | Default Nova                   |
| `lg`      |   36px | `h-9`    | Aksi utama, form besar         |
| `icon`    |   32px | `size-8` | Icon button default            |
| `icon-xs` |   24px | `size-6` | Icon button compact            |
| `icon-sm` |   28px | `size-7` | Icon button kecil              |
| `icon-lg` |   36px | `size-9` | Icon button besar              |

Saat menambahkan `Input`, `Select`, `Textarea`, dan kontrol form lain, samakan tinggi defaultnya dengan **32px** agar form tidak misalign.

### 6.3 Layout halaman

| Properti                | Rekomendasi    |
| ----------------------- | -------------- |
| Padding halaman mobile  | 16px (`px-4`)  |
| Padding halaman tablet  | 24px (`px-6`)  |
| Padding halaman desktop | 32px (`px-8`)  |
| Lebar konten standar    | 1280px         |
| Lebar konten lebar      | 1440px         |
| Lebar prose             | 720px          |
| Jarak antar-section     | 24 / 32 / 48px |
| Padding card            | 24px (`p-6`)   |
| Gap form                | 16 / 24px      |
| Gap field internal      | 8px            |

### 6.4 Breakpoint

| Nama  |  Lebar | Perilaku                                    |
| ----- | -----: | ------------------------------------------- |
| `sm`  |  640px | Mulai layout dua kolom untuk kontrol kecil  |
| `md`  |  768px | Sidebar bisa tampil tetap; tabel lebih lega |
| `lg`  | 1024px | Layout desktop penuh                        |
| `xl`  | 1280px | Konten maksimum standar                     |
| `2xl` | 1536px | Konten lebar                                |

### 6.5 Do & Don't layout

| Do                          | Don't                                           |
| --------------------------- | ----------------------------------------------- |
| `flex flex-col gap-4`       | `space-y-4`                                     |
| `size-8` untuk kotak 32×32  | `w-8 h-8`                                       |
| `max-w-7xl mx-auto`         | Layout full-width tanpa batas baca              |
| `grid gap-6 md:grid-cols-2` | Grid dengan lebar tetap yang overflow di mobile |
| Padding 16/24/32 bertahap   | Padding 8px di semua breakpoint                 |

---

## 7. Radius, border, elevasi, fokus

### 7.1 Radius

`--radius` = **0.625rem (10px)**.

| Kelas         | Nilai | Pemakaian                           |
| ------------- | ----: | ----------------------------------- |
| `rounded-sm`  |   6px | Aksen kecil, checkbox               |
| `rounded-md`  |   8px | Item menu, select, command          |
| `rounded-lg`  |  10px | Button, input, select, tab, popover |
| `rounded-xl`  |  14px | Card, dialog, command               |
| `rounded-2xl` |  18px | Toast, container besar              |
| `rounded-3xl` |  22px | Panel besar/hero                    |
| `rounded-4xl` |  26px | Badge pill, elemen dekoratif        |

Aturan: jangan memakai radius di luar skala. Untuk kontrol kecil, `Button` memakai `rounded-[min(var(--radius-md),10px)]`; jangan menambah `rounded-full` kecuali untuk avatar/badge pill.

### 7.2 Border

- Border struktural: **1px**.
- Light: `border-border` (`#e4e4e7`); input sama.
- Dark: `border-border` = putih 10%; `border-input` = putih 15%.
- Jangan memakai border lebih dari 1px untuk struktur biasa; 2px hanya untuk state terpilih/fokus.
- Jangan memakai `<hr>`; gunakan `Separator`.

### 7.3 Elevasi

Tema tidak mendefinisikan skala shadow kustom. Gunakan shadow bawaan komponen Tailwind/shadcn.

| Lapisan          | Shadow                         | Catatan                      |
| ---------------- | ------------------------------ | ---------------------------- |
| Page/card datar  | `shadow-none` atau `shadow-sm` | Border tetap terlihat        |
| Dropdown/popover | `shadow-md`                    | Ikuti bawaan komponen        |
| Dialog/sheet     | `shadow-lg`                    | Overlay + shadow             |
| Toast            | `shadow-lg`                    | Jangan menumpuk shadow ganda |

Prinsip: **border-first.** Shadow tidak boleh menjadi satu-satunya pembeda permukaan. Jangan menambahkan shadow dekoratif pada card atau button.

### 7.4 Fokus

- Global: `outline-ring/50`.
- Button: `focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50`.
- Field: ikuti ring bawaan komponen; jangan menghapus `outline`.
- Focus ring light mode hanya 2.63:1 terhadap putih. Untuk komponen penting, pertimbangkan mempertebal ring atau menggelapkan `--ring`; uji dengan keyboard.
- Jangan memakai `outline-none` tanpa pengganti focus yang terlihat.

### 7.5 Do & Don't

| Do                              | Don't                        |
| ------------------------------- | ---------------------------- |
| `rounded-lg` untuk button/input | `rounded-[7px]`              |
| `border` 1px                    | `border-2` untuk semua card  |
| `shadow-sm` + border            | Shadow besar tanpa border    |
| `focus-visible:ring-3`          | `outline-none` tanpa ring    |
| `Separator`                     | `<hr>` atau `div` border-top |

---

## 8. Ikonografi

- Library: **Lucide** (`lucide-react`).
- Stroke default: 2.
- Ukuran: 16px untuk inline, 20px untuk navigasi, 24px untuk fitur/empty state.
- Di dalam `Button`, gunakan `data-icon`:
  ```tsx
  <Button>
    <SearchIcon data-icon="inline-start" />
    Cari
  </Button>
  ```
- Jangan menambahkan `size-4` pada ikon di dalam komponen; komponen mengatur ukuran lewat CSS.
- Icon-only button wajib punya `aria-label`:
  ```tsx
  <Button size="icon" aria-label="Tutup">
    <XIcon />
  </Button>
  ```
- Ikon dekoratif: `aria-hidden="true"`.
- Ikon yang tidak jelas maknanya: bungkus dengan `Tooltip`.
- Jangan memakai emoji sebagai ikon UI.

---

## 9. Motion

- Durasi standar: **150ms** untuk warna/opacity, **200ms** untuk overlay.
- `Button` memakai `transition-all` dan `active:translate-y-px` untuk feedback tekan.
- Hover hanya mengubah warna/opacity; jangan mengubah ukuran layout.
- Dialog/sheet: fade + zoom/translate halus.
- Hormati `prefers-reduced-motion`; matikan animasi dekoratif.
- Jangan memakai bounce, parallax, atau animasi yang menunda aksi.
- Loading: `Skeleton` untuk placeholder, `Spinner` untuk aksi singkat.

---

## 10. Komponen

### 10.1 Inventaris

| Komponen                                                                            | Status    | Catatan        |
| ----------------------------------------------------------------------------------- | --------- | -------------- |
| `Button`                                                                            | Terpasang | Komponen dasar |
| `Input`, `Textarea`, `Select`, `Checkbox`, `RadioGroup`, `Switch`, `Label`, `Field` | Terpasang | Standar form   |
| `Card`, `Badge`, `Table`, `Avatar`, `Skeleton`, `Empty`                             | Terpasang | Surface & data |
| `Tabs`, `Breadcrumb`, `Sidebar`, `Pagination`, `Command`                            | Terpasang | Navigasi       |
| `Dialog`, `Sheet`, `Drawer`, `AlertDialog`, `Popover`, `Tooltip`, `DropdownMenu`    | Terpasang | Overlay & menu |
| `Alert`, `Progress`, `Spinner`, `Sonner`/`toast`                                    | Terpasang | Feedback       |
| `Chart`                                                                             | Terpasang | Data viz       |

Total ada **63 file komponen** di `packages/ui/src/components`. Item `form` tidak menghasilkan file terpisah karena registry Base UI mengarahkannya ke `Field`.

Tambahkan komponen dari root:

```bash
pnpm dlx shadcn@latest add <nama-komponen> -c apps/web
```

Komponen akan mendarat di `packages/ui/src/components`. Setelah add, baca file hasil generate dan perbaiki import/komposisi jika perlu.

### 10.2 Button

**Varian**

| Varian        | Karakter                     | Pemakaian                                    |
| ------------- | ---------------------------- | -------------------------------------------- |
| `default`     | Lime fill + teks hijau gelap | Aksi utama, satu per area                    |
| `outline`     | Border + background          | Aksi sekunder di atas canvas                 |
| `secondary`   | Abu netral                   | Aksi sekunder di dalam card/toolbar          |
| `ghost`       | Tanpa fill sampai hover      | Aksi tersier, item menu, toolbar             |
| `destructive` | Merah tinted                 | Hapus/reset; konfirmasi dengan `AlertDialog` |
| `link`        | Teks + underline saat hover  | Navigasi teks; waspadai kontras light mode   |

**Ukuran**

| Ukuran    |  Tinggi | Kegunaan            |
| --------- | ------: | ------------------- |
| `xs`      |    24px | Aksi sangat compact |
| `sm`      |    28px | Toolbar padat       |
| `default` |    32px | Default             |
| `lg`      |    36px | Aksi utama/form     |
| `icon`    | 32×32px | Icon-only           |
| `icon-xs` | 24×24px | Icon-only compact   |
| `icon-sm` | 28×28px | Icon-only kecil     |
| `icon-lg` | 36×36px | Icon-only besar     |

**State**

| State    | Perilaku                                                                                                                                               |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Hover    | `default` → `bg-primary/80`; `outline` → `bg-muted`; `secondary` → color-mix +5% foreground; `ghost` → `bg-muted`; `destructive` → `bg-destructive/20` |
| Active   | `translate-y-px` (kecuali trigger popup)                                                                                                               |
| Focus    | Border `ring`, ring 3px `ring/50`                                                                                                                      |
| Disabled | `pointer-events-none opacity-50`                                                                                                                       |
| Invalid  | Border destructive + ring destructive/20                                                                                                               |
| Loading  | `Spinner` + `disabled`; jangan pakai prop `isLoading`                                                                                                  |

**Contoh**

```tsx
import { Button } from "@workspace/ui/components/button"
import { PlusIcon } from "lucide-react"

export function Actions() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button>
        <PlusIcon data-icon="inline-start" />
        Tambah
      </Button>
      <Button variant="outline">Batal</Button>
      <Button variant="ghost">Lihat detail</Button>
      <Button variant="destructive">Hapus</Button>
    </div>
  )
}
```

**Aturan**

- Satu aksi utama per area; sisanya `outline`, `secondary`, atau `ghost`.
- Jangan memakai `destructive` untuk aksi yang bisa dibatalkan tanpa konfirmasi.
- Jangan memakai `link` untuk aksi yang mengubah data; gunakan `ghost` atau `outline`.
- Jangan menaruh ikon tanpa `data-icon`; jangan memberi ukuran manual pada ikon di dalam Button.
- Untuk loading, gunakan `Spinner` + `disabled`, bukan mengganti label dengan "Loading...".

### 10.3 Form

- Gunakan `FieldGroup` + `Field`; jangan membuat form dari `div` + `space-y-*`.
- Setiap field punya `FieldLabel`; placeholder bukan pengganti label.
- Deskripsi: `FieldDescription` dengan `text-muted-foreground`.
- Error: `data-invalid` pada `Field`, `aria-invalid` pada kontrol, pesan `text-destructive`.
- Disabled: `data-disabled` pada `Field`, `disabled` pada kontrol.
- `InputGroup` untuk prefix/suffix, tombol di dalam input, atau unit.
- Opsi 2–7: `ToggleGroup`, bukan loop `Button`.
- Grup checkbox/radio: `FieldSet` + `FieldLegend`.
- Tinggi default kontrol: 32px, samakan dengan Button.
- Jangan memakai `space-y-*` untuk form; gunakan `gap-*`.
- Jangan menyembunyikan label; gunakan `sr-only` hanya jika desain benar-benar menuntut.

Contoh:

```tsx
<FieldGroup>
  <Field>
    <FieldLabel htmlFor="email">Email</FieldLabel>
    <Input id="email" type="email" />
    <FieldDescription>Kami tidak akan membagikan email Anda.</FieldDescription>
  </Field>
  <Field data-invalid>
    <FieldLabel htmlFor="password">Kata sandi</FieldLabel>
    <Input id="password" type="password" aria-invalid />
    <FieldDescription>Kata sandi minimal 8 karakter.</FieldDescription>
  </Field>
</FieldGroup>
```

### 10.4 Surface & data

**Card**

- Gunakan komposisi lengkap: `CardHeader` → `CardTitle` / `CardDescription` / `CardAction` → `CardContent` → `CardFooter`.
- Jangan menaruh semua konten di `CardContent`.
- `CardTitle` diberi `font-heading text-lg font-semibold`; `CardDescription` memakai `text-sm text-muted-foreground`.
- Card memakai border + shadow tipis; jangan menambah shadow dekoratif.

**Badge**

- Gunakan `Badge` untuk status/label; jangan membuat `span` berwarna sendiri.
- Varian: `default`, `secondary`, `outline`, `destructive`.
- Jangan memakai badge untuk aksi yang bisa diklik; gunakan Button.

**Table**

- Gunakan `Table` + `TableHeader` + `TableBody` + `TableRow` + `TableCell`.
- Angka rata kanan + `tabular-nums`.
- Header sticky untuk tabel panjang.
- Di mobile: izinkan horizontal scroll atau ubah menjadi card; jangan memaksa kolom sempit.
- Gunakan `Empty` untuk keadaan kosong, bukan baris tabel kosong.

**Avatar**

- Selalu sediakan `AvatarFallback`; jangan hanya mengandalkan gambar.
- Ukuran: 24/32/40/48px; gunakan `size-*`.

**Skeleton & Empty**

- `Skeleton` untuk placeholder loading; jangan membuat `div animate-pulse`.
- `Empty` untuk keadaan kosong; sertakan judul, deskripsi, dan satu aksi.

### 10.5 Navigasi

- **Tabs:** `TabsTrigger` harus di dalam `TabsList`; jangan render trigger langsung di `Tabs`.
- **Breadcrumb:** gunakan untuk hierarki 2+ level; jangan untuk navigasi utama.
- **Sidebar:** gunakan `SidebarProvider` + `Sidebar`; di mobile ubah menjadi `Sheet`.
- **Item aktif sidebar:** gunakan `sidebar-accent` + `sidebar-accent-foreground`; hindari `sidebar-primary` di light mode sampai kontras diperbaiki.
- **Pagination:** gunakan `Pagination`; jangan membuat tombol angka manual.
- **Command palette:** `Command` di dalam `Dialog`; gunakan `CommandGroup` dan `CommandItem`.

### 10.6 Overlay

- **Dialog** untuk modal fokus; **Sheet** untuk panel samping; **Drawer** untuk bottom sheet mobile; **AlertDialog** untuk konfirmasi destruktif.
- Setiap Dialog/Sheet/Drawer wajib punya `Title`. Jika tidak ingin terlihat, gunakan `className="sr-only"`.
- Sertakan `Description` untuk konteks; gunakan `sr-only` jika perlu.
- Footer: aksi utama di kanan (desktop), urutan vertikal di mobile.
- Fokus masuk ke overlay saat dibuka dan kembali ke trigger saat ditutup.
- Jangan menumpuk dua modal; gunakan satu dialog dengan konten bertahap.
- Untuk Base UI, gunakan `render` pada trigger, bukan `asChild`.

### 10.7 Feedback

| Kebutuhan            | Komponen          | Catatan                                   |
| -------------------- | ----------------- | ----------------------------------------- |
| Pesan inline         | `Alert`           | Untuk error/info yang menetap             |
| Notifikasi sementara | `toast` (Base UI) | `toast.add({ title, description, type })` |
| Progress             | `Progress`        | Untuk proses terukur                      |
| Loading singkat      | `Spinner`         | Di dalam Button atau area kecil           |
| Placeholder          | `Skeleton`        | Untuk konten yang belum siap              |
| Kosong               | `Empty`           | Judul + deskripsi + aksi                  |

Jangan memakai toast untuk error validasi field; gunakan pesan inline di `Field`. Jangan memakai `Alert` untuk notifikasi yang hilang otomatis.

### 10.8 Aturan komposisi

- Gunakan komponen yang sudah ada sebelum membuat markup baru.
- Item selalu di dalam group: `SelectItem` → `SelectGroup`; `DropdownMenuItem` → `DropdownMenuGroup`; `CommandItem` → `CommandGroup`.
- Jangan memakai `asChild`; gunakan `render` (Base UI).
- Jangan memakai `space-x-*`/`space-y-*`; gunakan `gap-*`.
- Gunakan `size-*` jika lebar = tinggi.
- Gunakan `truncate`, bukan `overflow-hidden text-ellipsis whitespace-nowrap`.
- Jangan menambahkan `z-index` manual pada Dialog/Sheet/Popover; komponen mengatur stacking.
- Jangan memakai `dark:` untuk mengganti warna; gunakan token semantik.
- Gunakan `cn()` untuk class kondisional.
- Gunakan `Separator`, `Skeleton`, `Badge`, `Empty`, dan `Alert`; jangan membangun ulang dengan `div`.

### 10.9 Catatan Base UI

- `base` proyek adalah **Base UI**. Cek dengan `npx shadcn@latest info --json`.
- Ganti trigger dengan `render={<a href="..." />}`, bukan `asChild`.
- `Select` Base UI membutuhkan `items` agar label tampil benar, bukan raw value.
- Toast Base UI memakai `toast.add`, bukan `toast()` dari sonner.
- Dialog/Sheet trigger juga memakai `render`.

---

## 11. Pola layar

### 11.1 App shell

- `SidebarProvider` membungkus layout.
- `Sidebar` untuk navigasi utama; `SidebarInset` untuk konten.
- Header berisi breadcrumb, pencarian, dan user menu.
- Mobile: sidebar menjadi `Sheet`.
- Konten memakai `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.

### 11.2 Halaman form

- Judul halaman `font-heading text-4xl font-semibold`.
- Form di dalam `Card` atau `max-w-2xl`.
- `FieldGroup` + `Field`; tombol aksi di footer.
- Error di atas field terkait; ringkasan error di atas form jika banyak.
- Tombol utama di kanan; batal di kiri.

### 11.3 Data table

- Toolbar: pencarian, filter, tombol tambah.
- `Table` di dalam `Card`.
- Angka rata kanan + `tabular-nums`; status memakai `Badge`.
- Pagination di bawah.
- Empty state memakai `Empty`.
- Loading memakai `Skeleton` baris.

### 11.4 Dialog CRUD

- Trigger `Button` → `Dialog` dengan `DialogTitle` dan `DialogDescription`.
- Form singkat di dalam dialog; form panjang gunakan halaman atau `Sheet`.
- Footer: `Button variant="outline"` untuk batal, `Button` untuk simpan.
- Hapus: `AlertDialog` dengan nama item dan aksi `destructive`.
- Setelah sukses, tutup dialog dan tampilkan toast.

### 11.5 Empty, loading, error

| Keadaan    | Komposisi                                           |
| ---------- | --------------------------------------------------- |
| Empty      | `Empty` + ikon 24px + judul + deskripsi + satu aksi |
| Loading    | `Skeleton` untuk konten; `Spinner` untuk aksi       |
| Error      | `Alert` destructive + pesan + tombol coba lagi      |
| No results | `Empty` dengan saran filter                         |

### 11.6 Settings

- `Tabs` untuk kategori.
- `Card` per grup setting.
- `FieldGroup` untuk form.
- Simpan per section atau sticky footer; jangan campur keduanya tanpa alasan.

### 11.7 Dashboard

- Grid `Card` untuk metrik; angka `text-2xl font-semibold tabular-nums`.
- `Chart` untuk tren; gunakan `chart-4`/`chart-5` untuk garis di light mode.
- Label sumbu `text-xs text-muted-foreground`.
- Jangan menampilkan lebih dari 4 metrik utama sekaligus.

---

## 12. Aksesibilitas

Target: **WCAG 2.2 AA**.

- **Kontras:** lihat [matriks kontras](#43-matriks-kontras). Perbaiki atau hindari pasangan yang gagal.
- **Fokus:** semua elemen interaktif harus terlihat fokusnya. Jangan menghapus ring.
- **Keyboard:** semua aksi bisa diakses Tab/Enter/Space/Escape. Dialog mengembalikan fokus ke trigger.
- **Label:** setiap input punya label; icon-only button punya `aria-label`.
- **Error:** gunakan `data-invalid` + `aria-invalid`; pesan error terkait field.
- **Target size:** minimal 24×24px (ukuran `xs` Nova). Untuk touch, utamakan 44×44px.
- **Motion:** hormati `prefers-reduced-motion`.
- **Dark mode:** uji ulang kontras dan border; jangan hanya membalik warna.
- **Screen reader:** teks tersembunyi memakai `sr-only`; jangan menyembunyikan konten penting.
- **Warna data:** jangan mengandalkan warna saja; tambahkan label/pola.

Checklist sebelum merge:

- [ ] Bisa dipakai hanya dengan keyboard.
- [ ] Focus ring terlihat di light dan dark.
- [ ] Teks normal ≥ 4.5:1; teks besar/non-teks ≥ 3:1.
- [ ] Icon-only button punya label.
- [ ] Dialog/Sheet punya Title.
- [ ] Error field terbaca screen reader.
- [ ] Tidak ada overflow horizontal di 375px.

---

## 13. Responsif

- Mobile-first; mulai dari 375px.
- Jangan memakai lebar tetap untuk konten utama; gunakan `max-w-*` + `w-full`.
- Breakpoint mengikuti Tailwind: `sm` 640, `md` 768, `lg` 1024, `xl` 1280, `2xl` 1536.
- Tabel: horizontal scroll atau card di mobile.
- Sidebar: `Sheet` di bawah `md`.
- Dialog: `Drawer` untuk aksi mobile jika konten pendek.
- Heading display: `text-4xl sm:text-5xl`; jangan memaksa 48px di 375px.
- Tombol aksi utama boleh full-width di mobile, tetapi tidak di desktop.
- Uji 375px, 768px, dan 1280px; pastikan `document.documentElement.scrollWidth <= innerWidth`.

---

## 14. Konten & voice

- Bahasa UI: **Indonesia** yang ringkas dan langsung.
- Gunakan sentence case untuk judul, label, dan tombol.
- Tombol memakai verba: "Simpan", "Tambah", "Hapus", "Coba lagi".
- Hindari jargon internal; jelaskan istilah teknis sekali saja.
- Error: jelaskan apa yang terjadi + langkah berikutnya. Contoh: "Email tidak valid. Periksa formatnya, lalu coba lagi."
- Empty state: jelaskan mengapa kosong + aksi berikutnya.
- Konfirmasi destruktif: sebut nama item dan konsekuensinya.
- Jangan memakai "Silakan" berulang; langsung ke aksi.
- Angka: gunakan format Indonesia (pemisah ribuan titik, desimal koma) jika target pengguna Indonesia.
- Tanggal: gunakan format yang konsisten; jangan campur `DD/MM/YYYY` dan `MM/DD/YYYY`.

---

## 15. Do & Don't global

| Do                                        | Don't                                      |
| ----------------------------------------- | ------------------------------------------ |
| Gunakan `Button` dengan varian yang tepat | Membuat `div` yang terlihat seperti tombol |
| `bg-primary text-primary-foreground`      | `bg-lime-400 text-lime-900`                |
| `FieldGroup` + `Field`                    | `div` + `space-y-4` untuk form             |
| `DialogTitle` wajib ada                   | Dialog tanpa title                         |
| `Skeleton` untuk loading                  | `div animate-pulse`                        |
| `Badge` untuk status                      | `span` dengan warna hardcoded              |
| `Empty` untuk keadaan kosong              | `div` kosong tanpa pesan                   |
| `Separator`                               | `<hr>`                                     |
| `size-8`                                  | `w-8 h-8`                                  |
| `font-heading` untuk judul                | Bricolage untuk body/label                 |
| `render` (Base UI)                        | `asChild`                                  |
| `gap-4`                                   | `space-y-4`                                |

---

## 16. Known gaps

1. **Metadata `baseColor` tidak sinkron.** `packages/ui/components.json` mencatat `neutral`, sedangkan CSS dan preset memakai `zinc`. Jangan mengandalkan field tersebut.
2. **Varian `link` gagal kontras di light mode.** `text-primary` = 1.54:1 di atas putih. Gunakan underline + warna yang lebih gelap, atau perbaiki varian.
3. **`sidebar-primary` gagal kontras di light mode.** `sidebar-primary-foreground` = 2.96:1 di atas `sidebar-primary`. Hindari untuk teks kecil; gunakan `sidebar-accent`.
4. **`primary-foreground` dark mode 4.46:1.** Sedikit di bawah AA untuk teks normal. Gunakan untuk label tebal/large atau sesuaikan token.
5. **Focus ring light mode 2.63:1.** Di bawah 3:1 untuk indikator fokus. Uji dan pertimbangkan ring yang lebih gelap/tebal.
6. **Chart-1 dan chart-2 rendah kontras di atas putih.** Gunakan chart-4/chart-5 untuk garis dan teks data.
7. **Belum ada font mono.** Gunakan system mono untuk kode; pertimbangkan Geist Mono jika konsistensi dibutuhkan.
8. **Belum ada utility tipe `type-*`.** Skala tipografi adalah rekomendasi; penerapannya lewat kelas Tailwind.
9. **Tidak semua komponen memakai `font-heading`.** Tambahkan class secara eksplisit pada judul.
10. **Belum ada design system page/visual regression.** Kontras dan tampilan belum diuji otomatis.
11. **Override Bricolage tidak tersimpan di preset.** `apply b3QwSmPho` akan mengembalikan `--font-heading` ke `inherit`; pasang ulang setelah apply.
12. **Border/input dark mode memakai alpha.** Di beberapa layar alpha 10% bisa terlalu tipis; uji di monitor nyata.

---

## 17. Governance

### 17.1 Menambah komponen

```bash
# Dari root monorepo.
pnpm dlx shadcn@latest add <nama-komponen> -c apps/web

# Atau dari apps/web.
pnpm dlx shadcn@latest add <nama-komponen>
```

Setelah add:

1. Baca file hasil generate.
2. Perbaiki import yang tidak sesuai alias (`@workspace/ui/...`).
3. Pastikan komposisi mengikuti aturan (group, title, fallback).
4. Ganti ikon jika bukan Lucide.
5. Jalankan typecheck dan lint.

### 17.2 Mengubah token

- Edit hanya `packages/ui/src/styles/globals.css`.
- Jangan menambah file CSS baru untuk token.
- Setiap token baru harus punya pasangan light/dark dan didaftarkan di `@theme inline` jika perlu utility.
- Update tabel di dokumen ini.
- Hitung ulang kontras untuk pasangan teks/background yang terpengaruh.
- Uji dark mode dan focus ring.

### 17.3 Mengubah font

- Tambah dependency di `packages/ui/package.json`.
- Import di `globals.css` sebelum aturan lain.
- Set `--font-sans` atau `--font-heading` di `@theme inline`.
- Update frontmatter dan bagian tipografi di dokumen ini.
- Jika mengganti heading, pastikan komponen yang memakai `font-heading` diuji.
- Catat lisensi dan subset yang dipakai.

### 17.4 Checklist PR

- [ ] `pnpm typecheck` lulus.
- [ ] `pnpm lint` lulus.
- [ ] `pnpm build` lulus.
- [ ] Tidak ada warna mentah.
- [ ] Tidak ada `space-x-*`/`space-y-*`.
- [ ] Focus ring terlihat di light/dark.
- [ ] Kontras teks memenuhi ambang.
- [ ] Dialog/Sheet punya title.
- [ ] Icon-only button punya `aria-label`.
- [ ] Layout 375px tidak overflow.
- [ ] Bricolage hanya dipakai untuk heading/display.

### 17.5 Versioning

- Dokumen ini memakai versi `MAJOR.MINOR.PATCH`.
- Perubahan token yang mengubah tampilan luas: naikkan `MINOR` atau `MAJOR`.
- Perbaikan dokumentasi/typo: `PATCH`.
- Catat perubahan besar di commit message dan, jika perlu, changelog terpisah.

---

## 18. Referensi cepat

```tsx
// Aksi utama
<Button>Simpan</Button>

// Aksi sekunder
<Button variant="outline">Batal</Button>

// Aksi tersier
<Button variant="ghost">Lihat detail</Button>

// Destruktif
<Button variant="destructive">Hapus</Button>

// Icon-only
<Button size="icon" aria-label="Tutup">
  <XIcon />
</Button>

// Judul halaman
<h1 className="font-heading text-4xl font-semibold tracking-tight">
  Dashboard
</h1>

// Teks deskriptif
<p className="text-sm text-muted-foreground">
  Ringkasan aktivitas terbaru.
</p>

// Card
<Card>
  <CardHeader>
    <CardTitle className="font-heading text-lg">Metrik</CardTitle>
    <CardDescription>Ringkasan bulan ini.</CardDescription>
  </CardHeader>
  <CardContent>{/* ... */}</CardContent>
</Card>
```

---

Dokumen ini hidup. Setiap komponen baru, token baru, atau pengecualian harus memperbarui bagian yang relevan agar `DESIGN.md` tetap menjadi acuan yang dapat dipercaya.
