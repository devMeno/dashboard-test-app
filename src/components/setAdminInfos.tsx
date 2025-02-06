import React from 'react';
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import ResetPasswordButton from "@/components/dialogButtons/resetPasswordButton";
import BlockOrganisationButton from "@/components/dialogButtons/blockOrganisationButton";
import DeblockOrganizationButton from "@/components/dialogButtons/deblockOrganizationButton";
import DeleteOrganizationButton from "@/components/dialogButtons/deleteOrganizationButton";
import EditOrganizationButton from "@/components/dialogButtons/editOrganizationButton";

const inputStyle = "border border-[#E7EBF3] text-[#04060F] text-[16px] font-400 rounded rounded-l-full rounded-r-full w-[496px] h-[48px] px-[20px]"
const labelStyle = "absolute left-4 -top-3 bg-white px-1 font-bold text-[#9FA8BC] text-[12px]"
const eyeStyle = "absolute inset-y-0 right-0 flex items-center pr-3"

const SetAdminInfos = () => {
    return (
        <div className={'pt-[24px]'}>
            <form action="">
                <div className={'w-fit grid grid-cols-2 gap-x-[50px]'}>
                    <div className="relative mb-[24px]">
                        <input
                            type="text"
                            id="organisation"
                            className={inputStyle}
                            placeholder="Entrez votre adresse e-mail"
                        />
                        <label
                            htmlFor="organisation"
                            className={labelStyle}
                        >
                            Nom de l'organisation
                        </label>
                    </div>
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
                            Adresse e-mail de l'admin
                        </label>
                    </div>
                    <div className="relative mb-[24px]">
                        <input
                            type="text"
                            id="nom"
                            className={inputStyle}
                            placeholder="Entrez votre adresse e-mail"
                        />
                        <label
                            htmlFor="nom"
                            className={labelStyle}
                        >
                            Nom de l'admin
                        </label>
                    </div>
                    <div className="relative mb-[24px]">
                        <input
                            type="text"
                            id="prenom"
                            className={inputStyle}
                            placeholder="Entrez votre adresse e-mail"
                        />
                        <label
                            htmlFor="prenom"
                            className={labelStyle}
                        >
                            Prénom de l'admin
                        </label>
                    </div>
                </div>
                <div className={'flex gap-2'}>
                    <EditOrganizationButton/>
                    <ResetPasswordButton />
                    <BlockOrganisationButton />
                </div>
            </form>
        </div>
    );
};

export default SetAdminInfos;