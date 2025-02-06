import React from 'react';
import AdminInfos from "@/components/adminInfos";
import SetAdminInfos from "@/components/setAdminInfos";

const Page = () => {
    return (
        <div className={'w-full flex-1 border border-[1px] border-[#E7EBF3]'}>
            <div className={'flex items-center h-[88px] bg-[#E9F0FF]'}>
                <div className={'w-full text-center mx-[24px]'}>
                    <span className={'mx-auto text-[20px]'}>Pentatonic</span>
                    <button className={'float-right bg-[#246BFD] px-[24px] py-[10px] rounded-l-full rounded-r-full text-white text-[14px] font-semibold'}>Modifier</button>
                </div>
            </div>
            <div className={'m-[24px]'}>
                <SetAdminInfos />
            </div>
        </div>
    );
};

export default Page;