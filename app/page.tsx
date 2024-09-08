import { BiChevronRight } from "react-icons/bi";
import Header from "./components/Header";
import { Button } from "@nextui-org/react";
import { BackgroundBeamsWithCollision } from "./components/ui/background-beams-with-collision";
import { FeaturesSectionDemo } from "./components/FeaturesSection";
import { InfiniteMovingCards } from "./components/ui/infinite-moving-card";
import { Prata } from "next/font/google";

const prata = Prata({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <BackgroundBeamsWithCollision>
        <div className="flex flex-col justify-center items-center min-h-screen px-24 py-12 gap-6">
          <h1
            className={`${prata.className} text-6xl font-bold text-center max-w-5xl`}
          >
            <span className="bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent font-extrabold mr-3">
              Discover
            </span>
            Stunning Artworks and Designs from Talented Creators.
          </h1>
          <p className="text-xl">
            Immerse yourself in a world of creativity and inspiration from
            emerging and established artists.
          </p>
          <Button
            color="primary"
            variant="shadow"
            endContent={<BiChevronRight />}
          >
            Explore the Gallery
          </Button>

          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
            pauseOnHover={false}
            className="mt-8"
          />
        </div>
      </BackgroundBeamsWithCollision>

      <FeaturesSectionDemo />

      <div className="w-full mt-4 p-10 text-center opacity-100 z-50">
        © 2024 DPT Team. All rights reserved.
      </div>
    </main>
  );
}

const testimonials = [
  {
    quote:
      "Every child is an artist. The problem is how to remain an artist once we grow up. Art is the elimination of the unnecessary, and it washes away from the soul the dust of everyday life. It is not what you see, but what you make others see.",
    name: "Pablo Picasso",
    title: "Famous Painter",
  },
  {
    quote:
      "Art enables us to find ourselves and lose ourselves at the same time. It is a way of recognizing oneself and a way of transforming our perspective. Through art, we can express the inexpressible, the feelings too deep for words.",
    name: "Thomas Merton",
    title: "Writer and Theologian",
  },
  {
    quote:
      "You dont take a photograph, you make it. Photography, like all art, is about depth of feeling, not depth of field. It's about capturing the moment, the emotion, the essence, and freezing it in time forever.",
    name: "Ansel Adams",
    title: "Photographer",
  },
  {
    quote:
      "The principles of true art is not to portray, but to evoke emotions, thoughts, and memories that linger long after the artwork is seen. Art speaks where words are unable to explain, offering a bridge between the heart and mind.",
    name: "Jerzy Kosinski",
    title: "Novelist",
  },
  {
    quote:
      "Creativity takes courage, for true art is a journey into the unknown. It is a way of seeking beauty, finding meaning in chaos, and courageously facing the raw truth that lies within us all. The artists role is to defy convention and break boundaries.",
    name: "Henri Matisse",
    title: "French Artist",
  },
];
