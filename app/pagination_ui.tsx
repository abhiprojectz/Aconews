import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"



export default function PaginationComp() {
    const showtoast = (x: string) => {
        toast(`Page ${x} clicked...`, {
            description: "Due to GNEWS subscription limited, pagination is not possible, also max items returned are limited to 10.",
            action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
            },
        })
    }

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                    <Button
                        variant="outline"
                        onClick={() => showtoast("1")}
                    >1</Button>
                </PaginationItem>
                <PaginationItem>
                    <Button
                        variant="outline"
                        className="border-0 shadow-none bg-transparent"
                        onClick={() => showtoast("2")}
                    >2</Button>
                </PaginationItem>
                <PaginationItem>
                    <Button
                        variant="outline"
                        className="border-0 shadow-none bg-transparent"
                        onClick={() => showtoast("3")}
                    >3</Button>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext href="#" />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}
