import iconList from './assets/images/icon-list.svg'
import imgMobile from './assets/images/illustration-sign-up-mobile.svg'
import imgDesktop from './assets/images/illustration-sign-up-desktop.svg'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'


function Form() {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const navigate = useNavigate()

    function onSubmit(data) {
        navigate("/sucesso", {
            state: {
                email: data.email
            }
        })
    }

    return (
      <div className="min-h-screen font-['Roboto'] bg-[#36384D] lg:pt-15">
        <div className="bg-white lg:w-[60%] lg:flex lg:flex-row-reverse lg:gap-5 lg:p-5 lg:rounded-[30px] lg:mx-auto">
          <div>
            <img src={imgMobile} alt="mobile image" className='w-full block lg:hidden'/>
            <img src={imgDesktop} alt="mobile image" className='w-full hidden lg:block'/>
          </div>
          <div className='mt-8 lg:mt-15 mx-5 text-gray-900'>
            <h1 className='text-[45px] font-bold'>Stay updated!</h1>
            <h2 className='mt-3'>Join 60,000+ product managers receiving monthly updates on:</h2>
            <div className='space-y-3 mt-4'>
              <div className='flex gap-3'>
                <img src={iconList} alt="icon list" />
                <p>Product discovery and building what matters</p>
              </div>
              <div className='flex gap-3'>
                <img src={iconList} alt="icon list" />
                <p>Measuring to ensure updates are a success</p>
              </div>
              <div className='flex gap-3'>
                <img src={iconList} alt="icon list" />
                <p>And much more!</p>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='mt-10 pb-12.5 lg:pb-0' >
              <div className='flex justify-between'>
                  <label htmlFor="email" className='text-[14px] font-semibold'>Email address</label>
                  {errors.email && <span className='text-red-500 text-[14px]'>{errors.email.message}</span>}
              </div>
                  <input type="email" id="email" placeholder='email@company.com'
                  {...register("email", {
                      required: "Valide email required"
                  })}
                  className={errors.email ? "border border-red-500 bg-red-200 rounded-[10px] w-full p-4 mt-3" : "border border-gray-400 rounded-[10px] w-full p-4 mt-3"}
                  />
              <button type="submit" className='bg-[#232742] p-4 mt-6 font-semibold text-white rounded-[10px] w-full'>Subscribe to monthly newsletter</button>
            </form>
          </div>
        </div>
      </div>
    )
}

export default Form