import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

const inputStyle = "border border-[#E7EBF3] text-[#04060F] text-[16px] font-400 rounded rounded-l-full rounded-r-full w-[496px]  h-[48px] px-[20px] bg-white"
const labelStyle = "absolute left-4 -top-3 bg-white px-1 font-bold text-[#9FA8BC] text-[12px]"
const eyeStyle = "absolute inset-y-0 right-0 flex items-center pr-3"
const greenBadgeStyle = "text-green-500 bg-green-100"
const redBadgeStyle = "text-red-500 bg-red-100"

const Page = () => {
    return (
        <>
            <div className={'flex justify-between w-full px-4'}>
                <div className={'flex items-center gap-2'}>
                    <input type="checkbox" className={'size-6 appearance-none border-[1px] border-[#9FA8BC] rounded-lg checked:bg-blue-500 checked:border-blue-500 cursor-pointer transition-all'}/>
                    <select name="" id="" className={'w-[189px] h-[32px] text-[14px] font-medium text-[#9FA8BC] rounded-l-full rounded-r-full text-center'}>
                        <option value="">Sélectionner une action</option>
                    </select>
                </div>
                <div className={'flex items-center gap-3'}>
                    <Dialog>
                        <DialogTrigger>
                            <div className={'text-[14px] text-white bg-[#246BFD] rounded-l-full rounded-r-full py-[10px] px-[24px]'}>Ajouter un admin</div>
                        </DialogTrigger>
                        <DialogContent className={'px-[40px] py-[40px] w-[624px]'}>
                            <DialogHeader>
                                <DialogTitle className={'text-center mb-[40px]'}>Ajouter un admin</DialogTitle>

                                <div className={'flex mx-auto'}>
                                    <form action="" className={'flex flex-col gap-[40px]'}>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="nom"
                                                className={inputStyle}
                                                placeholder="Nom de l'admin"
                                            />
                                            <label
                                                htmlFor="nom"
                                                className={labelStyle}
                                            >
                                                Nom
                                            </label>
                                        </div>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="prenom"
                                                className={inputStyle}
                                                placeholder="Prénom de l'admin"
                                            />
                                            <label
                                                htmlFor="prenom"
                                                className={labelStyle}
                                            >
                                                Prénom
                                            </label>
                                        </div>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                id="email"
                                                className={inputStyle}
                                                placeholder="Adresse e-mail de l'admin"
                                            />
                                            <label
                                                htmlFor="email"
                                                className={labelStyle}
                                            >
                                                E-mail
                                            </label>
                                        </div>
                                        <div className={'flex justify-center'}>
                                            <button type={"submit"} className={'font-600 text-16 justify-center text-white bg-blue-500 w-[240px] h-[40px] rounded rounded-l-full rounded-r-full'}>Créer le compte</button>
                                        </div>
                                    </form>
                                </div>

                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                    <div className="flex items-center border border-gray-300 rounded-l-full rounded-r-full overflow-hidden max-w-md mx-auto">
                        {/* Icône à gauche */}
                        <div className="pl-3 pr-2">
                            <img src="/icons/Vector.svg" alt="" className="h-5 w-5 text-gray-500"/>
                        </div>

                        {/* Input avec placeholder */}
                        <input
                            type="text"
                            placeholder="Rechercher un utilisateur"
                            className="flex-grow px-2 py-2 focus:outline-none text-[14px]"
                        />

                        {/* Icône à droite */}
                        <div className="pr-3 pl-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-5 w-5 text-gray-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <hr className={'my-[24px]'}/>
            <table className="w-full table-fixed mt-[24px] overflow-hidden rounded-t-lg">
                <thead className="bg-[#E9F0FF]">
                <tr className="h-[40px] text-[14px] py-[8px] font-bold">
                    <th className="w-[4%] text-left px-4 rounded-tl-[8px]"></th>
                    <th className="w-[32%] text-left px-4">Administrateurs</th>
                    <th className="w-[36%] text-left px-4">Adresse e-mail</th>
                    <th className="w-[20%] text-left px-4">Statut</th>
                    <th className="w-auto text-left px-4 rounded rounded-tr-[8px]"></th>
                </tr>
                </thead>
                <tbody>
                <tr className="h-[72px] border-b border-dashed">
                    <td className="px-4 py-2">
                        <input type="checkbox" className={'size-6 mt-[5px] appearance-none border-[1px] border-[#9FA8BC] rounded-lg checked:bg-blue-500 checked:border-blue-500 cursor-pointer transition-all'}/>
                    </td>
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
                        <div className={'float-right flex gap-2'}>
                            <Dialog>
                                <DialogTrigger><img src="/icons/edit-2.svg" alt=""/></DialogTrigger>
                                <DialogContent className={'px-[40px] py-[40px] w-[624px]'}>
                                    <DialogHeader>
                                        <DialogTitle className={'text-center mb-[40px]'}>Modifier un admin</DialogTitle>

                                            <div className={'flex mx-auto'}>
                                                <form action="" className={'flex flex-col gap-[40px]'}>
                                                    <div className="relative">
                                                        <input
                                                            type="text"
                                                            id="nom"
                                                            className={inputStyle}
                                                            placeholder="Entrez votre adresse e-mail"
                                                        />
                                                        <label
                                                            htmlFor="nom"
                                                            className={labelStyle}
                                                        >
                                                            Nom
                                                        </label>
                                                    </div>
                                                    <div className="relative">
                                                        <input
                                                            type="text"
                                                            id="prenom"
                                                            className={inputStyle}
                                                            placeholder="Entrez votre adresse e-mail"
                                                        />
                                                        <label
                                                            htmlFor="prenom"
                                                            className={labelStyle}
                                                        >
                                                            Prénom
                                                        </label>
                                                    </div>
                                                    <div className="relative">
                                                        <input
                                                            type="email"
                                                            id="email"
                                                            className={inputStyle}
                                                            placeholder="Entrez votre adresse e-mail"
                                                        />
                                                        <label
                                                            htmlFor="email"
                                                            className={labelStyle}
                                                        >
                                                            E-mail
                                                        </label>
                                                    </div>
                                                    <div className="relative">
                                                        {/* Champ select */}
                                                        <select
                                                            id="password"
                                                            className={inputStyle} // Réutilisez la classe inputStyle
                                                        >
                                                            <option value="option1">Actif</option>
                                                            <option value="option2">Bloqué</option>
                                                        </select>

                                                        {/* Label */}
                                                        <label
                                                            htmlFor="password"
                                                            className={labelStyle} // Réutilisez la classe labelStyle
                                                        >
                                                            Statut
                                                        </label>
                                                    </div>
                                                    <div className={'flex justify-center'}>
                                                        <button type={"submit"} className={'font-600 text-16 justify-center text-white bg-blue-500 w-[240px] h-[40px] rounded rounded-l-full rounded-r-full'}>Modifier</button>
                                                    </div>
                                                </form>
                                            </div>

                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
                            <Dialog>
                                <DialogTrigger>
                                    <div>
                                        <img src="/icons/trash.svg" alt=""/>
                                    </div>
                                </DialogTrigger>
                                <DialogContent className={'px-[40px] py-[40px] w-[624px]'}>
                                    <DialogHeader>
                                        <DialogTitle className={'text-center mb-[40px]'}>Ajouter un admin</DialogTitle>
                                        <p className={'mx-auto'}>Voulez-vous supprimer l'admin <span className={'font-bold'}>Benjamin Evalent</span> ?</p>
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
                </tbody>
            </table>
        </>
    );
};

export default Page;