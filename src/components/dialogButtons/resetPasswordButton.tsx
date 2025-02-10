import React from 'react';
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {dialogActionButton, dialogButtonStyle, dialogContentStyle, dialogTitleStyle} from "@/utils/styles";

const ResetPasswordButton = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <div className={`${dialogButtonStyle + ' bg-white border-[#246BFD] text-[#246BFD] border-[1px]'}`}>Mot de passe</div>
            </DialogTrigger>
            <DialogContent className={dialogContentStyle}>
                <DialogHeader>
                    <DialogTitle className={dialogTitleStyle}>Réinitilaliser le mot de passe </DialogTitle>
                    <p className={'mx-auto text-center'}>Voulez-vous envoyer à <span className={'font-bold'}>Charles Baudelaire</span>  un lien de réinitialisation de son mot de passe à son adresse e-email ?</p>
                    <div className={'flex mx-auto gap-3 pt-[24px]'}>
                        <button type={"submit"} className={`${dialogActionButton + ' text-[#9FA8BC] bg-[#E7EBF3] w-[240px] h-[40px]'}`}>Annuler</button>
                        <button type={"submit"} className={`${dialogActionButton + ' text-white bg-[#F33F19] w-[240px] h-[40px]'}`}>Envoyer</button>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default ResetPasswordButton;