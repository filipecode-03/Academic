import { useForm, Controller } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { useState } from "react";
import upload from '../../public/images/icon-upload.svg'
import info from '../../public/images/icon-info.svg'
import lineBottomMobile from '../../public/images/pattern-squiggly-line-bottom-mobile-tablet.svg'

export default function Form({ setTicketGenerated, setUserData }) {

    const [preview, setPreview] = useState(null);

    const {
        register,
        control,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        setUserData(data);
        setTicketGenerated(true);
    };

    const handleImagePreview = (e) => {
        const file = e.target.files[0];

        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };

    const onDrop = (acceptedFiles, onChange) => {
        const file = acceptedFiles[0];

        if (!file) return;

        setPreview(URL.createObjectURL(file));

        onChange(acceptedFiles);
    };

    return (
        <div className="flex justify-center px-8 pb-30">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-12 flex flex-col gap-6">
                {/* Upload Avatar */}
                <div className="flex flex-col gap-3">
    <label className="text-[18px] font-medium">
        Upload Avatar
    </label>

    <Controller
        name="avatar"
        control={control}
        rules={{
            required: "Please upload an avatar"
        }}
        render={({ field: { onChange } }) => {

            const {
                getRootProps,
                getInputProps,
                isDragActive
            } = useDropzone({
                accept: {
                    "image/png": [],
                    "image/jpeg": []
                },
                multiple: false,
                onDrop: (files) => onDrop(files, onChange)
            });

            return (
                <div
                    {...getRootProps()}
                    className={`
                        border-2 border-dashed rounded-2xl p-4
                        cursor-pointer transition
                        flex flex-col items-center justify-center text-center

                        ${
                            isDragActive
                                ? "border-orange-400 bg-orange-400/10"
                                : "border-white/50 bg-white/3 hover:bg-white/10"
                        }
                    `}
                >
                    <input {...getInputProps()} />

                    {preview ? (
                        <img
                            src={preview}
                            alt="preview"
                            className="w-24 h-24 rounded-2xl object-cover"
                        />
                    ) : (
                        <>
                            <div className="p-3 rounded-xl bg-white/12 border border-white/12">
                                <img src={upload} alt="upload" />
                            </div>

                            <p className="text-neutral-300 text-[18px] mt-4">
                                Drag and drop or click to upload
                            </p>
                        </>
                    )}
                </div>
            );
        }}
    />

    <div className="flex items-center gap-2">
        <img src={info} alt="info" />
        <p className="text-neutral-300 text-[13px]">
            Upload your photo (JPG or PNG, max size: 500KB).
        </p>
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