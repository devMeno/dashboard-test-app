import React from 'react';
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {dialogButtonStyle, dialogContentStyle} from "@/utils/styles";

const EditOrganizationButton = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <div className={`${dialogButtonStyle + ' bg-[#246BFD] text-white text-[14px]'}`}>Modifier</div>
            </DialogTrigger>
            <DialogContent className={dialogContentStyle}>
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