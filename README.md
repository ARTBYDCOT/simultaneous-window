# Simultaneous Window — D.C.O.T.

**simultaneouswindow.xyz**

A multimedia art project connecting physical and digital walking in Bogotá.

## About

Simultaneous Window is an experimental cartography platform built by D.C.O.T. Parting from video and audio archives of daily commutes, the project builds a sense of simultaneity between real and digital life on the web. Each file provides a geolocation text file address on IPFS, building the decentralized web hypertext.

## Structure

```
simultaneouswindow/
├── index.html          ← Main site
├── css/
│   └── style.css       ← All styles
├── js/
│   └── main.js         ← Entries data + contribution system
├── admin/
│   └── index.html      ← Admin panel (password protected)
└── README.md
```

## Sections

- **Map** — uMap / OpenStreetMap experimental cartography of Bogotá
- **Experiences** — Video & audio archives of urban walks, geolocated on IPFS
- **Exhibitions** — History of physical and digital exhibitions
- **Metaverse** — Voxels space "Septimazo" (3D digital twin of Carrera Séptima)
- **Art Market** — NFT collectibles on Tezos / objkt.com
- **Contribute** — Public form for submitting geolocated experiences (admin-reviewed)
- **About** — Project description and network links

## Admin Panel

Access at `/admin/` — password protected. Change the password in `admin/index.html`:

```js
const ADMIN_PASSWORD = 'sw-admin-2024'; // ← change this before deploying
```

The admin panel lets you approve or reject user contributions before they appear on the public site.

## Adding Entries

Edit the `entries` array in `js/main.js` to add new experiences to the grid and sidebar.

## Deploy to Hostinger

1. Upload all files via FTP or Hostinger File Manager
2. Point your domain `simultaneouswindow.xyz` to the folder
3. No server-side dependencies — pure HTML/CSS/JS

## Network

- XTZ: `simultaneouswindow.tez`
- ETH: `dcot-art.eth.co`
- BTC: `14fDoUDKZ11REVuRxMSwKNvR36ToJ2UCM8`
- Objkt: [tz1NRH5vQHA62EKzSHXDZ4V8tXMzUuBCQToR](https://objkt.com/users/tz1NRH5vQHA62EKzSHXDZ4V8tXMzUuBCQToR)
- Voxels: [Septimazo Space](https://www.voxels.com/spaces/3a1173bc-9f73-457d-a567-20f9d849702c/play)

---

D.C.O.T. · Bogotá · 2018–
