import Stripe from 'stripe';

const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY, {
    apiVersion: '2023-10-16'
});

export async function createStripePaymentIntent(amount: number, productName: string) {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(amount * 100), // Convert to cents
            currency: 'usd',
            description: productName,
            automatic_payment_methods: {
                enabled: true,
            },
        });

        return {
            clientSecret: paymentIntent.client_secret
        };
    } catch (error) {
        console.error('Error creating payment intent:', error);
        throw error;
    }
}

export function validatePayPalTransaction(details: any) {
    // Implement PayPal transaction validation
    // This is a basic example - you should add more validation
    if (!details || !details.status || details.status !== 'COMPLETED') {
        throw new Error('Payment not completed');
    }
    
    return true;
}
