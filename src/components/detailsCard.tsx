import React from 'react';

interface detailsCardProps {
    iconUrl: string;
    title: string;
    value: string;
}

const DetailsCard: React.FC<detailsCardProps> = ({iconUrl,title,value}) => {
    return (
        <div className={'flex gap-2 border border-[#246BFD] w-[300px] p-[24px] rounded-[14px]'}>
            <div className={'flex items-center justify-center rounded-[8px] size-[54px] bg-[#E9F0FF]'}>
                <img src={iconUrl} alt=""/>
            </div>
            <div>
                <span className={'font-semibold text-[16px] text-[#9FA8BC]'}>{title}</span><br/>
                <span className={'font-bold text-[24px]'}>{value}</span>
            </div>
        </div>
    );
};

export default DetailsCard;