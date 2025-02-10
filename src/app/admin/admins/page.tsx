"use client"
import React from 'react';
import {useState} from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {fakeAdminsData} from "@/utils/datas/fakeAdminsData";
import PaginationComponent from "@/components/paginationComponent";
import {inputStyle,labelStyle,greenBadgeStyle,redBadgeStyle} from "@/utils/styles";

const itemsPerPage = 5;

function getBadgeStyle(status: string) {
    switch (status) {
        case "actif":
            return greenBadgeStyle;
        case "bloqué":
            return redBadgeStyle;
    }
}

function getInitials(name: string) {
    const initials = name
        .split(" ")
        .map(word => word[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();
    return initials;
}

const Page = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const goToPage = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };


    // Calcul des données à afficher
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageData = fakeAdminsData.slice(startIndex, endIndex);

    // Nombre total de pages
    const totalPages = Math.ceil(fakeAdminsData.length / itemsPerPage);

    // Gestion du changement de page
    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <>
            <div className={'flex justify-between w-full px-4'}>
                <div className={'flex items-center gap-2'}>
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
            <div className={'relative overflow-auto max-h-[400px] rounded-t-lg'}>
                <table className="w-full table-fixed overflow-hidden rounded-t-lg">
                    <thead className="bg-[#E9F0FF] sticky top-0 z-10">
                    <tr className="h-[40px] text-[14px] py-[8px] font-bold">
                        <th className="w-[4%] text-left px-4 rounded-tl-[8px]"></th>
                        <th className="w-[32%] text-left px-4">Administrateurs</th>
                        <th className="w-[36%] text-left px-4">Adresse e-mail</th>
                        <th className="w-[20%] text-left px-4">Statut</th>
                        <th className="w-auto text-left px-4 rounded rounded-tr-[8px]"></th>
                    </tr>
                    </thead>
                    <tbody>
                        {pageData.map((item, index) => (
                            <tr className="h-[72px] border-b border-dashed" key={index}>
                                <td className="px-[16px] py-[8px]">
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
                                <td className="px-[16px] py-[8px]">
                                    <div className={'flex gap-2 items-center'}>
                                        <div className={'size-[40px] flex items-center rounded-full bg-[#DCDCFE] text-[#246BFD]'}><span className={'mx-auto'}>{getInitials(item.name)}</span></div>
                                        {item.name}
                                    </div>
                                </td>
                                <td className="px-[16px] py-[8px]">{item.email}</td>
                                <td className="px-[16px] py-[8px]">
                                    <div className={`${getBadgeStyle(item.status)} px-[8px] py-[4px] w-[80px] text-center rounded-l-full rounded-r-full font-medium text-[14px]`}>{item.status}</div>
                                </td>
                                <td className="px-[16px] py-[8px]">
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
                                                    <DialogTitle className={'text-center mb-[40px]'}>Supprimer un admin</DialogTitle>
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
                        ))}
                    </tbody>
                </table>
            </div>
            {/* PaginationComponent */}
            <div className={'float-right mr-[30px]'}>
                <PaginationComponent
                    totalPages={totalPages}
                    currentPage={currentPage}
                    goToPage={goToPage}
                    handleNext={handleNext}
                    handlePrevious={handlePrevious}
                />
            </div>
        </>
    );
};

export default Page;