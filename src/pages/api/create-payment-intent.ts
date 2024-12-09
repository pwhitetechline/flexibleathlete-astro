import type { APIRoute } from 'astro';

// Removed Stripe payment intent logic as Stripe is no longer used.
// import { createStripePaymentIntent } from '../../lib/payment-utils';

export const POST: APIRoute = async ({ request }) => {
    return new Response(JSON.stringify({ error: 'Payment processing is not available.' }), {
        status: 501,
        headers: { 'Content-Type': 'application/json' }
    });
};
