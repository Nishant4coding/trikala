import React from 'react';
import { cn } from "../../../lib/utils";
import image1 from '@/assets/Digit.png'; // Ensure the path to the image is correct
import image2 from '@/assets/aesehi.png'; // Ensure the path to the image is correct
import image3 from '@/assets/hero3.png'; // Ensure the path to the image is correct
import image4 from '@/assets/hero4.png'; // Ensure the path to the image is correct

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: image1,
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: image2,
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: image3,
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: image4,
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img:image1,
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: image2,
  },
];

const ReviewCard = ({
  img,
  body,
}: {
  img: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        " lg:w-[12vw] w-[20vw] h-[12vh] lg:h-[12vh] cursor-pointer overflow-hidden p-4 bg-cover bg-center",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
      style={{ backgroundImage: `url(${img})`}}
    >
      <span className="mt-2 text-sm text-white">{body}</span>
    </figure>
  );
};

const Row = ({
  reviews,
  alignRight,
}: {
  reviews: { img: string; body: string; username: string }[];
  alignRight?: boolean;
}) => {
  return (
    <div
      className={`flex flex-cols-1 lg:flex-cols-6 gap-10 p-4 justify-end items-end ${
        alignRight ? 'justify-items-end' : 'justify-items-start'
      }`}
    >
      {reviews.map((review) => (
        <ReviewCard key={review.username} {...review} />
      ))}
    </div>
  );
};

const Interior = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center py-20">
      <h1 className="text-6xl md:text-6xl lg:text-9xl font-custom text-center">
        Interior Solutions
      </h1>
      <div className="relative w-full flex flex-col justify-center items-center">
        <Row reviews={reviews} />
        <Row reviews={reviews} alignRight />
        <Row reviews={reviews} />
        <Row reviews={reviews} alignRight />
        <Row reviews={reviews} />
      </div>
    </div>
  );
};

export default Interior;
