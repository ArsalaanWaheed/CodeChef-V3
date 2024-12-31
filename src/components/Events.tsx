import React from 'react';
import e1 from "./events_gallery/e1.jpg";
import e2 from "./events_gallery/e2.jpg";
import e3 from "./events_gallery/e3.jpg";
import e4 from "./events_gallery/e4.jpg";
import e5 from "./events_gallery/e5.jpg";
import e6 from "./events_gallery/e6.jpg";

const events = [
  {
    image: e1,
    alt: "Event 1",
    description: "Event 1: A thrilling hackathon experience where creativity meets innovation.",
  },
  {
    image: e2,
    alt: "Event 2",
    description: "Event 2: Workshop on the latest advancements in AI and Machine Learning.",
  },
  {
    image: e3,
    alt: "Event 3",
    description: "Event 3: A networking event connecting students and industry professionals.",
  },
  {
    image: e4,
    alt: "Event 4",
    description: "Event 4: A coding competition challenging the best minds in programming.",
  },
  {
    image: e5,
    alt: "Event 5",
    description: "Event 5: A tech talk on the future of blockchain and decentralized systems.",
  },
  {
    image: e6,
    alt: "Event 6",
    description: "Event 6: A tech talk on the future of blockchain and decentralized systems.",
  },
];

const Events = () => {
  return (
    <section id="events" className="py-16 text-white">
      <h2 className="text-4xl font-poppins font-bold text-center mb-8">
        Our Past Events
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-center pt-20">
        {events.map((event, index) => (
          <div
            key={index}
            className="relative group border-4 border-green-500 rounded-md shadow-lg overflow-hidden w-64 h-64 flex justify-center items-center"
          >
            <img
              src={event.image}
              alt={event.alt}
              className="object-cover w-full h-full group-hover:opacity-50 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center text-center text-white px-2 py-4 rounded-md transition-opacity duration-300">
              <p className="text-sm">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
