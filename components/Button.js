export default function Button({ children }) {
    return (
        <button className="px-6 py-4 bg-[#FFBE0B] sm:text-base text-sm rounded-3xl font-semibold">
            {children}
        </button>
    )
}