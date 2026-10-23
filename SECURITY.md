# Authentication and dependency updates

The UI asks for a distinct API username/password at runtime. They remain in memory until sign-out or reload and are never saved in browser storage, URLs or NEXT_PUBLIC variables. The backend must configure bcrypt-hashed users as described in spotify-api/SECURITY.md. Covers are fetched with the same authorization header as metadata.

Use HTTPS for both the UI and API in production. Set NEXT_PUBLIC_API_BASE_URL to the API URL only; never include a credential in a public environment variable. Next.js is pinned to 15.5.28, the vendor's October 2026 maintenance security release. Review deployment history and rotate secrets if an affected release was exposed.
