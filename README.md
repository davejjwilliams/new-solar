# New SOLAR

Re-creation of the UCL SOLAR Website using React + TypeScript + Vite

# Adding Publications

Publications are found in the src/publications.json file. Please add your new entries to this list.

TEMPLATE: Copy and fill in for new publications

```json
{
  "author": "Author Name(s)",
  "title": "Title of the Publication",
  "links": [
    { "text": "Link Label 1", "url": "https://example.com" }
    { "text": "Link Label 2", "url": "https://example.com" }
  ],
  "year": 2025,
  "venue": "Conference or Journal Name"
}
```

# Adding Members

## 1. Upload Member Image

Before adding a member, you should upload a picture. Member images are found under `/assets/member-images`.

## 2. Add new entry to `src/members.json`

Members are found in the `src/members.json` file. Please add/update members in this list.

Please be careful to include the `role` carefully from the, as this determines under which category the member is placed.

The `subtitle` appears under the member name and is optional. If you do not wish to include it, leave it as `"subtitle": ""`.

The `imgUrl` represents the name of the file under the `/assets/member-images` directory. For example, if you have a photo at `/assets/member-images/example.jpg`, the entry in this file would be `"imgUrl": "example.jpg"`.

TEMPLATE: Copy and fill in for new members
```json
{
  "name": "Member Name",
  "title":"Title, e.g. Professor, Dr, Mr, Ms, Mrs, Mx",
  "role": "Role, available types: academic, fellow, honoraryFellow, phd",
  "subtitle": "Optional text under the name, e.g. used for PhD Topics",
  "imgUrl": "example.jpeg",
  "webUrl": "Link to personal website"
}
```