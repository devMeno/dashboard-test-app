import React from 'react';
import Header from "@/components/header";

const inputStyle = "border border-[#E7EBF3] text-[#04060F] text-[16px] font-400 rounded rounded-l-full rounded-r-full w-[496px] h-[48px] px-[20px]"
const labelStyle = "absolute left-4 -top-3 bg-white px-1 font-bold text-[#9FA8BC]"
const eyeStyle = "absolute inset-y-0 right-0 flex items-center pr-3"

const Page = () => {
    return (
        <>
            <div className={'flex flex-col h-screen'}>
                <Header />
                <div className={'flex items-center flex-grow bg-blue-100'}>
                    <div className={'grid font-sans w-[624px] h-[388px] rounded rounded-[8px] bg-white mx-auto justify-center content-center'}>
                        <span className={'text-[30px] text-black font-bold text-center mb-[35px]'}>Connexion</span>
                        <form action="">
                            <div className="relative mb-[24px]">
                                <input
                                    type="text"
                                    id="email"
                                    className={inputStyle}
                                    placeholder="Entrez votre adresse e-mail"
                                />
                                <label
                                    htmlFor="email"
                                    className={labelStyle}
                                >
                                    E-mail
                                </label>
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="email"
                                    className={inputStyle}
                                    placeholder="Entrez votre mot de passe"
                                />
                                <label
                                    htmlFor="email"
                                    className={labelStyle}
                                >
                                    Mot de passe
                                </label>
                                <div className={eyeStyle}>
                                    <img src="/icons/eye.png" alt="Eye icon" className="size-[24px]" />
                                </div>
                            </div>
                            <div className={'flex justify-center'}>
                                <button type={"submit"} className={'mt-[24px] font-600 text-16 justify-center text-white bg-blue-500 w-[240px] h-[40px] rounded rounded-l-full rounded-r-full'}>Connexion</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;