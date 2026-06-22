type NavProps = {
  mobile?: boolean;
};

function Nav({ mobile = false }: NavProps) {
  return (
    <nav>
      <ul
        className={
          mobile
            ? "flex gap-6 font-semibold"
            : "flex gap-8 text-white"
        }
      >
        <li>
          <a href="#">home</a>
        </li>

        <li>
          <a href="#">shop</a>
        </li>

        <li>
          <a href="#">about</a>
        </li>

        <li>
          <a href="#">contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;