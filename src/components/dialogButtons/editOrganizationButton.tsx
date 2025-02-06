import React from 'react';
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";

const EditOrganizationButton = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <div className={'bg-[#246BFD] px-[24px] py-[10px] rounded-l-full rounded-r-full text-white text-[14px] font-semibold'}>Modifier</div>
            </DialogTrigger>
            <DialogContent className={'px-[40px] py-[40px] w-[624px]'}>
                <DialogHeader>
                    <DialogTitle></DialogTitle>
                    <div className={'size-[120px] rounded-full bg-[#ECF9E8] mx-auto flex items-center'}>
                        <div className={'size-[76px] bg-[#49C91E] rounded-full mx-auto flex items-center'}>
                            <img src="/icons/Vector(Stroke).svg" alt="" className={'w-[40.35px] h-[29.64px] mx-auto'} />
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <p className={'font-medium text-center text-[16px]'}>Vos informations ont bien été mises à jour !</p>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default EditOrganizationButton;