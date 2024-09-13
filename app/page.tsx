"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ChevronLeft,
  Home,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  Settings,
  ShoppingCart,
  Upload,
  Users2,
  File,
  ListFilter,
  MoveRight,
  Check, User,
  FilterIcon
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel
} from "@/components/ui/select"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider
} from "@/components/ui/tooltip"
import React, { useState, useEffect } from 'react';
import PaginationComp from './pagination_ui';
import Footer from './footer';
import NavigationFilters from "./filters";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"
import copy from 'clipboard-copy';


export default function MainPage() {
  const [news, setNews] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [lang, setLang] = useState("");
  const [country, setCountry] = useState("");
  const [open, setOpen] = useState(false);
  const [search_val, setsearch_val] = useState("");


  const copyToClipboard = async () => {
    const formattedNews = news
      .map(
        (item: any) =>
          `Title: ${item.title}\nDescription: ${item.description}\nContent: ${item.content}\nURL: ${item.url}\nImage: ${item.image}\nPublished At: ${new Date(item.publishedAt).toLocaleString()}\nSource: ${item.source.name} (${item.source.url})`
      )
      .join("\n\n");

    await copy(formattedNews);

    toast(`Success!`, {
      description: "Copied all the news to clipboard.",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    })
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`/api/news`);
        const data = await response.json();
        setNews(data.articles);
        console.log(data.articles)
      } catch (error: any) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);


  const fetchNews = async (category: string, lang: string, country: string) => {
    if (!category) {
      category = "general"
    }

    if (!lang) {
      lang = "any"
    }

    if (!country) {
      country = "any"
    }

    try {
      const response = await fetch(`/api/search_news?category=${category}&lang=${lang}&country=${country}`);
      const data = await response.json();
      setNews(data.articles);
      console.log(data.articles);
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };


  const searchNews = async (query: string) => {
    try {
      const response = await fetch(`/api/search_news?q=${query}`);
      const data = await response.json();
      setNews(data.articles);
      console.log(data.articles);
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Toaster />
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Link
            href="#"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Home className="h-5 w-5" />
                  <span className="sr-only">Home</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Home</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Package className="h-5 w-5" />
                  <span className="sr-only">Acowale</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Acowale</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Users2 className="h-5 w-5" />
                  <span className="sr-only">About</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">About</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <LineChart className="h-5 w-5" />
                  <span className="sr-only">GNews</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">GNews</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Settings className="h-5 w-5" />
                  <span className="sr-only">Settings</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                >
                  <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <Link
                  href="/"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Home
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-foreground"
                >
                  <Package className="h-5 w-5" />
                  Acowale
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Users2 className="h-5 w-5" />
                  About
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  GNews
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              value={search_val}
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
              onChange={(e) => setsearch_val(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  searchNews((e.target as HTMLInputElement).value);
                  setsearch_val("");
                }
              }}
            />

          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <img
                  src={`https://avatar.vercel.sh/vercel.svg?text=AC&?size=50`}
                  alt="Avatar"
                  className="overflow-hidden rounded-full"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="grid flex-1 items-start p-4 sm:px-6 sm:py-0">
          <div className="ml-auto flex items-center gap-2">
            <Dialog open={open} onOpenChange={setOpen}>
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
                      <Select onValueChange={(e) => setCategory(e)}>
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
                      <Select onValueChange={(e) => setLang(e)}>
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
                      <Select onValueChange={(e) => setCountry(e)}>
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
                  <DialogClose asChild>
                    <Button onClick={() => {
                      fetchNews(category, lang, country);
                    }}>Apply</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Button size="sm" variant="outline" className="h-8 gap-1" onClick={copyToClipboard}>
              <File className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Export
              </span>
            </Button>
          </div>


          <div className="p-6">
            <div className="w-full">
              <div className="container mx-auto">
                <div className="flex flex-col gap-10">
                  <div className="flex gap-4 flex-col items-start">
                    <div>
                      <Badge>AccoNews!</Badge>
                    </div>
                    <div className="flex gap-2 flex-col">
                      <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-bold text-left">
                        Unlock the Power of Global News with GNews API
                      </h2>
                      <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                        Access over 60,000 sources and tap into real-time headlines or historical news articles.
                      </p>
                    </div>
                  </div>

                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {news.length > 0 ? (
                      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">{news.map((post: any, indx: any) => (
                        <div key={indx} className="flex flex-col items-start justify-between">
                          <div className="relative w-full">
                            <img
                              src={post.image}
                              alt=""
                              className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                            />
                            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                          </div>
                          <div className="max-w-xl">
                            <div className="mt-8 flex items-center gap-x-4 text-xs">
                              <Badge>{new Date(post.publishedAt).toLocaleString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit',
                              })}</Badge>
                            </div>
                            <div className="group relative">
                              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                <a href={post.url}>
                                  <span className="absolute inset-0" />
                                  {post.title}
                                </a>
                              </h3>
                              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                              <img src={`https://avatar.vercel.sh/vercel.svg?text=${post.source.name.slice(0, 2)}&?size=50`} alt="" className="h-10 w-10 rounded-full bg-gray-100" />
                              <div className="text-sm leading-6">
                                <p className="font-semibold text-gray-900">
                                  <a href={post.source.url}>
                                    <span className="absolute inset-0" />
                                    {post.source.name}
                                  </a>
                                </p>
                                <p className="text-gray-600">{post.source.url.replace("https://", "")}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                      }</div>) : (
                      <div>
                        <div className="w-full">
                          <div className="container mx-auto">
                            <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
                              <div className="flex gap-4 flex-col">
                                {loading ? (
                                  <>
                                    <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
                                      Loading....
                                    </h1>
                                    <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
                                      Please wait, while we load!
                                    </p>
                                  </>
                                ) : (
                                  <>
                                    <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
                                      Empty!
                                    </h1>
                                    <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
                                      Sorry, No news found. <br /> Try another search.
                                    </p>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <PaginationComp></PaginationComp>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer></Footer>
        </main>
      </div>
    </div>
  )
}
