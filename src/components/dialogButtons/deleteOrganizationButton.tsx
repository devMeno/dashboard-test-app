import React from 'react';
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {dialogActionButton, dialogButtonStyle, dialogContentStyle, dialogTitleStyle} from "@/utils/styles";

const DeleteOrganizationButton = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <div className={`${dialogButtonStyle + ' bg-[#F33F19] text-white'}`}>Supprimer</div>
            </DialogTrigger>
            <DialogContent className={dialogContentStyle}>
                <DialogHeader>
                    <DialogTitle className={dialogTitleStyle}>Supprimer une organisation</DialogTitle>
                    <p className={'mx-auto'}>Voulez-vous supprimer l’organisation <span className={'font-bold'}>Pentatonic</span> et tout son contenu ?</p>
                    <div className={'flex mx-auto gap-3 pt-[24px]'}>
                        <button type={"submit"} className={`${dialogActionButton + ' text-[#9FA8BC] bg-[#E7EBF3] w-[240px]'}`}>Annuler</button>
                        <button type={"submit"} className={`${dialogActionButton + ' text-white bg-[#F33F19] w-[240px]'}`}>Supprimer</button>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default DeleteOrganizationButton;