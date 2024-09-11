"use client";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";

export default function Artist() {
  const list = [
    {
      name: "John Smith",
      img: "/images/artist/1.jpeg",
      artcount: 5,
      special: "Cultural",
    },
    {
      name: "Sarah Johnson",
      img: "/images/artist/2.jpeg",
      artcount: 6,
      special: "Modern",
    },
    {
      name: "Michael Brown",
      img: "/images/artist/3.jpeg",
      artcount: 4,
      special: "Mix",
    },
    {
      name: "David Jones",
      img: "/images/artist/4.jpeg",
      artcount: 6,
      special: "Cultural",
    },
    {
      name: "James Garcia",
      img: "/images/artist/5.jpeg",
      artcount: 7,
      special: "Modern",
    },
    {
      name: "Emma Miller",
      img: "/images/artist/6.jpeg",
      artcount: 5,
      special: "Mix",
    },
    {
      name: "Robert Davis",
      img: "/images/artist/7.jpeg",
      artcount: 5,
      special: "Cultural",
    },
    {
      name: "Olivia Wilson",
      img: "/images/artist/8.jpeg",
      artcount: 6,
      special: "Modern",
    },
    {
      name: "William Martinez",
      img: "/images/artist/9.jpeg",
      artcount: 6,
      special: "Mix",
    },
    {
      name: "Sophia Anderson",
      img: "/images/artist/10.jpeg",
      artcount: 5,
      special: "Cultural",
    },
    {
      name: "Isabella Taylor",
      img: "/images/artist/11.jpeg",
      artcount: 6,
      special: "Modern",
    },
    {
      name: "Mia Thomas",
      img: "/images/artist/12.jpeg",
      artcount: 5,
      special: "Mix",
    },
    {
      name: "Amelia Jackson",
      img: "/images/artist/13.jpeg",
      artcount: 5,
      special: "Cultural",
    },
    {
      name: "Daniel White",
      img: "/images/artist/14.jpeg",
      artcount: 7,
      special: "Modern",
    },
    {
      name: "Charlotte Harris",
      img: "/images/artist/15.jpeg",
      artcount: 5,
      special: "Mix",
    },
    {
      name: "Lucas Martin",
      img: "/images/artist/16.jpeg",
      artcount: 6,
      special: "Cultural",
    },
    {
      name: "Ava Thompson",
      img: "/images/artist/17.jpeg",
      artcount: 7,
      special: "Modern",
    },
    {
      name: "Henry Moore",
      img: "/images/artist/18.jpeg",
      artcount: 6,
      special: "Mix",
    },
    {
      name: "Evelyn Clark",
      img: "/images/artist/19.jpeg",
      artcount: 5,
      special: "Cultural",
    },
    {
      name: "Harper Lewis",
      img: "/images/artist/20.jpeg",
      artcount: 6,
      special: "Modern",
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />

      <h1 className="text-4xl font-bold text-center py-8">Verified Artist</h1>

      <div className="gap-4 grid grid-cols-2 sm:grid-cols-4 mt-4 px-4">
        {list.map((item, index) => (
          <Card className="py-4" key={index} isPressable>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">{item.special}</p>
              <small className="text-default-500">{item.artcount} art</small>
              <h4 className="font-bold text-large">{item.name}</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl w-full h-full"
                src={item.img}
                width={270}
              />
            </CardBody>
          </Card>
        ))}
      </div>

      <Footer />
    </main>
  );
}
