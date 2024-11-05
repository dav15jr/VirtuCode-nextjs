import Link from 'next/link';

export default function Hero() {
  return (
    <div
      className="flex flex-col items-center mt-6 lg:mt-20 scroll-m-60"
      id="hero"
    >
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtuCode build tools
        <span className="bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">
          {' '}
          for the developers.
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex justify-center my-10">
        <Link
          href="#pricing"
          className="bg-gradient-to-r from-purple-500 to-purple-800 py-3 px-4 mx-3 rounded-md hover:bg-none border hover:border-purple-600 transition duration-500"
        >
          Start for free
        </Link>
        <Link
          href="#"
          className="py-3 px-4 mx-3 rounded-md border hover:text-purple-500 hover:border-purple-600"
        >
          Documentation
        </Link>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-purple-700 shadow-purple-400 mx-2 my-y"
        >
          <source src="/assets/video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-purple-700 shadow-purple-400 mx-2 my-y"
        >
          <source src="/assets/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
