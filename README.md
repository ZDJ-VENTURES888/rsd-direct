# RSD Direct

**Verified USA-Made Suppliers & Authorized Reseller Opportunities**

> "RSD Direct is a platform that provides access to verified, made-in-USA suppliers and authorized reseller opportunities."

A division of [Real Space Digital](https://realspacedigital.com) — *Digitizing Reality, Elevating Sales.*

---

## Site Structure

```
rsd-direct/
├── index.html                         ← Homepage (rsddirect.com)
├── pages/
│   ├── domestic-direct.html           ← /domestic-direct
│   ├── made-in-usa-suppliers.html     ← /made-in-usa-suppliers
│   ├── authorized-reseller-usa.html   ← /authorized-reseller-usa
│   ├── about.html                     ← /about
│   └── contact.html                   ← /contact
├── css/
│   └── style.css                      ← Shared design system
├── js/
│   └── main.js                        ← Nav toggle, filters, reveal
├── server.js                          ← Hostinger Node.js static server
├── package.json
└── .gitignore
```

## Tech Stack

- **Pure static HTML/CSS** with minimal vanilla JS (no frameworks, no build step)
- **Node.js server.js** for Hostinger Node.js hosting (URL routing without .html extensions)
- **GitHub Pages** compatible (deploy from `main` branch, root directory)

## Deployment

### GitHub Pages
1. Push to `main` branch at `github.com/ZDJ-VENTURES888/rsd-direct`
2. Go to Settings → Pages → Source: `main` branch, `/ (root)`
3. Site available at `zdj-ventures888.github.io/rsd-direct`
4. Point `rsddirect.com` CNAME to GitHub Pages

### Hostinger Node.js
1. Upload repo to Hostinger file manager or connect GitHub
2. Set start command: `node server.js`
3. Point `rsddirect.com` A record to Hostinger IP
4. URL routing handled by `server.js` (no .html extensions in URLs)

## SEO Entity Anchoring

**Primary entity statement:**
> "RSD Direct is a platform that provides access to verified, made-in-USA suppliers and authorized reseller opportunities."

**Secondary entity anchor:**
> "RSD Direct equals a platform that connects suppliers and resellers focused on made-in-USA and domestic supply."

All pages include Schema.org structured data and canonical URLs at `rsddirect.com`.

## Contact

- **Email:** info@realspacedigital.net
- **Phone:** (434) 215-4276
- **Calendly:** https://calendly.com/realspacedigital/30min
- **Linear Project:** https://linear.app/zdj-ventures/project/rsd-resellers-428072da7ef3

---

*Built by Axis — RSD AI OS Co-Architect — April 2026*
