import illustration from '../assets/images/illustration-intro.png'
import illustration2 from '../assets/images/illustration-stay-productive.png'
import curvyDesktop from '../assets/images/bg-curvy-desktop.svg'
import curvyMobile from '../assets/images/bg-curvy-mobile.svg'
import iconAcess from '../assets/images/icon-access-anywhere.svg'
import iconSecurity from '../assets/images/icon-security.svg'
import iconTime from '../assets/images/icon-collaboration.svg'
import iconFile from '../assets/images/icon-any-file.svg'
import iconArrow from '../assets/images/icon-arrow.svg'
import aspas from '../assets/images/bg-quotes.png'
import profileOne from '../assets/images/profile-1.jpg'
import profileTwo from '../assets/images/profile-2.jpg'
import profileThree from '../assets/images/profile-3.jpg'
import { useForm } from "react-hook-form";

function Prin() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    
    function onSubmit(data) {
        console.log(data);
    }

    return (
        <main>
            <section className='absolute text-center p-8'>
                <img src={illustration} alt="illustration" className='w-100 mx-auto' />
                <h1 className='text-[30px] mt-10'>All your files in one secure location, accessible anywhere.</h1>
                <p className='mt-5'>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
                <button className='mt-10 bg-linear-to-r from-[#50C6D4] to-[#3EAFCF] rounded-full p-3 px-20'>Get Started</button>
            </section>
            <img src={curvyMobile} alt="curvy" className='w-full pt-70' />
            <section className='bg-[#181F2B] py-90'>
                <section className='px-8 text-center grid gap-20 lg:grid-cols-2'>
                    <div>
                        <img src={iconAcess} alt="acess" className='mx-auto' />
                        <h1 className='mt-8 text-[22px]'>Access your files, anywhere</h1>
                        <p className='mt-2'>The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
                    </div>
                    <div>
                        <img src={iconSecurity} alt="security" className='mx-auto' />
                        <h1 className='mt-8 text-[22px]'>Security you can trust</h1>
                        <p className='mt-2'>2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</p>
                    </div>
                    <div>
                        <img src={iconTime} alt="time" className='mx-auto' />
                        <h1 className='mt-8 text-[22px]'>Real-time collaboration</h1>
                        <p className='mt-2'>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                    </div>
                    <div>
                        <img src={iconFile} alt="file" className='mx-auto' />
                        <h1 className='mt-8 text-[22px]'>Store any type of file</h1>
                        <p className='mt-2'>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</p>
                    </div>
                </section>
                <section className='mt-20 p-8'>
                    <img src={illustration2} alt="illustration 2" className='w-100 mx-auto' />
                    <div className='space-y-4 mt-15'>
                        <h1 className='text-center text-[24px]'>Stay productive, wherever you are</h1>
                        <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
                        <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                        <div className="flex text-[#62D6D0] items-center gap-2 border-b pb-1 border-current w-fit">
                            <a href="#">See how Fylo works</a>
                            <img src={iconArrow} alt="arrow" />
                        </div>
                    </div>
                </section>
                <section className='mt-20 p-12'>
                    <img src={aspas} alt="aspas" className='w-8 ml-2' />
                    <div className='grid lg:grid-cols-3 gap-10'>
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
                <section className='p-8 absolute top-975'>
                    <div className='bg-[#1B2330] rounded-[10px] shadow-2xl text-center p-8'>
                        <h1 className='text-[20px]'>Get early access today</h1>
                        <p className='mt-4'>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
                            <input 
                                className='bg-white p-3 mt-8 pl-8 rounded-full text-black shadow-2xl'
                                placeholder='email@example.com'
                                type="email" 
                                {...register("email", { required: "Please enter a valid email address" })}
                            />
                            {errors.email && <span className='text-left ml-8 mt-1 text-[14px] text-red-500'>{errors.email.message}</span>}
                            <button type="submit" className="mt-5 shadow-2xl p-3 rounded-full bg-linear-to-r from-[#51C7D5] to-[#3DAED0] hover:from-[#85DEE4] hover:to-[#6BD3DA] cursor-pointer transition">Get Started For Free</button>
                        </form>
                    </div>
                </section>
            </section>
        </main>
    )
}

export default Prin