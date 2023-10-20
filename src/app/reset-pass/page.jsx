'use client'
import React, { useState } from "react";
import Input from "@/shared/Input/Input";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Link from "next/link";
import axios from "axios";
import { baseUrl } from "@/Url";
// import { useParams, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

const PageForgotPass = ({ }) => {
    const [pass, setPass] = useState('');
    // const [params,setParams] = useSearchParams();
    const [query, setQuery] = useState((window.location.href.indexOf('?') != -1) && location.href.split('?').reverse()[0].split('&').map(e => {
        let [k, v] = e.split('=');
        return { [k]: v };
    }));
    // console.log(params);

    if (!query || !(('tok' in query) && ('id' in query))) {
        return (
            <div className="container mb-24 lg:mb-32">
                <header className="text-center max-w-2xl mx-auto - mb-14 sm:mb-16 lg:mb-20">
                    <h2 className="mt-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
                        Wrong Token. Try Resending Email
                    </h2>
                </header>
            </div>
        )
    }

    return (
        <div className="container mb-24 lg:mb-32">
            <header className="text-center max-w-2xl mx-auto - mb-14 sm:mb-16 lg:mb-20">
                <h2 className="mt-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
                    Forgot password
                </h2>
                <span className="block text-sm mt-4 text-neutral-700 sm:text-base dark:text-neutral-200">
                    Welcome to our Community
                </span>
            </header>

            <div className="max-w-md mx-auto space-y-6">
                {/* FORM */}
                <form className="grid grid-cols-1 gap-6" action="#" method="post" onSubmit={(e) => {
                    e.preventDefault();
                    axios.post(`${baseUrl}/changePassword`, {
                        id: query.id,
                        token: query.tok
                    }).then(res => {
                        if (res.status == 200) {
                            toast.success(res.data.message);
                        } else {
                            toast.error(res.data.message);
                        }
                    }).catch(err => {
                        console.log(err);
                        toast.error('Server Down. Try Again Later.');
                    });
                }}>
                    <label className="block">
                        <span className="text-neutral-800 dark:text-neutral-200">
                            New Password
                        </span>
                        <Input
                            type="password"
                            placeholder="new password"
                            className="mt-1"
                            onChange={(e) => {
                                setPass(e.target.value);
                            }}
                        />
                    </label>
                    <ButtonPrimary type="submit">Continue</ButtonPrimary>
                </form>

                {/* ==== */}
                <span className="block text-center text-neutral-700 dark:text-neutral-300">
                    Go back for {` `}
                    <Link href="/login" className="text-green-600">
                        Sign in
                    </Link>
                    {` / `}
                    <Link href="/signup" className="text-green-600">
                        Sign up
                    </Link>
                </span>
            </div>
        </div>
    );
};

export default PageForgotPass;
