import React from 'react';
import ProfileData from "@/components/profileData";

const AdminInfos = () => {
    return (
        <div>
            <span className={'text-[16px] font-semibold'}>Détails de l’admin</span>
            <div className={'w-fit flex gap-5 mt-[24px]'}>
                <ProfileData
                    iconUrl="/icons/buildings.svg"
                    title="Adresse e-mail"
                    value="bcharles@pentatonic.com"
                />
                <div className={'w-fit p-[14px] flex gap-4 items-center'}>
                    <div className={'flex items-center justify-center rounded-full size-[40px] bg-[#E9F0FF]'}>
                        <img src="/icons/home-2.svg" alt="" className={'size-[24px]'}/>
                    </div>
                    <div className={'flex gap-[100px]'}>
                        <div>
                            <span className={'font-bold text-[14px] text-[#04060F]'}>Prénom</span><br/>
                            <span className={'text-[16px] text-[#04060F]'}>Charles</span>
                        </div>
                        <div>
                            <span className={'font-bold text-[14px] text-[#04060F]'}>Nom</span><br/>
                            <span className={'text-[16px] text-[#04060F]'}>Baudelaire</span>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className={'w-fit flex gap-5 mt-[24px]'}>
                <ProfileData
                    iconUrl="/icons/ph_files.svg"
                    title="Documents"
                    value="123"
                />
                <ProfileData
                    iconUrl="/icons/buildings.svg"
                    title="Utilisateurs"
                    value="24"
                />
                <ProfileData
                    iconUrl="/icons/buildings.svg"
                    title="Taille des fichiers"
                    value="3,41 GB"
                />
                <ProfileData
                    iconUrl="/icons/buildings.svg"
                    title="Dernière utilisation"
                    value="26 Jan 2024 - 14h15"
                />
            </div>
        </div>
    );
};

export default AdminInfos;