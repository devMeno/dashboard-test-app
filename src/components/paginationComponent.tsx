import React, {useState} from 'react';
import {fakeOrganizationsData} from "@/utils/datas/fakeOrganizationsData";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

const PaginationComponent = ({
                                 totalPages,
                                 currentPage,
                                 goToPage,
                                 handlePrevious,
                                 handleNext
                             }: {
    totalPages: number,
    currentPage: number,
    goToPage: (page: number) => void,
    handlePrevious: () => void,
    handleNext: () => void
}) => {

    return (
        <>
        <Pagination className="mt-[24px] float-right w-fit">
            <PaginationContent>
                {/* Bouton Précédent */}
                <PaginationItem className="text-[#9FA8BC]">
                    <PaginationPrevious onClick={handlePrevious} />
                </PaginationItem>

                {/* Affichage dynamique des pages */}
                {totalPages <= 7 ? (
                    // Affiche toutes les pages si totalPages <= 7
                    [...Array(totalPages)].map((_, i) => {
                        const pageNumber = i + 1;
                        return (
                            <PaginationItem key={pageNumber} className="text-[#9FA8BC]">
                                <PaginationLink
                                    href="#"
                                    onClick={(e) => { e.preventDefault(); goToPage(pageNumber); }}
                                    className={currentPage === pageNumber ? "bg-[#E9F0FF] text-[#246BFD]" : ""}
                                >
                                    {pageNumber}
                                </PaginationLink>
                            </PaginationItem>
                        );
                    })
                ) : (
                    <>
                        {/* Première page */}
                        <PaginationItem className="text-[#9FA8BC]">
                            <PaginationLink
                                href="#"
                                onClick={() => goToPage(1)}
                                className={currentPage === 1 ? "bg-[#E9F0FF] text-[#246BFD]" : ""}
                            >
                                1
                            </PaginationLink>
                        </PaginationItem>

                        {/* currentPage dans les 5 premières pages */}
                        {currentPage <= 5 ? (
                            <>
                                {[2, 3, 4, 5].map((pageNumber) => (
                                    <PaginationItem key={pageNumber} className="text-[#9FA8BC]">
                                        <PaginationLink
                                            href="#"
                                            onClick={() => goToPage(pageNumber)}
                                            className={currentPage === pageNumber ? "bg-[#E9F0FF] text-[#246BFD]" : ""}
                                        >
                                            {pageNumber}
                                        </PaginationLink>
                                    </PaginationItem>
                                ))}

                                <PaginationItem className="text-[#9FA8BC]">
                                    <PaginationEllipsis />
                                </PaginationItem>

                                {/* Dernière page */}
                                <PaginationItem className="text-[#9FA8BC]">
                                    <PaginationLink href="#" onClick={() => goToPage(totalPages)}>
                                        {totalPages}
                                    </PaginationLink>
                                </PaginationItem>
                            </>
                        ) : currentPage > 5 && currentPage < totalPages - 4 ? (
                            // currentPage ni dans les 5 premières ni dans les 5 dernières pages
                            <>
                                <PaginationItem className="text-[#9FA8BC]">
                                    <PaginationEllipsis />
                                </PaginationItem>

                                {[currentPage - 1, currentPage, currentPage + 1].map((pageNumber) => (
                                    <PaginationItem key={pageNumber} className="text-[#9FA8BC]">
                                        <PaginationLink
                                            href="#"
                                            onClick={() => goToPage(pageNumber)}
                                            className={currentPage === pageNumber ? "bg-[#E9F0FF] text-[#246BFD]" : ""}
                                        >
                                            {pageNumber}
                                        </PaginationLink>
                                    </PaginationItem>
                                ))}

                                <PaginationItem className="text-[#9FA8BC]">
                                    <PaginationEllipsis />
                                </PaginationItem>

                                {/* Dernière page */}
                                <PaginationItem className="text-[#9FA8BC]">
                                    <PaginationLink href="#" onClick={() => goToPage(totalPages)}>
                                        {totalPages}
                                    </PaginationLink>
                                </PaginationItem>
                            </>
                        ) : (
                            // currentPage dans les 5 dernières pages
                            <>
                                <PaginationItem className="text-[#9FA8BC]">
                                    <PaginationEllipsis />
                                </PaginationItem>

                                {[totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages].map((pageNumber) => (
                                    <PaginationItem key={pageNumber} className="text-[#9FA8BC]">
                                        <PaginationLink
                                            href="#"
                                            onClick={() => goToPage(pageNumber)}
                                            className={currentPage === pageNumber ? "bg-[#E9F0FF] text-[#246BFD]" : ""}
                                        >
                                            {pageNumber}
                                        </PaginationLink>
                                    </PaginationItem>
                                ))}
                            </>
                        )}
                    </>
                )}

                {/* Bouton Suivant */}
                <PaginationItem className="text-[#9FA8BC]">
                    <PaginationNext onClick={handleNext} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
        </>
    );
};

export default PaginationComponent;