"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Input,
} from "@nextui-org/react";
import { AcmeLogo } from "./icon/AcmeLogo";
import { SearchIcon } from "./icon/SearchIcon";
import { Prata } from "next/font/google";

const prata = Prata({ subsets: ["latin"], weight: "400" });

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Find Design", href: "/gallery" },
    { name: "Gallery", href: "/gallery" },
    { name: "Artist", href: "/artist" },
    { name: "Blog", href: "/blog" },
    { name: "Hire Freelancer", href: "#" },
    { name: "My Settings", href: "#" },
    { name: "Team Settings", href: "#" },
    { name: "Help & Feedback", href: "#" },
    { name: "Log Out", href: "#" },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      isBlurred
      maxWidth="full"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/" color="foreground">
            <AcmeLogo />
            <p className={`${prata.className} font-bold text-inherit`}>
              ArtFusion
            </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link aria-current="page" href="/">
            Find Design
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/gallery">
            Gallery
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/artist">
            Artist
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/blog" color="foreground">
            Blog
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Hire Freelancer
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Input placeholder="Search" startContent={<SearchIcon />} size="sm" />
        </NavbarItem>
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem> */}
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="/SignIn"
            variant="flat"
            size="sm"
          >
            Sign In
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href={item.href}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
