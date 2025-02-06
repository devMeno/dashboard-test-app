import React from 'react';
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";

const DeblockOrganizationButton = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <div className={'bg-white border-[1px] border-[#246BFD] px-[24px] py-[10px] rounded-l-full rounded-r-full text-[#246BFD] text-[14px] font-semibold'}>Débloquer</div>
            </DialogTrigger>
            <DialogContent className={'px-[40px] py-[40px] w-[624px]'}>
                <DialogHeader>
                    <DialogTitle className={'text-center mb-[40px]'}>Débloquer une organisation</DialogTitle>
                    <p className={'mx-auto'}>Voulez-vous débloquer l’organisation <span className={'font-bold'}>Pentatonic</span> ?</p>
                    <div className={'flex mx-auto gap-3 pt-[24px]'}>
                        <button type={"submit"} className={'font-600 text-16 justify-center text-[#9FA8BC] bg-[#E7EBF3] w-[240px] h-[40px] rounded rounded-l-full rounded-r-full'}>Annuler</button>
                        <button type={"submit"} className={'font-600 text-16 justify-center text-white bg-[#F33F19] w-[240px] h-[40px] rounded rounded-l-full rounded-r-full'}>Débloquer</button>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default DeblockOrganizationButton;