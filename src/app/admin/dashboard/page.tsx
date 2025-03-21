import React from 'react';
import DetailsCard from "@/components/detailsCard";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {fakeOrganizationsData} from "@/utils/datas/fakeOrganizationsData";
import {getInitials} from "@/utils/functions";
import {getOrganizationsStatusBadgeStyle} from "@/utils/functions";
import {cellStyle,headerCellStyle} from "@/utils/styles";


const activesOrganizationsData = fakeOrganizationsData.slice(18,22)

console.log(activesOrganizationsData)

const Page = () => {
    return (
        <>
            <div className={'flex justify-between mb-[24px]'}>
                <DetailsCard
                    iconUrl="/icons/buildings.svg"
                    title="Organisations"
                    value="121"
                />
                <DetailsCard
                    iconUrl="/icons/buildings.svg"
                    title="Utilisateurs"
                    value="9 234"
                />
                <DetailsCard
                    iconUrl="/icons/buildings.svg"
                    title="Documents"
                    value="213 098"
                />
                <DetailsCard
                    iconUrl="/icons/buildings.svg"
                    title="Taille des fichiers"
                    value="32 GB"
                />
            </div>
            <p className={'font-bold text-[20px]'}>Dernières organisations actives</p>
            <div className={'relative overflow-auto max-h-[400px] rounded-t-lg mt-[24px]'}>
                <table className="w-full table-fixed overflow-hidden rounded-t-lg">
                    <thead className="bg-[#E9F0FF] sticky top-0 z-10">
                    <tr className="h-[40px] text-[14px] py-[8px] font-bold">
                        <th className={`${headerCellStyle + ' w-[4%] rounded-tl-[8px]'}`}></th>
                        <th className={`${headerCellStyle + ' w-[21%]'}`}>Organisation</th>
                        <th className={`${headerCellStyle + ' w-[9%]'}`}>Utilisateurs</th>
                        <th className={`${headerCellStyle + ' w-[22%]'}`}>Administrateurs</th>
                        <th className={`${headerCellStyle + ' w-[22%]'}`}>Adresse e-mail</th>
                        <th className={`${headerCellStyle + ' w-[182px]'}`}>Statut</th>
                        <th className={`w-auto rounded rounded-tr-[8px]`}></th>
                    </tr>
                    </thead>
                    <tbody>
                        {activesOrganizationsData.map((item, index) => (
                            <tr className="h-[72px] border-b border-dashed" key={index}>
                                <td className={cellStyle}>
                                    <input
                                        type="checkbox"
                                        className={
                                            "size-6 mt-[5px] appearance-none border-[1px] border-[#9FA8BC] rounded-lg checked:border-blue-500 cursor-pointer transition-all relative " +
                                            "before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-3 before:h-3 before:bg-transparent before:border-2 before:border-transparent before:rounded-sm before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:transition-all " +
                                            "checked:before:bg-blue-500 checked:before:border-blue-500 " +
                                            "after:content-['✓'] after:absolute after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:text-white after:text-xs after:pointer-events-none after:opacity-0 " +
                                            "checked:after:opacity-100"
                                        }
                                    />
                                </td>
                                <td className={cellStyle}>{item.organization_name}</td>
                                <td className={cellStyle}>{item.users}</td>
                                <td className={cellStyle}>
                                    <div className={'flex gap-2 items-center'}>
                                        <div className={'size-[40px] flex items-center rounded-full bg-blue-50 text-blue-500'}><span className={'mx-auto'}>{getInitials(item.admin)}</span></div>
                                        {item.admin}
                                    </div>
                                </td>
                                <td className={cellStyle}>{item.e_mail}</td>
                                <td className={cellStyle}>
                                    <div className={`${getOrganizationsStatusBadgeStyle(item.status)} px-[8px] py-[4px] w-[81px] text-center rounded-l-full rounded-r-full font-medium text-[14px]`}>{item.status}</div>
                                </td>
                                <td className={cellStyle}>
                                    <div className={'float-right'}>
                                        <Dialog>
                                            <DialogTrigger>
                                                <div>
                                                    <img src="/icons/trash.svg" alt=""/>
                                                </div>
                                            </DialogTrigger>
                                            <DialogContent className={'px-[40px] py-[40px] w-[624px]'}>
                                                <DialogHeader>
                                                    <DialogTitle className={'text-center mb-[40px]'}>Supprimer une organisation</DialogTitle>
                                                    <p className={'mx-auto'}>Voulez-vous supprimer l'organisation <span className={'font-bold'}>{item.organization_name}</span> ?</p>
                                                    <div className={'flex mx-auto gap-3 pt-[24px]'}>
                                                        <button type={"submit"} className={'font-600 text-16 justify-center text-[#9FA8BC] bg-[#E7EBF3] w-[240px] h-[40px] rounded rounded-l-full rounded-r-full'}>Annuler</button>
                                                        <button type={"submit"} className={'font-600 text-16 justify-center text-white bg-[#F33F19] w-[240px] h-[40px] rounded rounded-l-full rounded-r-full'}>Supprimer</button>
                                                    </div>
                                                </DialogHeader>
                                            </DialogContent>
                                        </Dialog>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Page;