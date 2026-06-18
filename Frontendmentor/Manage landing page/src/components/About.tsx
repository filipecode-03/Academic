function About() {
    return (
        <div className="mt-20 flex flex-col lg:flex-row lg:items-start lg:justify-between lg:max-w-280 lg:mx-auto gap-15 lg:gap-20">
  {/* Coluna esquerda */}
  <div className="px-8 text-center lg:w-111.25 lg:px-0 lg:text-left">
    <h2 className="text-[30px] font-semibold leading-10 lg:text-[40px] lg:leading-12">
      What's different about Manage?
    </h2>

    <p className="mt-6 text-[17px] text-gray-500 lg:max-w-87.5">
      Manage provides all the functionality your team needs, without the
      complexity. Our software is tailor-made for modern digital product teams.
    </p>
  </div>

  {/* Coluna direita */}
  <div className="pl-8 lg:w-135 lg:pl-0 flex flex-col gap-10">
    <div>
      <div className="flex items-center gap-3 rounded-l-full bg-[#FFF0EB] lg:bg-transparent">
        <h2 className="rounded-full bg-[#F3613C] px-6 py-2 font-semibold text-white">
          01
        </h2>

        <h3 className="font-semibold">
          Track company-wide progress
        </h3>
      </div>

      <p className="mt-4 pr-5 leading-7 text-gray-500 lg:pl-23 lg:pr-0">
        See how your day-to-day tasks fit into the wider vision. Go from
        tracking progress at the milestone level all the way down to the
        smallest of details. Never lose sight of the bigger picture again.
      </p>
    </div>

    <div>
      <div className="flex items-center gap-3 rounded-l-full bg-[#FFF0EB] lg:bg-transparent">
        <h2 className="rounded-full bg-[#F3613C] px-6 py-2 font-semibold text-white">
          02
        </h2>

        <h3 className="font-semibold">
          Advanced built-in reports
        </h3>
      </div>

      <p className="mt-4 pr-5 leading-7 text-gray-500 lg:pl-23 lg:pr-0">
        Set internal delivery estimates and track progress toward company goals.
        Our customisable dashboard helps you build out the reports you need to
        keep key stakeholders informed.
      </p>
    </div>

    <div>
      <div className="flex items-center gap-3 rounded-l-full bg-[#FFF0EB] lg:bg-transparent">
        <h2 className="rounded-full bg-[#F3613C] px-6 py-2 font-semibold text-white">
          03
        </h2>

        <h3 className="font-semibold">
          Everything you need in one place
        </h3>
      </div>

      <p className="mt-4 pr-5 leading-7 text-gray-500 lg:pl-23 lg:pr-0">
        Stop jumping from one service to another to communicate, store files,
        track tasks and share documents. Manage offers an all-in-one team
        productivity solution.
      </p>
    </div>
  </div>
</div>
    )
}

export default About