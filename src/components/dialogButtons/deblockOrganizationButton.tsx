import React from 'react';
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {dialogActionButton, dialogButtonStyle, dialogContentStyle, dialogTitleStyle} from "@/utils/styles";

const DeblockOrganizationButton = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <div className={`${dialogButtonStyle + ' bg-white border-[1px] border-[#246BFD] text-[#246BFD]'}`}>Débloquer</div>
            </DialogTrigger>
            <DialogContent className={dialogContentStyle}>
                <DialogHeader>
                    <DialogTitle className={dialogTitleStyle}>Débloquer une organisation</DialogTitle>
                    <p className={'mx-auto'}>Voulez-vous débloquer l’organisation <span className={'font-bold'}>Pentatonic</span> ?</p>
                    <div className={'flex mx-auto gap-3 pt-[24px]'}>
                        <button type={"submit"} className={`${dialogActionButton + ' text-[#9FA8BC] bg-[#E7EBF3]'}`}>Annuler</button>
                        <button type={"submit"} className={`${dialogActionButton + ' text-white bg-[#F33F19]'}`}>Débloquer</button>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default DeblockOrganizationButton;