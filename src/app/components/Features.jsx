import React from 'react';
import { features } from '../constants';

export default function Features() {
  return (
    <div
      className="relative mt-20 sm:mt-48 border-b border-neutral-800 min-h-[600px] scroll-m-24"
      id="features"
    >
      <div className="text-center">
        <span className="bg-neutral-900 text-purple-500 rounded-full h-6 text-base font-medium px-2 py-1 uppercase">
          features
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 tracking-wide">
          Easily build{' '}
          <span className="bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">
            your code
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex justify-center">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-purple-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div className="max-w-[350px]">
                <h5 className="mt-1 mb-2 text-xl">{feature.text}</h5>
                <p className="text-base p-2 mb-16 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
