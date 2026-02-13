import iconOnline from '../src/assets/images/icon-online.svg'
import iconBudgeting from '../src/assets/images/icon-budgeting.svg'
import iconOnboarding from '../src/assets/images/icon-onboarding.svg'
import iconApi from '../src/assets/images/icon-api.svg'
import money from '../src/assets/images/image-currency.jpg'

function Main() {
    return (
        <main>
            <section className='bg-gray-100 text-center p-16'>
                <h1 className='text-[30px]'>Why choose Digitalbank?</h1>
                <p className='text-[14px]'>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mt-15">
                    <div>
                        <img src={iconOnline} alt="icon" className='mx-auto' />
                        <h2 className='mt-8'>Online Banking</h2>
                        <p className='mt-4 text-[14px]'>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                    </div>
                    <div>
                        <img src={iconBudgeting} alt="icon" className='mx-auto' />
                        <h2 className='mt-8'>Simple Budgeting</h2>
                        <p className='mt-4 text-[14px]'>See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
                    </div>
                    <div>
                        <img src={iconOnboarding} alt="icon" className='mx-auto' />
                        <h2 className='mt-8'>Fast Onboarding</h2>
                        <p className='mt-4 text-[14px]'>We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
                    </div>
                    <div>
                        <img src={iconApi} alt="icon" className='mx-auto' />
                        <h2 className='mt-8'>Open API</h2>
                        <p className='mt-4 text-[14px]'>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
                    </div>
                </div>
            </section>
            <section className='bg-[#FAFAFA] p-8 py-16'>
                <h1 className='text-center text-[35px]'>Latest Articles</h1>
                <div className='grid grid-cols-1 lg:grid-cols-4 mt-12'>
                    <div className='bg-white rounded-[5px]'>
                        <img src={money} alt="money" className='rounded-t-[5px]' />
                        <div className='p-8'>
                            <h4 className='text-[13px] text-gray-500'>By Claire Robinson</h4>
                            <h3 className='text-[18px]'>Receive money in any currency with no fees</h3>
                            <p>The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main