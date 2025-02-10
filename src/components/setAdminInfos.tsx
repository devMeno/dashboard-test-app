import React from 'react';
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import ResetPasswordButton from "@/components/dialogButtons/resetPasswordButton";
import BlockOrganisationButton from "@/components/dialogButtons/blockOrganisationButton";
import DeblockOrganizationButton from "@/components/dialogButtons/deblockOrganizationButton";
import DeleteOrganizationButton from "@/components/dialogButtons/deleteOrganizationButton";
import EditOrganizationButton from "@/components/dialogButtons/editOrganizationButton";
import {inputStyle,labelStyle} from "@/utils/styles";

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