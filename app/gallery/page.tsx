"use client";

import { Button, Input } from "@nextui-org/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { BiSearch } from "react-icons/bi";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function Home() {
  const list = [
    {
      title: "Orange",
      img: "/images/modern/1.jpeg",
      price: "joe",
    },
    {
      title: "Tangerine",
      img: "/images/modern/2.jpeg",
      price: "rick",
    },
    {
      title: "Raspberry",
      img: "/images/modern/3.jpeg",
      price: "shelby",
    },
    {
      title: "Lemon",
      img: "/images/modern/4.jpeg",
      price: "thomas",
    },
    {
      title: "Avocado",
      img: "/images/modern/5.jpeg",
      price: "james",
    },
    {
      title: "Lemon 2",
      img: "/images/modern/6.jpeg",
      price: "hook",
    },
    {
      title: "Banana",
      img: "/images/modern/7.jpeg",
      price: "jammy",
    },
    {
      title: "Watermelon",
      img: "/images/modern/8.jpeg",
      price: "trent",
    },
    {
      title: "Watermelon",
      img: "/images/modern/9.jpeg",
      price: "trent",
    },
    {
      title: "Watermelon",
      img: "/images/modern/10.jpeg",
      price: "trent",
    },
    {
      title: "Watermelon",
      img: "/images/modern/11.jpeg",
      price: "trent",
    },
    {
      title: "Watermelon",
      img: "/images/modern/12.jpeg",
      price: "trent",
    },
    {
      title: "Watermelon",
      img: "/images/modern/13.jpeg",
      price: "trent",
    },
    {
      title: "Watermelon",
      img: "/images/modern/14.jpeg",
      price: "trent",
    },
    {
      title: "Watermelon",
      img: "/images/modern/15.jpeg",
      price: "trent",
    },
    {
      title: "Watermelon",
      img: "/images/modern/16.jpeg",
      price: "trent",
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
          variant="bordered"
        />
        <Dropdown>
          <DropdownTrigger>
            <Button variant="bordered">Filter</Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="new">New file</DropdownItem>
            <DropdownItem key="copy">Copy link</DropdownItem>
            <DropdownItem key="edit">Edit file</DropdownItem>
            <DropdownItem key="delete" className="text-danger" color="danger">
              Delete file
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>

      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 p-8">
        {list.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={() => console.log("item pressed")}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover h-[140px]"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.title}</b>
              <p className="text-default-500">{item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Footer />
    </main>
  );
}
