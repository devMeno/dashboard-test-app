import React from 'react';

interface profilDataProps {
    iconUrl: string;
    title: string;
    value: string;
}

const ProfileData: React.FC<profilDataProps> = ({iconUrl,title,value}) => {
    return (
        <div className={'w-[284px] p-[14px] flex gap-4 items-center'}>
            <div className={'flex items-center justify-center rounded-full size-[40px] bg-[#E9F0FF]'}>
                <img src={iconUrl} alt="" className={'size-[24px]'} style={{ fill: "blue" }} />
            </div>
            <div>
                <span className={'font-bold text-[14px] text-[#04060F]'}>{title}</span><br/>
                <span className={'text-[16px] text-[#04060F]'}>{value}</span>
            </div>
        </div>
    );
};

export default ProfileData;