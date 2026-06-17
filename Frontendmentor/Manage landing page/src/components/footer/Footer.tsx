import Mobile from "./Mobile"
import Desktop from "./Desktop"

function Footer() {
    return (
        <footer className="bg-[#1E1E26] text-white p-8">
            <div className="lg:hidden mt-10">
                <Mobile />
            </div>
            {/* DESKTOP */}
            <div className="hidden lg:block">
                <Desktop />
            </div>
        </footer>
    )
}

export default Footer