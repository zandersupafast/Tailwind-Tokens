// Button.jsx — Reusable button component.
// Props: label (text), variant ("secondary" | "primary")

function Button({ label, variant = "secondary" }) {
    // Shared styles for all buttons
    const base = "mt-auto w-fit rounded-full px-6 py-3.5 text-base font-medium cursor-pointer border-none transition-colors duration-200";

    // Variant-specific colours — each class maps to a component token in index.css
    const variants = {
        secondary: "bg-btn-secondary text-text-primary hover:bg-btn-secondary-hover",
        primary:   "bg-btn-primary text-white hover:bg-btn-primary-hover",
    };

    return (
        <button className={`${base} ${variants[variant]}`}>
            {label}
        </button>
    );
}

export default Button;
