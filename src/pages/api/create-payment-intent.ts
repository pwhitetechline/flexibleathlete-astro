import type { APIRoute } from 'astro';
import { createStripePaymentIntent } from '../../lib/payment-utils';

export const POST: APIRoute = async ({ request }) => {
    try {
        const { amount, productName } = await request.json();
        
        const { clientSecret } = await createStripePaymentIntent(amount, productName);
        
        return new Response(JSON.stringify({ clientSecret }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error('Error:', error);
        return new Response(JSON.stringify({ error: 'Failed to create payment intent' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};
