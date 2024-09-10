import { CheckCircle2 } from "lucide-react"
import { pricingOptions } from "../constants"
import Link from "next/link"


export default function Price() {
  return (
    <div className="mt-20 scroll-m-24" id="pricing">
        <h2 className="text-3xl sm:tex-5xl lg:text-6xl text-center my-8 tracking-wider">
            Pricing
        </h2>
        <div className="flex flex-wrap">
            {pricingOptions.map((option, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                <div className="p-10 border border-neutral-700 rounded-xl  hover:border-green-500">
                  <p className="text-4xl mb-8">
                    {option.title}
                    {option.title === "Pro" && (
                      <span className="bg-gradient-to-r from-purple-400 to-purple-500 text-transparent bg-clip-text text-xl mb-4 ml-2">
                        (Most Popular)
                      </span>
                    )}
                  </p>
                  <p className="mb-8">
                    <span className="text-5xl mt-6 mr-2">{option.price}</span>
                    <span className="text-neutral-400 tracking-tight">/Month</span>
                  </p>
                  <ul>
                    {option.features.map((feature, index) => (
                      <li key={index} className="mt-8 flex items-center">
                        <CheckCircle2 className="text-purple-600"/>
                        <span className="ml-2">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#"
                    className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-purple-800 border border-purple-800 rounded-lg transition duration-200"
                  >
                    Subscribe
                  </Link>
              </div> 
            </div>
            ))}
        </div>
    </div>
  )
}
