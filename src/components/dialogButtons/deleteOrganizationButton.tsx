import React from 'react';
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";

const DeleteOrganizationButton = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <div className={'bg-[#F33F19] px-[24px] py-[10px] rounded-l-full rounded-r-full text-white text-[14px] font-semibold'}>Supprimer</div>
            </DialogTrigger>
            <DialogContent className={'px-[40px] py-[40px] w-[624px]'}>
                <DialogHeader>
                    <DialogTitle className={'text-center mb-[40px]'}>Supprimer une organisation</DialogTitle>
                    <p className={'mx-auto'}>Voulez-vous supprimer l’organisation <span className={'font-bold'}>Pentatonic</span> et tout son contenu ?</p>
                    <div className={'flex mx-auto gap-3 pt-[24px]'}>
                        <button type={"submit"} className={'font-600 text-16 justify-center text-[#9FA8BC] bg-[#E7EBF3] w-[240px] h-[40px] rounded rounded-l-full rounded-r-full'}>Annuler</button>
                        <button type={"submit"} className={'font-600 text-16 justify-center text-white bg-[#F33F19] w-[240px] h-[40px] rounded rounded-l-full rounded-r-full'}>Supprimer</button>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default DeleteOrganizationButton;