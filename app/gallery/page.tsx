"use client";

import { Button, Input, Pagination } from "@nextui-org/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { BiSearch } from "react-icons/bi";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { Card, CardFooter, Image } from "@nextui-org/react";
import { FaThumbsUp } from "react-icons/fa";

export default function Home() {
  const list = [
    {
      title: "The Vision of Eternity",
      img: "/images/modern/1.jpeg",
      desc: "By multiple creators, an exploration of time and perception.",
    },
    {
      title: "Mask of the Ancients",
      img: "/images/cultural/3.jpeg",
      desc: "A cultural symbol preserved through centuries. Authored by Thomas J.",
    },
    {
      title: "The Guardian of Shadows",
      img: "/images/cultural/4.jpeg",
      desc: "A mythical being in times of calamity. Created by Adam W.",
    },
    {
      title: "Citrus Burst",
      img: "/images/modern/28.jpeg",
      desc: "A fresh perspective on the vibrancy of nature. By Thomas.",
    },
    {
      title: "Green Delight",
      img: "/images/modern/5.jpeg",
      desc: "An ode to the richness of natural flavors. By James.",
    },
    {
      title: "Citrus Harmony",
      img: "/images/modern/6.jpeg",
      desc: "A blend of zesty freshness and artistic expression. By Hook.",
    },
    {
      title: "Tropical Fusion",
      img: "/images/modern/7.jpeg",
      desc: "A playful take on summer's sweetest fruit. By Jammy.",
    },
    {
      title: "Melon Serenity",
      img: "/images/modern/8.jpeg",
      desc: "The calmness of nature captured in every bite. By Trent.",
    },
    {
      title: "Melon Symphony",
      img: "/images/modern/9.jpeg",
      desc: "A symphony of flavors encapsulated in a single fruit. By Trent.",
    },
    {
      title: "Cultural Essence: Melon",
      img: "/images/cultural/1.jpeg",
      desc: "A representation of culture through the lens of simplicity. By Trent.",
    },
    {
      title: "Melon Traditions",
      img: "/images/cultural/5.jpeg",
      desc: "The intersection of tradition and modernity. By Trent.",
    },
    {
      title: "Summer's Melon Delight",
      img: "/images/modern/12.jpeg",
      desc: "A slice of summer captured perfectly. By Trent.",
    },
    {
      title: "Tales of the Melon",
      img: "/images/modern/13.jpeg",
      desc: "A fruit with stories as rich as its taste. By Trent.",
    },
    {
      title: "Whispers of the Melon",
      img: "/images/modern/14.jpeg",
      desc: "The subtle beauty in nature's quiet moments. By Trent.",
    },
    {
      title: "Melon and Culture",
      img: "/images/cultural/7.jpeg",
      desc: "A cultural journey through the symbolism of food. By Trent.",
    },
    {
      title: "Melon of Heritage",
      img: "/images/cultural/8.jpeg",
      desc: "The rich heritage told through the essence of melon. By Trent.",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="p-4 flex items-center gap-5 border-b border-foreground-100">
        <Input
          startContent={<BiSearch />}
          placeholder="Search for artworks"
          endContent={<Button variant="light">Search</Button>}
          variant="underlined"
        />
        <Dropdown>
          <DropdownTrigger>
            <Button variant="bordered">Filter</Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="new">Modern Art</DropdownItem>
            <DropdownItem key="copy">Cultural Art</DropdownItem>
            <DropdownItem key="edit">Most Popular</DropdownItem>
            <DropdownItem key="edit">Most Recent</DropdownItem>
            <DropdownItem key="edit">Most Voted</DropdownItem>
            <DropdownItem key="delete">Other</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>

      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 px-4 py-4">
        {list.map((item, index) => (
          <Card
            isFooterBlurred
            isPressable
            className="w-full h-[300px] col-span-1"
            key={index}
          >
            <Image
              removeWrapper
              alt={item.title}
              className="z-0 w-full h-full object-cover"
              src={item.img}
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <div className="flex flex-col">
                  <p className="text-start font-bold text-primary">
                    {item.title}
                  </p>
                  <p className="text-tiny text-start text-white/60">
                    {item.desc}
                  </p>
                </div>
              </div>
              <p>
                25 <FaThumbsUp />
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex justify-center">
        <Pagination
          loop
          showControls
          color="primary"
          total={5}
          initialPage={1}
        />
      </div>

      <Footer />
    </main>
  );
}
