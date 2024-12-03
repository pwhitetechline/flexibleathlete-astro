/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly PUBLIC_PAYPAL_CLIENT_ID: string;
    readonly PUBLIC_STRIPE_PUBLISHABLE_KEY: string;
    readonly STRIPE_SECRET_KEY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}