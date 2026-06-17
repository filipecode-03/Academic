function About() {
    return (
        <div className="mt-20 flex flex-col gap-15">
            <div className="text-center">
                <h2 className="font-semibold text-[30px] leading-10 max-w-80 mx-auto">What's different about Manage?</h2>
                <p className="text-gray-500 text-[17px] max-w-90 mt-4 mx-auto">Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
            </div>
            <div className="pl-8 flex flex-col gap-10">
                <div>
                    <div className="bg-[#FFF0EB] flex rounded-l-full items-center gap-3">
                        <h2 className="bg-[#F3613C] px-6 py-2 font-semibold text-white rounded-full">01</h2>
                        <h3 className="font-semibold">Track company-wide progress</h3>
                    </div>
                    <p className="text-gray-500 mt-3 pr-5">See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.</p>
                </div>
                <div>
                    <div className="bg-[#FFF0EB] flex rounded-l-full items-center gap-3">
                        <h2 className="bg-[#F3613C] px-6 py-2 font-semibold text-white rounded-full">02</h2>
                        <h3 className="font-semibold">Advanced built-in reports</h3>
                    </div>
                    <p className="text-gray-500 mt-3 pr-5">Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.</p>
                </div>
                <div>
                    <div className="bg-[#FFF0EB] flex rounded-l-full items-center gap-3">
                        <h2 className="bg-[#F3613C] px-6 py-2 font-semibold text-white rounded-full">03</h2>
                        <h3 className="font-semibold">Everything you need in one pleace</h3>
                    </div>
                    <p className="text-gray-500 mt-3 pr-5">Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.</p>
                </div>
            </div>
        </div>
    )
}

export default About