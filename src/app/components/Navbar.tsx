"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl  mx-auto z-50", className)}
        >
            <Menu setActive={setActive} >
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active} item="Home">
                    </MenuItem>
                </Link>
                <MenuItem setActive={setActive} active={active} item="Courses">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/web-dev">All Courses</HoveredLink>
                        <HoveredLink href="/web-dev">Basic Music Theory</HoveredLink>
                        <HoveredLink href="/interface-design">Advanced Composition</HoveredLink>
                        <HoveredLink href="/seo">SongWriting</HoveredLink>
                        <HoveredLink href="/branding">Music Production</HoveredLink>
                    </div>
                </MenuItem>
                <Link href={'/contact_us'}>
                    <MenuItem setActive={setActive} active={active} item="ContactUs">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/hobby">Hobby</HoveredLink>
                            <HoveredLink href="/individual">Individual</HoveredLink>
                            <HoveredLink href="/team">Team</HoveredLink>
                            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                        </div>
                    </MenuItem>
                </Link>
            </Menu>
        </div>
    );
}

export default Navbar