import React from 'react';
import DetailsCard from "@/components/detailsCard";

const greenBadgeStyle = "text-green-500 bg-green-100"
const redBadgeStyle = "text-red-500 bg-red-100"


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
            <table className="w-full table-fixed mt-[24px] overflow-hidden rounded-t-lg">
                <thead className="bg-[#E9F0FF]">
                    <tr className="h-[40px] text-[14px] py-[8px] font-bold">
                        <th className="w-[4%] text-left px-4 rounded-tl-[8px]"></th>
                        <th className="w-[21%] text-left px-4">Organisation</th>
                        <th className="w-[9%] text-left px-4">Utilisateurs</th>
                        <th className="w-[22%] text-left px-4">Administrateurs</th>
                        <th className="w-[22%] text-left px-4">Adresse e-mail</th>
                        <th className="w-[182px] text-left px-4">Statut</th>
                        <th className="w-auto text-left px-4 rounded rounded-tr-[8px]"></th>
                    </tr>
                </thead>
                <tbody>
                <tr className="h-[72px] border-b border-dashed">
                    <td className="px-4 py-2">
                        <input type="checkbox" className={'size-6 mt-[5px] appearance-none border-[1px] border-[#9FA8BC] rounded-lg checked:bg-blue-500 checked:border-blue-500 cursor-pointer transition-all'}/>
                    </td>
                    <td className="px-4 py-2">Company Name</td>
                    <td className="px-4 py-2">16</td>
                    <td className="px-4 py-2">
                        <div className={'flex gap-2 items-center'}>
                            <div className={'size-[40px] flex items-center rounded-full bg-blue-50 text-blue-500'}><span className={'mx-auto'}>BE</span></div>
                            Benjamin Evalent
                        </div>
                    </td>
                    <td className="px-4 py-2">norman@example.com</td>
                    <td className="px-4 py-2">
                        <div className={`${greenBadgeStyle} px-[8px] py-[4px] w-[80px] text-center rounded-l-full rounded-r-full font-medium text-[14px]`}>Actif</div>
                    </td>
                    <td className="px-4 py-2">
                        <button className={'float-right'}>
                            <img src="/icons/trash.svg" alt=""/>
                        </button>
                    </td>
                </tr>
                <tr className="h-[72px] border-b border-dashed">
                    <td className="px-4 py-2">
                        <input type="checkbox" className={'size-6 mt-[5px] appearance-none border-[1px] border-[#9FA8BC] rounded-lg checked:bg-blue-500 checked:border-blue-500 cursor-pointer transition-all'}/>
                    </td>
                    <td className="px-4 py-2">Company Name</td>
                    <td className="px-4 py-2">16</td>
                    <td className="px-4 py-2">
                        <div className={'flex gap-2 items-center'}>
                            <div className={'size-[40px] flex items-center rounded-full bg-blue-50 text-blue-500'}><span className={'mx-auto'}>BE</span></div>
                            Benjamin Evalent
                        </div>
                    </td>
                    <td className="px-4 py-2">norman@example.com</td>
                    <td className="px-4 py-2">
                        <div className={`${redBadgeStyle} px-[8px] py-[4px] w-[80px] text-center rounded-l-full rounded-r-full font-medium text-[14px]`}>Bloqué</div>
                    </td>
                    <td className="px-4 py-2">
                        <button className={'float-right'}>
                            <img src="/icons/trash.svg" alt=""/>
                        </button>
                    </td>
                </tr>
                <tr className="h-[72px] border-b border-dashed">
                    <td className="px-4 py-2">
                        <input type="checkbox" className={'size-6 mt-[5px] appearance-none border-[1px] border-[#9FA8BC] rounded-lg checked:bg-blue-500 checked:border-blue-500 cursor-pointer transition-all'}/>
                    </td>
                    <td className="px-4 py-2">Company Name</td>
                    <td className="px-4 py-2">16</td>
                    <td className="px-4 py-2">
                        <div className={'flex gap-2 items-center'}>
                            <div className={'size-[40px] flex items-center rounded-full bg-blue-50 text-blue-500'}><span className={'mx-auto'}>BE</span></div>
                            Benjamin Evalent
                        </div>
                    </td>
                    <td className="px-4 py-2">norman@example.com</td>
                    <td className="px-4 py-2">
                        <div className={`${greenBadgeStyle} px-[8px] py-[4px] w-[80px] text-center rounded-l-full rounded-r-full font-medium text-[14px]`}>Actif</div>
                    </td>
                    <td className="px-4 py-2">
                        <button className={'float-right'}>
                            <img src="/icons/trash.svg" alt=""/>
                        </button>
                    </td>
                </tr>
                <tr className="h-[72px] border-b border-dashed">
                    <td className="px-4 py-2">
                        <input type="checkbox" className={'size-6 mt-[5px] appearance-none border-[1px] border-[#9FA8BC] rounded-lg checked:bg-blue-500 checked:border-blue-500 cursor-pointer transition-all'}/>
                    </td>
                    <td className="px-4 py-2">Company Name</td>
                    <td className="px-4 py-2">16</td>
                    <td className="px-4 py-2">
                        <div className={'flex gap-2 items-center'}>
                            <div className={'size-[40px] flex items-center rounded-full bg-blue-50 text-blue-500'}><span className={'mx-auto'}>BE</span></div>
                            Benjamin Evalent
                        </div>
                    </td>
                    <td className="px-4 py-2">norman@example.com</td>
                    <td className="px-4 py-2">
                        <div className={`${redBadgeStyle} px-[8px] py-[4px] w-[80px] text-center rounded-l-full rounded-r-full font-medium text-[14px]`}>Bloqué</div>
                    </td>
                    <td className="px-4 py-2">
                        <button className={'float-right'}>
                            <img src="/icons/trash.svg" alt=""/>
                        </button>
                    </td>
                </tr>
                <tr className="h-[72px] border-b border-dashed">
                    <td className="px-4 py-2">
                        <input type="checkbox" className={'size-6 mt-[5px] appearance-none border-[1px] border-[#9FA8BC] rounded-lg checked:bg-blue-500 checked:border-blue-500 cursor-pointer transition-all'}/>
                    </td>
                    <td className="px-4 py-2">Company Name</td>
                    <td className="px-4 py-2">16</td>
                    <td className="px-4 py-2">
                        <div className={'flex gap-2 items-center'}>
                            <div className={'size-[40px] flex items-center rounded-full bg-blue-50 text-blue-500'}><span className={'mx-auto'}>BE</span></div>
                            Benjamin Evalent
                        </div>
                    </td>
                    <td className="px-4 py-2">norman@example.com</td>
                    <td className="px-4 py-2">
                        <div className={`${redBadgeStyle} px-[8px] py-[4px] w-[80px] text-center rounded-l-full rounded-r-full font-medium text-[14px]`}>Bloqué</div>
                    </td>
                    <td className="px-4 py-2">
                        <button className={'float-right'}>
                            <img src="/icons/trash.svg" alt=""/>
                        </button>
                    </td>
                </tr>
                <tr className="h-[72px] border-b border-dashed">
                    <td className="px-4 py-2">
                        <input type="checkbox" className={'size-6 mt-[5px] appearance-none border-[1px] border-[#9FA8BC] rounded-lg checked:bg-blue-500 checked:border-blue-500 cursor-pointer transition-all'}/>
                    </td>
                    <td className="px-4 py-2">Company Name</td>
                    <td className="px-4 py-2">16</td>
                    <td className="px-4 py-2">
                        <div className={'flex gap-2 items-center'}>
                            <div className={'size-[40px] flex items-center rounded-full bg-blue-50 text-blue-500'}><span className={'mx-auto'}>BE</span></div>
                            Benjamin Evalent
                        </div>
                    </td>
                    <td className="px-4 py-2">norman@example.com</td>
                    <td className="px-4 py-2">
                        <div className={`${redBadgeStyle} px-[8px] py-[4px] w-[80px] text-center rounded-l-full rounded-r-full font-medium text-[14px]`}>Bloqué</div>
                    </td>
                    <td className="px-4 py-2">
                        <button className={'float-right'}>
                            <img src="/icons/trash.svg" alt=""/>
                        </button>
                    </td>
                </tr>
                <tr className="h-[72px] border-b border-dashed">
                    <td className="px-4 py-2">
                        <input type="checkbox" className={'size-6 mt-[5px] appearance-none border-[1px] border-[#9FA8BC] rounded-lg checked:bg-blue-500 checked:border-blue-500 cursor-pointer transition-all'}/>
                    </td>
                    <td className="px-4 py-2">Company Name</td>
                    <td className="px-4 py-2">16</td>
                    <td className="px-4 py-2">
                        <div className={'flex gap-2 items-center'}>
                            <div className={'size-[40px] flex items-center rounded-full bg-blue-50 text-blue-500'}><span className={'mx-auto'}>BE</span></div>
                            Benjamin Evalent
                        </div>
                    </td>
                    <td className="px-4 py-2">norman@example.com</td>
                    <td className="px-4 py-2">
                        <div className={`${redBadgeStyle} px-[8px] py-[4px] w-[80px] text-center rounded-l-full rounded-r-full font-medium text-[14px]`}>Bloqué</div>
                    </td>
                    <td className="px-4 py-2">
                        <button className={'float-right'}>
                            <img src="/icons/trash.svg" alt=""/>
                        </button>
                    </td>
                </tr>
                <tr className="h-[72px] border-b border-dashed">
                    <td className="px-4 py-2">
                        <input type="checkbox" className={'size-6 mt-[5px] appearance-none border-[1px] border-[#9FA8BC] rounded-lg checked:bg-blue-500 checked:border-blue-500 cursor-pointer transition-all'}/>
                    </td>
                    <td className="px-4 py-2">Company Name</td>
                    <td className="px-4 py-2">16</td>
                    <td className="px-4 py-2">
                        <div className={'flex gap-2 items-center'}>
                            <div className={'size-[40px] flex items-center rounded-full bg-blue-50 text-blue-500'}><span className={'mx-auto'}>BE</span></div>
                            Benjamin Evalent
                        </div>
                    </td>
                    <td className="px-4 py-2">norman@example.com</td>
                    <td className="px-4 py-2">
                        <div className={`${redBadgeStyle} px-[8px] py-[4px] w-[80px] text-center rounded-l-full rounded-r-full font-medium text-[14px]`}>Bloqué</div>
                    </td>
                    <td className="px-4 py-2">
                        <button className={'float-right'}>
                            <img src="/icons/trash.svg" alt=""/>
                        </button>
                    </td>
                </tr>
                <tr className="h-[72px] border-b border-dashed">
                    <td className="px-4 py-2">
                        <input type="checkbox" className={'size-6 mt-[5px] appearance-none border-[1px] border-[#9FA8BC] rounded-lg checked:bg-blue-500 checked:border-blue-500 cursor-pointer transition-all'}/>
                    </td>
                    <td className="px-4 py-2">Company Name</td>
                    <td className="px-4 py-2">16</td>
                    <td className="px-4 py-2">
                        <div className={'flex gap-2 items-center'}>
                            <div className={'size-[40px] flex items-center rounded-full bg-blue-50 text-blue-500'}><span className={'mx-auto'}>BE</span></div>
                            Benjamin Evalent
                        </div>
                    </td>
                    <td className="px-4 py-2">norman@example.com</td>
                    <td className="px-4 py-2">
                        <div className={`${redBadgeStyle} px-[8px] py-[4px] w-[80px] text-center rounded-l-full rounded-r-full font-medium text-[14px]`}>Bloqué</div>
                    </td>
                    <td className="px-4 py-2">
                        <button className={'float-right'}>
                            <img src="/icons/trash.svg" alt=""/>
                        </button>
                    </td>
                </tr>
                <tr className="h-[72px] border-b border-dashed">
                    <td className="px-4 py-2">
                        <input type="checkbox" className={'size-6 mt-[5px] appearance-none border-[1px] border-[#9FA8BC] rounded-lg checked:bg-blue-500 checked:border-blue-500 cursor-pointer transition-all'}/>
                    </td>
                    <td className="px-4 py-2">Company Name</td>
                    <td className="px-4 py-2">16</td>
                    <td className="px-4 py-2">
                        <div className={'flex gap-2 items-center'}>
                            <div className={'size-[40px] flex items-center rounded-full bg-blue-50 text-blue-500'}><span className={'mx-auto'}>BE</span></div>
                            Benjamin Evalent
                        </div>
                    </td>
                    <td className="px-4 py-2">norman@example.com</td>
                    <td className="px-4 py-2">
                        <div className={`${redBadgeStyle} px-[8px] py-[4px] w-[80px] text-center rounded-l-full rounded-r-full font-medium text-[14px]`}>Bloqué</div>
                    </td>
                    <td className="px-4 py-2">
                        <button className={'float-right'}>
                            <img src="/icons/trash.svg" alt=""/>
                        </button>
                    </td>
                </tr>
                <tr className="h-[72px] border-b border-dashed">
                    <td className="px-4 py-2">
                        <input type="checkbox" className={'size-6 mt-[5px] appearance-none border-[1px] border-[#9FA8BC] rounded-lg checked:bg-blue-500 checked:border-blue-500 cursor-pointer transition-all'}/>
                    </td>
                    <td className="px-4 py-2">Company Name</td>
                    <td className="px-4 py-2">16</td>
                    <td className="px-4 py-2">
                        <div className={'flex gap-2 items-center'}>
                            <div className={'size-[40px] flex items-center rounded-full bg-blue-50 text-blue-500'}><span className={'mx-auto'}>BE</span></div>
                            Benjamin Evalent
                        </div>
                    </td>
                    <td className="px-4 py-2">norman@example.com</td>
                    <td className="px-4 py-2">
                        <div className={`${redBadgeStyle} px-[8px] py-[4px] w-[80px] text-center rounded-l-full rounded-r-full font-medium text-[14px]`}>Bloqué</div>
                    </td>
                    <td className="px-4 py-2">
                        <button className={'float-right'}>
                            <img src="/icons/trash.svg" alt=""/>
                        </button>
                    </td>
                </tr>
                <tr className="h-[72px] border-b border-dashed">
                    <td className="px-4 py-2">
                        <input type="checkbox" className={'size-6 mt-[5px] appearance-none border-[1px] border-[#9FA8BC] rounded-lg checked:bg-blue-500 checked:border-blue-500 cursor-pointer transition-all'}/>
                    </td>
                    <td className="px-4 py-2">Company Name</td>
                    <td className="px-4 py-2">16</td>
                    <td className="px-4 py-2">
                        <div className={'flex gap-2 items-center'}>
                            <div className={'size-[40px] flex items-center rounded-full bg-blue-50 text-blue-500'}><span className={'mx-auto'}>BE</span></div>
                            Benjamin Evalent
                        </div>
                    </td>
                    <td className="px-4 py-2">norman@example.com</td>
                    <td className="px-4 py-2">
                        <div className={`${redBadgeStyle} px-[8px] py-[4px] w-[80px] text-center rounded-l-full rounded-r-full font-medium text-[14px]`}>Bloqué</div>
                    </td>
                    <td className="px-4 py-2">
                        <button className={'float-right'}>
                            <img src="/icons/trash.svg" alt=""/>
                        </button>
                    </td>
                </tr>

                </tbody>
            </table>
        </>
    );
};

export default Page;