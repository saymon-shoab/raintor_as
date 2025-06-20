"use client";

import Header from "@/components/Header";
import { PhoneIcon } from "lucide-react";
import Link from "next/link";
const workProcessInfo = [
  {
    title: 'Discovery',
    description: 'We start every new client interactionwith an in-depth discovery call wherewe get to know each other, discussyour current and future objectives,and recommend the best course ofaction',
    href: '*',
  },
  {
    title: 'Strategy',
    description: 'Every end-to-end project of oursbegins with a tEspoke pre-buildstrateu. From brand ID consultationto in-depth ccxle reviews we are hereto set the stage for success.',
    href: '*',
  },
  {
    title: 'Design',
    description: 'After we have a comprehensive understanding of your brand, we WIll be ready to move onto design. Each pageor will be designed, reviewed,and given your stamp of approval.',
    href: '/infinite-scroll',
  },
  {
    title: 'Build',
    description: 'Whether we have just finished designing your new site or you are handing off finished designs for us todevelop in Webflow, we are here toapply our trusted developmentprocess to your project.',
    href: '/nextjs-routing',
  },
]
export default function Home() {
  return (
    <div>
      <Header />
      <section className="w-4/5 mx-20  my-10">
        <h1 className="text-8xl space-y-1">
          Trusted{" "}
          <span className=" bg-white rounded-2xl text-black">Partner</span> for{" "}
          <br /> your Website{" "}
          <span className="bg-white rounded-2xl text-black">Developer</span>
        </h1>
        <div className=" mx-20 my-10 items-center">
          <p className="text-2xl ">
            Building the worlds best marketing websites for over a decade. Your
            trusted partner for strategy, design, and dev.
          </p>
        </div>
        <div className=" w-44  h-10 p-2 mx-20  space-x-3 border-2 rounded-2xl flex items-center">
          <PhoneIcon />
          <p>Schedule a call</p>
        </div>
      </section>
      <div
        id="work_process"
        className=" py-10 px-10 bg-gray-900 border-1 rounded-2xl"
      >
          <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-10">
        My Work Process
      </h2>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {workProcessInfo.map((data, index) => (
     <div key={index} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 h-full flex flex-col">
      {/* Header Row: Title + Read More */}
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">{data.title}</h2>
        <Link
          href={data.href}
          className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm whitespace-nowrap"
        >
          Read More →
        </Link>
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 text-sm">
        {data.description}
      </p>
    </div>
        ))}
      </div>
      </div>
 
   <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 pt-10 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center mb-8">
        <span className="text-sm font-semibold text-gray-800 dark:text-white">
          DEVELOPE.ME
        </span>
        <span className=" text-5xl text-center text-gray-600 dark:text-gray-400">
          As you can
        </span>
      </div>
      {/* Top Section: 4 Columns */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
        {/* Column 1: Blank */}
        <div></div>

        {/* Column 2: Hello + Phone */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Say Hello 👋</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-1">We’d love to hear from you.</p>
          <Link
            href="tel:+8801782065131"
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            +880 1782 065 131
          </Link>
        </div>

        {/* Column 3: Menu */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Menu</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
            <li><Link href="/" className="hover:text-primary transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-primary transition">About</Link></li>
            <li><Link href="/projects" className="hover:text-primary transition">Projects</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition">Contact</Link></li>
          </ul>
        </div>

        {/* Column 4: Socials */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Follow Me</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
            <li><Link href="https://github.com" target="_blank" className="hover:text-primary transition">GitHub</Link></li>
            <li><Link href="https://linkedin.com" target="_blank" className="hover:text-primary transition">LinkedIn</Link></li>
            <li><Link href="https://twitter.com" target="_blank" className="hover:text-primary transition">Twitter</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section: 3 Evenly Spaced Items */}
      <div className="border-t border-gray-200 dark:border-gray-700 pt-6 pb-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400 gap-2">
          <span>BESNIK</span>
          <span>© devlop.me 2022</span>
          <span className="space-x-2">
            <Link href="/privacy" className="hover:underline">PRIVACY</Link>
            <span>-</span>
            <Link href="/terms" className="hover:underline">TERMS</Link>
          </span>
        </div>
      </div>
    </footer>

    </div>
  );
}
