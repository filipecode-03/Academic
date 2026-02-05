import illustration from '../assets/images/illustration-intro.png'
import illustration2 from '../assets/images/illustration-stay-productive.png'
import curvyDesktop from '../assets/images/bg-curvy-desktop.svg'
import curvyMobile from '../assets/images/bg-curvy-mobile.svg'
import iconAcess from '../assets/images/icon-access-anywhere.svg'
import iconSecurity from '../assets/images/icon-security.svg'
import iconTime from '../assets/images/icon-collaboration.svg'
import iconFile from '../assets/images/icon-any-file.svg'
import iconArrow from '../assets/images/icon-arrow.svg'
import iconArrowWhite from '../assets/images/icon-arrow-white.svg'
import aspas from '../assets/images/bg-quotes.png'
import profileOne from '../assets/images/profile-1.jpg'
import profileTwo from '../assets/images/profile-2.jpg'
import profileThree from '../assets/images/profile-3.jpg'
import { useForm } from "react-hook-form";
import { useState } from 'react'

function Prin() {

    const [hovered, setHovered] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    
    function onSubmit(data) {
        console.log(data);
    }

    return (
        <main className='bg-[#27314b]'>
            <section className='absolute lg:left-50 lg:right-50 lg:top-30 text-center p-8'>
                <img src={illustration} alt="illustration" className='w-100 lg:w-140 mx-auto' />
                <h1 className='text-[30px] lg:text-[40px] lg:w-[80%] lg:mx-auto mt-10'>All your files in one secure location, accessible anywhere.</h1>
                <p className='mt-5 lg:text-[20px] lg:w-[58%] lg:mx-auto'>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
                <button className='mt-10 bg-linear-to-r from-[#50C6D4] to-[#3EAFCF] hover:from-[#85DEE4] hover:to-[#6BD3DA] cursor-pointer transition rounded-full p-3 px-20'>Get Started</button>
            </section>
            <img src={curvyMobile} alt="curvy" className='w-full pt-70 block lg:hidden' />
            <img src={curvyDesktop} alt="curvy" className='hidden pt-130 lg:block w-full' />
            <section className='bg-[#181F2B] py-90 lg:pt-1 lg:pb-140'>
                <section className='px-8 lg:px-50 text-center grid gap-20 lg:gap-30 lg:grid-cols-2'>
                    <div>
                        <img src={iconAcess} alt="acess" className='mx-auto' />
                        <h1 className='mt-8 text-[22px]'>Access your files, anywhere</h1>
                        <p className='mt-2 lg:w-[80%] lg:mx-auto'>The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
                    </div>
                    <div>
                        <img src={iconSecurity} alt="security" className='mx-auto' />
                        <h1 className='mt-8 text-[22px]'>Security you can trust</h1>
                        <p className='mt-2 lg:w-[85%] lg:mx-auto'>2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</p>
                    </div>
                    <div>
                        <img src={iconTime} alt="time" className='mx-auto' />
                        <h1 className='mt-8 text-[22px]'>Real-time collaboration</h1>
                        <p className='mt-2 lg:w-[85%] lg:mx-auto'>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                    </div>
                    <div>
                        <img src={iconFile} alt="file" className='mx-auto' />
                        <h1 className='mt-8 text-[22px]'>Store any type of file</h1>
                        <p className='mt-2 lg:w-[85%] lg:mx-auto'>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</p>
                    </div>
                </section>
                <section className='mt-20 lg:mt-40 p-8 lg:px-30 lg:flex lg:gap-15'>
                    <img src={illustration2} alt="illustration 2" className='w-100 lg:w-200 mx-auto' />
                    <div className='space-y-4 mt-15 lg:mt-30'>
                        <h1 className='text-center lg:text-left text-[24px] lg:text-[36px] lg:w-[60%] lg:leading-10'>Stay productive, wherever you are</h1>
                        <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
                        <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                        <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="flex text-[#62D6D0] hover:text-white items-center gap-2 border-b pb-1 border-current w-fit">
                            <a href="#">See how Fylo works</a>
                            <img src={hovered ? iconArrowWhite : iconArrow} alt="arrow" className='cursor-pointer' />
                        </div>
                    </div>
                </section>
                <section className='mt-20 p-12'>
                    <img src={aspas} alt="aspas" className='w-8 lg:w-15 ml-2 lg:ml-11' />
                    <div className='grid lg:grid-cols-3 gap-10 lg:absolute lg:w-[85%] lg:top-645 lg:left-25'>
                        <div className='p-8 bg-[#21293C] rounded-[5px]'>
                            <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                            <div className='flex items-center gap-2 mt-6'>
                                <img src={profileOne} alt="profile" className='rounded-full w-10' />
                                <div>
                                    <h1>Satish Patel</h1>
                                    <p>Founder & CEO, Huddle</p>
                                </div>
                            </div>
                        </div>
                        <div className='p-8 bg-[#21293C] rounded-[5px]'>
                            <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                            <div className='flex items-center gap-2 mt-6'>
                                <img src={profileTwo} alt="profile" className='rounded-full w-10' />
                                <div>
                                    <h1>Bruce McKenzie</h1>
                                    <p>Founder & CEO, Huddle</p>
                                </div>
                            </div>
                        </div>
                        <div className='p-8 bg-[#21293C] rounded-[5px]'>
                            <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                            <div className='flex items-center gap-2 mt-6'>
                                <img src={profileThree} alt="profile" className='rounded-full w-10' />
                                <div>
                                    <h1>Iva Boyd</h1>
                                    <p>Founder & CEO, Huddle</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='p-8 absolute top-975 lg:top-755 lg:left-50 lg:right-50'>
                    <div className='bg-[#1B2330] rounded-[10px] boxShadow text-center p-8 lg:px-20'>
                        <h1 className='text-[24px] lg:text-[40px]'>Get early access today</h1>
                        <p className='mt-4 lg:w-[80%] lg:mx-auto'>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
                        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 flex flex-col lg:flex-row lg:items-start lg:gap-5">
                            <div className="w-full lg:flex-1">
                                <input className="bg-white w-full p-3 pl-8 rounded-full text-black shadow-2xl"
                                       placeholder="email@example.com"
                                       type="email"
                                       {...register("email", {
                                        required: "Please enter a valid email address",
                                        })}
                                />
                                {errors.email && (
                                <span className="block text-left ml-8 mt-1 text-[14px] text-red-500">
                                    {errors.email.message}
                                </span>
                                )}
                            </div>
                            <button type="submit" className="mt-5 lg:mt-0 shrink-0 shadow-2xl p-3 px-6 rounded-full bg-linear-to-r from-[#51C7D5] to-[#3DAED0] hover:from-[#85DEE4] hover:to-[#6BD3DA] cursor-pointer transition">Get Started For Free</button>
                        </form>
                    </div>
                </section>
            </section>
        </main>
    )
}

export default Prin