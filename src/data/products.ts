export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    duration?: string;
    category: 'session' | 'package' | 'gift-card';
    image?: string;
}

export const products: Product[] = [
    {
        id: 'single-session-60',
        name: '60-Minute Massage Session',
        description: 'A full hour of therapeutic massage tailored to your needs. Perfect for addressing specific areas of concern or general relaxation.',
        price: 95.00,
        duration: '60 minutes',
        category: 'session'
    },
    {
        id: 'single-session-90',
        name: '90-Minute Massage Session',
        description: 'An extended session allowing for more comprehensive treatment. Ideal for addressing multiple areas or deeper therapeutic work.',
        price: 140.00,
        duration: '90 minutes',
        category: 'session'
    },
    {
        id: 'package-3x60',
        name: '3-Session Package (60min)',
        description: 'Save on a package of three 60-minute sessions. Book them when you need them.',
        price: 270.00,
        duration: '3 x 60 minutes',
        category: 'package'
    }
];
