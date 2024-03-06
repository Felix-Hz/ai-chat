import { InitiateChat } from "../InitiateChat/InitiateChat";

export const Hero = () => {
  return (
    <section className="text-center flex flex-col items-center content-center flex-wrap ">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div>
      <h1 className="text-6xl xs:mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight tracking-tighter">
        Assistant[X]
      </h1>
      <h2 className="text-4xl xs:text-3xl text-gray-500 mb-8 xs:hidden">Artificial Intelligence Chatbot Experience</h2>
      <InitiateChat />
    </section>
  );
};
