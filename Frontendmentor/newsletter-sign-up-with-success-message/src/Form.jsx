import iconList from './assets/images/icon-list.svg'
import imgMobile from './assets/images/illustration-sign-up-mobile.svg'
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
        <div className="min-h-screen font-['Roboto']">
      <div>
        <img src={imgMobile} alt="mobile image" className='w-full'/>
      </div>
      <div className='mt-8 mx-5 text-gray-900'>
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
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='mx-5 mt-[40px] pb-[50px] space-y-6' >
        <div className='flex flex-col'>
            <label htmlFor="email" className='text-[14px] font-semibold'>Email address</label>
            <input type="email" id="email" placeholder='email@company.com'
            {...register("email", {
                required: "Valide email required"
            })}
            className={errors.email ? "" : "border rounded-[10px] p-4 mt-2"}
            />
        </div>
        <button type="submit" className='bg-[#232742] p-4 font-semibold text-white rounded-[10px] w-full'>Subscribe to monthly newsletter</button>
      </form>
    </div>
    )
}

export default Form