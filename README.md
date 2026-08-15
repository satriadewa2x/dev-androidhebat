# dev.androidhebat.com

Direktori aplikasi Android + halaman kebijakan privasi, di-host via GitHub Pages (Jekyll).

## Cara kerja

- Homepage (`index.html`) menampilkan daftar aplikasi dari `_data/apps.yml`.
- Setiap halaman kebijakan privasi adalah file di folder `_policies/`, otomatis
  ter-render jadi URL `/kebijakan-privasi-<slug>/` — tidak perlu build manual,
  GitHub Pages otomatis proses Jekyll setiap kali push.

## Cara menambah aplikasi baru

**1. Tambah data aplikasi** — edit `_data/apps.yml`, tambahkan blok baru:

```yaml
- name: "Nama Aplikasi"
  package: "com.kreatifvibecoding.namaaplikasi"
  tagline: "Deskripsi singkat satu-dua kalimat."
  status: live        # live | dev | planned
  version: "1.0.0"
  slug: "nama-aplikasi"
  playstore: "https://play.google.com/store/apps/details?id=..."
```

**2. Buat halaman kebijakan privasi** — buat file baru di `_policies/`,
nama file HARUS `kebijakan-privasi-<slug>.md` (slug sama seperti di atas):

```
_policies/kebijakan-privasi-nama-aplikasi.md
```

Isi front matter minimal:

```markdown
---
title: "Kebijakan Privasi — Nama Aplikasi"
updated: "15 Agustus 2026"
---

Isi kebijakan privasi di sini, boleh pakai heading `## Judul Bagian`,
list, **bold**, dan `code` seperti markdown biasa.
```

Tips: copy salah satu file di `_policies/` yang sudah ada sebagai starting point.

**3. Push**

```bash
git add .
git commit -m "add: kebijakan privasi Nama Aplikasi"
git push
```

Dalam 1–2 menit halaman baru otomatis live di:
`https://dev.androidhebat.com/kebijakan-privasi-nama-aplikasi/`

## Testing lokal (opsional)

```bash
bundle install
bundle exec jekyll serve
```

Buka `http://localhost:4000`.

## Setup GitHub Pages (sekali saja)

1. Repo harus **public**.
2. Settings → Pages → Source: `Deploy from a branch` → Branch: `main` / `(root)`.
3. Custom domain: `dev.androidhebat.com` (file `CNAME` sudah otomatis mengatur ini).
4. Di Cloudflare DNS, tambahkan CNAME record: `dev` → `<username>.github.io`,
   proxy status **DNS only** (matikan cloud oranye) sampai sertifikat HTTPS
   ter-issue, baru boleh diaktifkan lagi kalau mau.
