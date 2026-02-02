import illustration from '../assets/images/illustration-intro.png'
import illustration2 from '../assets/images/illustration-stay-productive.png'
import curvyDesktop from '../assets/images/bg-curvy-desktop.svg'
import curvyMobile from '../assets/images/bg-curvy-mobile.svg'
import iconAcess from '../assets/images/icon-access-anywhere.svg'
import iconSecurity from '../assets/images/icon-security.svg'
import iconTime from '../assets/images/icon-collaboration.svg'
import iconFile from '../assets/images/icon-any-file.svg'
import iconArrow from '../assets/images/icon-arrow.svg'

function Prin() {
    return (
        <main className=''>
            <section className='absolute text-center p-8'>
                <img src={illustration} alt="illustration" className='w-100 mx-auto' />
                <h1 className='text-[30px] mt-10'>All your files in one secure location, accessible anywhere.</h1>
                <p className='mt-5'>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
                <button className='mt-10 bg-linear-to-r from-[#50C6D4] to-[#3EAFCF] rounded-full p-3 px-20'>Get Started</button>
            </section>
            <img src={curvyMobile} alt="curvy" className='w-full pt-70' />
            <section className='bg-[#181F2B] pt-90'>
                <section className='px-8 text-center grid gap-20'>
                    <div>
                        <img src={iconAcess} alt="acess" className='mx-auto' />
                        <h1 className='mt-8 text-[22px]'>Access your files, anywhere</h1>
                        <p className='mt-2'>The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
                    </div>
                    <div>
                        <img src={iconSecurity} alt="security" className='mx-auto' />
                        <h1>Security you can trust</h1>
                        <p>2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</p>
                    </div>
                    <div>
                        <img src={iconTime} alt="time" className='mx-auto' />
                        <h1>Real-time collaboration</h1>
                        <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                    </div>
                    <div>
                        <img src={iconFile} alt="file" className='mx-auto' />
                        <h1>Store any type of file</h1>
                        <p>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</p>
                    </div>
                </section>
                <section className='mt-20'>
                    <img src={illustration2} alt="illustration 2" />
                    <div>
                        <h1 className='text-center'>Stay productive, wherever you are</h1>
                        <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
                        <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                        <div>
                            <a href="#">See how Fylo works</a>
                            <img src={iconArrow} alt="arrow" />
                        </div>
                    </div>
                </section>
            </section>
        </main>
    )
}

export default Prin