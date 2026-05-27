import { useForm } from "react-hook-form";
import { useState } from "react";
import upload from '../../public/images/icon-upload.svg'
import info from '../../public/images/icon-info.svg'
import lineBottomMobile from '../../public/images/pattern-squiggly-line-bottom-mobile-tablet.svg'

export default function Form() {

    const [preview, setPreview] = useState(null);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    const handleImagePreview = (e) => {
        const file = e.target.files[0];

        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };

    return (
        <div className="flex justify-center px-8 pb-30">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-12 flex flex-col gap-6">
                {/* Upload Avatar */}
                <div className="flex flex-col gap-3">
                    <label className="text-[18px] font-medium">Upload Avatar</label>
                    <label htmlFor="avatar" className="border-2 border-dashed border-white/50 bg-white/3 rounded-2xl p-4 cursor-pointer hover:bg-white/10 transition flex flex-col items-center justify-center text-center">
                        {preview ? (
                            <img src={preview} alt="preview" className="w-24 h-24 rounded-2xl object-cover"/>
                        ) : (
                            <>
                                <div className="p-3 rounded-xl bg-white/12 border border-white/12">
                                    <img src={upload} alt="upload" />
                                </div>
                                <p className="text-neutral-300 text-[18px] mt-4">Drag and drop or click to upload</p>
                            </>
                        )}
                        <input id="avatar" type="file" accept="image/png, image/jpeg" className="hidden"
                            {...register("avatar", {
                                required: "Please upload an avatar"
                            })}
                            onChange={handleImagePreview}/>
                    </label>
                    <div className="flex items-center gap-2">
                        <img src={info} alt="info" />
                        <p className="text-neutral-300 text-[13px]">Upload your photo (JPG or PNG, max size: 500KB).</p>
                    </div>
                    {errors.avatar && (
                        <span className="text-red-400 text-sm">
                            {errors.avatar.message}
                        </span>
                    )}
                </div>
                {/* Full Name */}
                <div className="flex flex-col gap-2">
                    <label className="text-white text-[18px] font-medium">Full Name</label>
                    <input type="text" className="bg-white/3 border border-white/50 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-400 transition"
                        {...register("fullName", {
                            required: "Full name is required"
                        })}
                    />
                    {errors.fullName && (
                        <span className="text-red-400 text-sm">
                            {errors.fullName.message}
                        </span>
                    )}
                </div>
                {/* Email */}
                <div className="flex flex-col gap-2">
                    <label className="text-white text-[18px] font-medium">Email Address</label>
                    <input type="email" placeholder="example@email.com" className="bg-white/5 border border-white/50 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-400 transition"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Please enter a valid email"
                            }
                        })}
                    />
                    {errors.email && (
                        <span className="text-red-400 text-sm">
                            {errors.email.message}
                        </span>
                    )}
                </div>
                {/* Github Username */}
                <div className="flex flex-col gap-2">
                    <label className="text-white text-[18px] font-medium">Github Username</label>
                    <input type="text" placeholder="@yourusername"
                        className="bg-white/5 border border-white/50 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-400 transition"
                        {...register("github", {
                            required: "Github username is required"
                        })}
                    />
                    {errors.github && (
                        <span className="text-red-400 text-sm">
                            {errors.github.message}
                        </span>
                    )}
                </div>
                {/* Submit Button */}
                <button type="submit" className="bg-[#D16355] hover:bg-orange-400 text-[18px] text-black font-extrabold py-4 rounded-xl transition mt-2 cursor-pointer">Generate My Ticket</button>
            </form>
        </div>
    );
}