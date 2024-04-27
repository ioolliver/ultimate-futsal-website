export function UltimateGradient({ children } : { children?: React.ReactNode }) {
    return (
        <span className="bg-gradient-to-r from-uf-accent-2 to-uf-accent text-transparent bg-clip-text">{children || "ULTIMATE"}</span>
    )
}