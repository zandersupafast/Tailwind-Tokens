// Pricing.jsx — Page component that assembles pricing cards with plan data.

import PricingCard from '../components/PricingCard/PricingCard';

function Pricing() {
    const hobbyPlan = {
        title: 'Hobby',
        priceAmount: 'Free',
        pricePeriod: null,
        includesText: 'Includes:',
        features: ['No credit card required', 'Limited Agent requests', 'Limited Tab completions'],
        buttonText: 'Download',
        buttonVariant: 'secondary',
    };
    const proPlan = {
        title: 'Pro',
        priceAmount: '$20',
        pricePeriod: '/mo.',
        includesText: 'Everything in Hobby, plus:',
        features: [
            'Extended limits on Agent',
            'Unlimited Tab completions',
            'Background Agents',
            'Maximum context windows',
        ],
        buttonText: 'Get Pro',
        buttonVariant: 'primary',
    };

    return (
        <>
            <p className="fixed top-4 left-1/2 -translate-x-1/2 text-sm text-text-secondary bg-white px-4 py-2 rounded-lg shadow-sm">
                <strong className="text-text-primary">React App</strong> — running with Vite + Tailwind Tokens
            </p>

            <div className="flex gap-6 justify-center items-start">
                <PricingCard {...hobbyPlan} />
                <PricingCard {...proPlan} />
            </div>
        </>
    );
}

export default Pricing;
