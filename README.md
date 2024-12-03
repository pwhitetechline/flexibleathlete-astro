# Flexible Athlete Website

A modern, responsive website for Flexible Athlete, featuring an integrated e-commerce system for booking massage therapy sessions and purchasing gift cards.

## Features

- 🏃‍♂️ Showcase of massage therapy services and treatments
- 💳 Integrated payment processing with PayPal and Stripe
- 📱 Fully responsive design
- 🎁 Gift card system
- 📝 Client testimonials and reviews
- 📹 Video content integration
- 📅 Session booking system

## Tech Stack

- [Astro](https://astro.build/) - Web Framework
- [TypeScript](https://www.typescriptlang.org/) - Programming Language
- [Stripe](https://stripe.com/) - Payment Processing
- [PayPal](https://www.paypal.com/) - Payment Processing

## Getting Started

### Prerequisites

- Node.js 16 or higher
- npm or yarn
- PayPal Business Account
- Stripe Account

### Installation

1. Clone the repository:
   ```bash
   git clone [your-repo-url]
   cd astro-blog
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment variables:
   - Copy `.env.example` to `.env`
   - Update the values with your API keys

4. Start the development server:
   ```bash
   npm run dev
   ```

### Payment Integration Setup

#### PayPal Setup

1. Create a PayPal Business account:
   - Go to https://www.paypal.com/business
   - Sign up for a business account
   - Complete the verification process

2. Get API Credentials:
   - Visit https://developer.paypal.com/dashboard/
   - Navigate to "Apps & Credentials"
   - Create a new app for your website
   - Copy the Client ID

3. Update your `.env` file:
   ```env
   PUBLIC_PAYPAL_CLIENT_ID=your_client_id_here
   ```

#### Stripe Setup

1. Create a Stripe account:
   - Go to https://dashboard.stripe.com/register
   - Complete the registration process

2. Get API Keys:
   - Visit https://dashboard.stripe.com/apikeys
   - Get both Publishable Key and Secret Key
   - Start with test keys for development

3. Update your `.env` file:
   ```env
   PUBLIC_STRIPE_PUBLISHABLE_KEY=your_publishable_key_here
   STRIPE_SECRET_KEY=your_secret_key_here
   ```

### Product Management

Products are managed in `src/data/products.ts`. Each product has the following structure:

```typescript
interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    duration?: string;
    category: 'session' | 'package' | 'gift-card';
    image?: string;
}
```

To add or modify products:
1. Open `src/data/products.ts`
2. Add or modify products in the `products` array
3. Follow the existing format for consistency

## Development

### File Structure

```
src/
├── components/     # Reusable components
├── data/          # Data files (products, reviews, etc.)
├── layouts/       # Page layouts
├── lib/           # Utility functions
├── pages/         # Page components
└── styles/        # Global styles
```

### Key Files

- `src/pages/store.astro` - E-commerce functionality
- `src/lib/payment-utils.ts` - Payment processing utilities
- `src/data/products.ts` - Product definitions
- `src/pages/api/create-payment-intent.ts` - Stripe payment endpoint

## Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Preview the build:
   ```bash
   npm run preview
   ```

3. Deploy to your hosting platform of choice

### Important Notes

- Always use test API keys during development
- Switch to production API keys only when deploying to production
- Never commit `.env` file to version control
- Keep API keys secure and never expose them publicly
- Test the payment flow thoroughly in test mode before going live

## Security Considerations

- All payment processing is handled server-side
- API keys are stored in environment variables
- Client-side code only receives necessary payment tokens
- HTTPS is required for payment processing
- Input validation is implemented for all payment data

## Support

For support with:
- PayPal integration: https://developer.paypal.com/support/
- Stripe integration: https://support.stripe.com/
- Astro framework: https://docs.astro.build/

## License

[Your License Here]
