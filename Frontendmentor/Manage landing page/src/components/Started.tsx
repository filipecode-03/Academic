function Started() {
    return (
        <div
  className="
    mt-2 lg:mt-30
    bg-[#F3613C]
    bg-[url('./assets/images/bg-simplify-section-mobile.svg')]
    lg:bg-[url('./assets/images/bg-simplify-section-desktop.svg')]
    bg-no-repeat
    bg-left-center
    lg:bg-right-center
    py-20
    px-8
  "
>
  <div
    className="
      mx-auto
      flex
      max-w-[1120px]
      flex-col
      items-center
      gap-8
      lg:flex-row
      lg:justify-between
    "
  >
    <h2
      className="
        text-center
        text-[40px]
        font-semibold
        leading-12
        text-white
        lg:max-w-[520px]
        lg:text-left
        lg:text-[42px]
        lg:leading-[48px]
      "
    >
      Simplify how your team works today.
    </h2>

    <button
      className="
        cursor-pointer
        rounded-full
        bg-white
        px-8
        py-3
        font-bold
        text-[#F3613C]
        shadow-lg
        transition
        hover:opacity-80
      "
    >
      Get Started
    </button>
  </div>
</div>
    )
}

export default Started