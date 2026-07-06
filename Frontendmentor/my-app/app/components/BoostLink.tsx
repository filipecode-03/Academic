import Get from "./Get";

function BoostLink() {
  return (
    <section
      className="
        boost-bg py-20 px-6
      "
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8">
        <h2 className="text-center text-3xl font-bold text-white md:text-4xl">
          Boost your links today
        </h2>

        <Get />
      </div>
    </section>
  );
}

export default BoostLink;