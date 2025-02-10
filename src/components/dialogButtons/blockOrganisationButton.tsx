import React from 'react';
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {dialogActionButton, dialogButtonStyle, dialogContentStyle, dialogTitleStyle} from "@/utils/styles";

const BlockOrganisationButton = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <div className={`${dialogButtonStyle + ' bg-[#F33F19] text-white'}`}>Bloquer</div>
            </DialogTrigger>
            <DialogContent className={dialogContentStyle}>
                <DialogHeader>
                    <DialogTitle className={dialogTitleStyle}>Bloquer une organisation</DialogTitle>
                    <p className={'mx-auto'}>Voulez-vous bloquer l’organisation <span className={'font-bold'}>Pentatonic</span> ?</p>
                    <div className={'flex mx-auto gap-3 pt-[24px]'}>
                        <button type={"submit"} className={`${dialogActionButton + ' text-[#9FA8BC] bg-[#E7EBF3]'}`}>Annuler</button>
                        <button type={"submit"} className={`${dialogActionButton + ' text-white bg-[#F33F19]'}`}>Bloquer</button>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default BlockOrganisationButton;