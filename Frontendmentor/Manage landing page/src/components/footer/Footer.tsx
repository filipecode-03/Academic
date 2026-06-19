import Mobile from "./Mobile";
import Desktop from "./Desktop";

function Footer() {
  return (
    <footer className="bg-[#1E1E26] text-white">
      <div className="mx-auto max-w-280 px-8 py-12 lg:px-0 lg:py-16">
        <div className="lg:hidden">
          <Mobile />
        </div>

        <div className="hidden lg:block">
          <Desktop />
        </div>
      </div>
    </footer>
  );
}

export default Footer;