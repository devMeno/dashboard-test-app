"use client"
import React from 'react';
import {Home2Icon} from "@/utils/svgIcons/home2";
import {BuildingsIcon} from "@/utils/svgIcons/buildings";
import {Profile2UsersIcon} from "@/utils/svgIcons/profile2Users";
import {useDashboardTab} from "@/context/dashboard/dashboardTabContext";
import {useRouter} from "next/navigation";

const Sidebar = () => {
    const router = useRouter();
    const {tab, setTab} = useDashboardTab();
    const handleGoToHome = () => {
        setTab("home");
        router.push("/admin/dashboard");
    }
    const handleGoToOrganizations = () => {
        setTab("organizations");
        router.push("/admin/organisations");
    }
    const handleGoToAdmins = () => {
        setTab("admins");
        router.push("/admin/admins");
    }
    return (
        <>
            <div className={'flex flex-col bg-white py-5 border border-r-[1px] border-r-[#E7E5E4] w-[50px] xl:w-[90px] h-full'}>
                <button><img src="/pictures/logo2.png" alt="" className={'mx-auto'} /></button>
                <div className={'flex-grow mx-auto pt-[100px] w-full h-[192px] flex flex-col gap-[60px]'}>
                    <button
                        className={`${tab === 'home' ? 'w-full border-r-[2px] border-r-[#246BFD]' : ''}`}
                        onClick={handleGoToHome}>
                        <div className={'mx-auto w-fit'}><Home2Icon color={`${tab === 'home' ? '#246BFD' : '#9FA8BC'}`}/></div>
                    </button>
                    <button
                        className={`${tab === 'organizations' ? 'w-full border-r-[2px] border-r-[#246BFD]' : ''}`}
                        onClick={handleGoToOrganizations}>
                        <div className={'mx-auto w-fit'}><BuildingsIcon color={`${tab === 'organizations' ? '#246BFD' : '#9FA8BC'}`}/></div>
                    </button>
                    <button
                        className={`${tab === 'admins' ? 'w-full border-r-[2px] border-r-[#246BFD]' : ''}`}
                        onClick={handleGoToAdmins}>
                        <div className={'mx-auto w-fit'}><Profile2UsersIcon color={`${tab === 'admins' ? '#246BFD' : '#9FA8BC'}`}/></div>
                    </button>
                </div>
                <button><img src="/icons/logout.svg" alt="" className={'size-[24px] mx-auto bottom-3'}/></button>
            </div>
        </>
    );
};

export default Sidebar;