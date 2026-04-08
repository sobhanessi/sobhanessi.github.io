"use client";
import {
    Navbar as HeroUINavbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarBrand,
    NavbarItem,
    NavbarMenuItem,
} from "@heroui/navbar";
import Image from "next/image";
import { Link } from "@heroui/link";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

import logo from "../static/logo.png";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, LinkedInIcon } from "@/components/icons";

export const Navbar = () => {
    const pathname = usePathname();

    return (
        <HeroUINavbar maxWidth="xl" position="sticky">
            <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
                <NavbarBrand as="li" className="gap-3 max-w-fit">
                    <NextLink
                        className="flex justify-start items-center gap-1"
                        href="/"
                    >
                        <Image
                            alt="Sobhan Esfandyari Logo"
                            height={256}
                            src={logo}
                            width={256}
                        />
                    </NextLink>
                </NavbarBrand>
                <ul className="hidden lg:flex gap-4 justify-start ml-2">
                    {siteConfig.navItems.map((item) => (
                        <NavbarItem key={item.href}>
                            <Link
                                color={
                                    item.href === pathname
                                        ? "primary"
                                        : "foreground"
                                }
                                href={item.href}
                            >
                                {item.label}
                            </Link>
                        </NavbarItem>
                    ))}
                </ul>
            </NavbarContent>

            <NavbarContent
                className="hidden sm:flex basis-1/5 sm:basis-full"
                justify="end"
            >
                <NavbarItem className="hidden sm:flex gap-2">
                    <Link
                        isExternal
                        aria-label="Github"
                        href={siteConfig.links.github}
                    >
                        <GithubIcon className="text-default-500" />
                    </Link>
                    <Link
                        isExternal
                        aria-label="LinkedIn"
                        href={siteConfig.links.linkedIn}
                    >
                        <LinkedInIcon className="text-default-500" />
                    </Link>
                    <ThemeSwitch />
                </NavbarItem>
                {/* <NavbarItem className="hidden lg:flex">
                    {searchInput}
                </NavbarItem> */}
                <NavbarMenuToggle className="lg:hidden" />
            </NavbarContent>

            <NavbarContent className="sm:hidden basis-1 pl-4 " justify="end">
                <Link
                    isExternal
                    aria-label="Github"
                    href={siteConfig.links.github}
                >
                    <GithubIcon className="text-default-500" />
                </Link>
                <Link
                    isExternal
                    aria-label="LinkedIn"
                    href={siteConfig.links.linkedIn}
                >
                    <LinkedInIcon className="text-default-500" />
                </Link>
                <ThemeSwitch />
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarMenu>
                {/* {searchInput} */}
                <div className="mx-4 mt-2 flex flex-col gap-2">
                    {siteConfig.navItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                color={
                                    item.href === pathname
                                        ? "primary"
                                        : "foreground"
                                }
                                href={item.href}
                                size="lg"
                            >
                                {item.label}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </div>
            </NavbarMenu>
        </HeroUINavbar>
    );
};
