import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FilterIcon } from "lucide-react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup,
    SelectLabel
} from "@/components/ui/select"



export default function NavigationFilters() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="sm" variant="outline" className="h-8 gap-1">
                    <FilterIcon className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Filters
                    </span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Filter Options</DialogTitle>
                    <DialogDescription>
                        Apply filters to refine your search results. Select your preferences and click apply when you're ready.
                    </DialogDescription>

                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="space-y-4">
                        {/* Category Filter */}
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="category" className="text-right">
                                Category
                            </Label>
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Categories</SelectLabel>
                                        <SelectItem value="general">General</SelectItem>
                                        <SelectItem value="world">World</SelectItem>
                                        <SelectItem value="nation">Nation</SelectItem>
                                        <SelectItem value="business">Business</SelectItem>
                                        <SelectItem value="technology">Technology</SelectItem>
                                        <SelectItem value="entertainment">Entertainment</SelectItem>
                                        <SelectItem value="sports">Sports</SelectItem>
                                        <SelectItem value="science">Science</SelectItem>
                                        <SelectItem value="health">Health</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Language Filter */}
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="lang" className="text-right">
                                Language
                            </Label>
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select a language" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Languages</SelectLabel>
                                        <SelectItem value="ar">Arabic</SelectItem>
                                        <SelectItem value="zh">Chinese</SelectItem>
                                        <SelectItem value="nl">Dutch</SelectItem>
                                        <SelectItem value="en">English</SelectItem>
                                        <SelectItem value="fr">French</SelectItem>
                                        <SelectItem value="de">German</SelectItem>
                                        <SelectItem value="el">Greek</SelectItem>
                                        <SelectItem value="he">Hebrew</SelectItem>
                                        <SelectItem value="hi">Hindi</SelectItem>
                                        <SelectItem value="it">Italian</SelectItem>
                                        <SelectItem value="ja">Japanese</SelectItem>
                                        <SelectItem value="ml">Malayalam</SelectItem>
                                        <SelectItem value="mr">Marathi</SelectItem>
                                        <SelectItem value="no">Norwegian</SelectItem>
                                        <SelectItem value="pt">Portuguese</SelectItem>
                                        <SelectItem value="ro">Romanian</SelectItem>
                                        <SelectItem value="ru">Russian</SelectItem>
                                        <SelectItem value="es">Spanish</SelectItem>
                                        <SelectItem value="sv">Swedish</SelectItem>
                                        <SelectItem value="ta">Tamil</SelectItem>
                                        <SelectItem value="te">Telugu</SelectItem>
                                        <SelectItem value="uk">Ukrainian</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Country Filter */}
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="country" className="text-right">
                                Country
                            </Label>
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select a country" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Countries</SelectLabel>
                                        <SelectItem value="au">Australia</SelectItem>
                                        <SelectItem value="br">Brazil</SelectItem>
                                        <SelectItem value="ca">Canada</SelectItem>
                                        <SelectItem value="cn">China</SelectItem>
                                        <SelectItem value="eg">Egypt</SelectItem>
                                        <SelectItem value="fr">France</SelectItem>
                                        <SelectItem value="de">Germany</SelectItem>
                                        <SelectItem value="gr">Greece</SelectItem>
                                        <SelectItem value="hk">Hong Kong</SelectItem>
                                        <SelectItem value="in">India</SelectItem>
                                        <SelectItem value="ie">Ireland</SelectItem>
                                        <SelectItem value="il">Israel</SelectItem>
                                        <SelectItem value="it">Italy</SelectItem>
                                        <SelectItem value="jp">Japan</SelectItem>
                                        <SelectItem value="nl">Netherlands</SelectItem>
                                        <SelectItem value="no">Norway</SelectItem>
                                        <SelectItem value="pk">Pakistan</SelectItem>
                                        <SelectItem value="pe">Peru</SelectItem>
                                        <SelectItem value="ph">Philippines</SelectItem>
                                        <SelectItem value="pt">Portugal</SelectItem>
                                        <SelectItem value="ro">Romania</SelectItem>
                                        <SelectItem value="ru">Russian Federation</SelectItem>
                                        <SelectItem value="sg">Singapore</SelectItem>
                                        <SelectItem value="es">Spain</SelectItem>
                                        <SelectItem value="se">Sweden</SelectItem>
                                        <SelectItem value="ch">Switzerland</SelectItem>
                                        <SelectItem value="tw">Taiwan</SelectItem>
                                        <SelectItem value="ua">Ukraine</SelectItem>
                                        <SelectItem value="gb">United Kingdom</SelectItem>
                                        <SelectItem value="us">United States</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
                <DialogFooter>
                    <Button onClick={() => {
                        const url = new URL('https://gnews.io/api/v4/top-headlines');
                        const params = new URLSearchParams({
                            category: 'general',
                            lang: 'en',
                            country: 'us',
                            apikey: '3babe46f6277f4817e1ef02b357f28ec'
                        });

                        url.search = params.toString();
                        fetch(url);
                    }}>Apply</Button>                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
