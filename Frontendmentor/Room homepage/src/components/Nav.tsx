type NavProps = {
  mobile?: boolean;
};

function Nav({ mobile = false }: NavProps) {
  const linkClass = mobile
    ? ""
    : `
      relative
      after:absolute
      after:left-1/2
      after:-translate-x-1/2
      after:-bottom-2
      after:h-[2px]
      after:w-0
      after:bg-white
      after:transition-all
      after:duration-300
      hover:after:w-6
    `;

  return (
    <nav>
      <ul
        className={
          mobile
            ? "flex gap-12 font-semibold"
            : "flex gap-8 text-white"
        }
      >
        <li>
          <a href="#" className={linkClass}>
            home
          </a>
        </li>

        <li>
          <a href="#" className={linkClass}>
            shop
          </a>
        </li>

        <li>
          <a href="#" className={linkClass}>
            about
          </a>
        </li>

        <li>
          <a href="#" className={linkClass}>
            contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;