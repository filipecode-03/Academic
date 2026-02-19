import iconOnline from '../src/assets/images/icon-online.svg'
import iconBudgeting from '../src/assets/images/icon-budgeting.svg'
import iconOnboarding from '../src/assets/images/icon-onboarding.svg'
import iconApi from '../src/assets/images/icon-api.svg'
import money from '../src/assets/images/image-currency.jpg'
import food from '../src/assets/images/image-restaurant.jpg'
import plane from '../src/assets/images/image-plane.jpg'
import party from '../src/assets/images/image-confetti.jpg'

function Main() {
    return (
        <main>
            <section className='bg-gray-100 text-center lg:text-left p-16 lg:p-20 lg:px-30'>
                <h1 className='text-[30px] lg:text-[40px]'>Why choose Digitalbank?</h1>
                <p className='text-[15px] lg:text-[16px] text-gray-500 leading-4.5 lg:leading-6 lg:w-[45%] mt-2 lg:mt-4'>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-15 mt-15">
                    <div>
                        <img src={iconOnline} alt="icon" className='mx-auto lg:mx-0' />
                        <h2 className='mt-8 text-[25px]'>Online Banking</h2>
                        <p className='mt-4 text-[15px] lg:text-[16px] text-gray-500 leading-4.5 lg:leading-6'>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                    </div>
                    <div>
                        <img src={iconBudgeting} alt="icon" className='mx-auto lg:mx-0' />
                        <h2 className='mt-8 text-[25px]'>Simple Budgeting</h2>
                        <p className='mt-4 text-[15px] lg:text-[16px] text-gray-500 leading-4.5 lg:leading-6'>See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
                    </div>
                    <div>
                        <img src={iconOnboarding} alt="icon" className='mx-auto lg:mx-0' />
                        <h2 className='mt-8 text-[25px]'>Fast Onboarding</h2>
                        <p className='mt-4 text-[15px] lg:text-[16px] text-gray-500 leading-4.5 lg:leading-6'>We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
                    </div>
                    <div>
                        <img src={iconApi} alt="icon" className='mx-auto lg:mx-0' />
                        <h2 className='mt-8 text-[25px]'>Open API</h2>
                        <p className='mt-4 text-[15px] lg:text-[16px] text-gray-500 leading-4.5 lg:leading-6'>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
                    </div>
                </div>
            </section>
            <section className='bg-[#FAFAFA] p-8 py-16 lg:px-30'>
                <h1 className='text-center lg:text-left text-[35px]'>Latest Articles</h1>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 mt-12'>
                    <div className='bg-white rounded-[5px]'>
                        <img src={money} alt="money" className='rounded-t-[5px] lg:h-49.5 w-full' />
                        <div className='p-8'>
                            <h4 className='text-[13px] text-gray-500'>By Claire Robinson</h4>
                            <h3 className='text-[18px] mt-3 hover:text-green-400 cursor-pointer'>Receive money in any currency with no fees</h3>
                            <p className='text-gray-600 mt-1.5'>The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single…</p>
                        </div>
                    </div>
                    <div className='bg-white rounded-[5px]'>
                        <img src={food} alt="money" className='rounded-t-[5px]' />
                        <div className='p-8'>
                            <h4 className='text-[13px] text-gray-500'>By Wilson Hutton</h4>
                            <h3 className='text-[18px] mt-3 hover:text-green-400 cursor-pointer'>Treat yourself without worrying about money</h3>
                            <p className='text-gray-600 mt-1.5'>Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you…</p>
                        </div>
                    </div>
                    <div className='bg-white rounded-[5px]'>
                        <img src={plane} alt="money" className='rounded-t-[5px]' />
                        <div className='p-8'>
                            <h4 className='text-[13px] text-gray-500'>By Wilson Hutton</h4>
                            <h3 className='text-[18px] mt-3 hover:text-green-400 cursor-pointer'>Take your Digitalbank card wherever you go</h3>
                            <p className='text-gray-600 mt-1.5'>We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you…</p>
                        </div>
                    </div>
                    <div className='bg-white rounded-[5px]'>
                        <img src={party} alt="money" className='rounded-t-[5px]' />
                        <div className='p-8'>
                            <h4 className='text-[13px] text-gray-500'>By Claire Robinson</h4>
                            <h3 className='text-[18px] mt-3 hover:text-green-400 cursor-pointer'>Our invite-only Beta accounts are now live!</h3>
                            <p className='text-gray-600 mt-1.5'>After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site...</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main