import { motion } from 'framer-motion'

// icons
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'

import reactHookIcon from '@assets/images/react-hook-form-icon.svg'
import zustandIcon from '@assets/images/zustand-icon.svg'
import axiosIcon from '@assets/images/axios-icon.svg'
import storyBookIcon from '@assets/images/storybook-icon.svg'

const TechStack = () => {
  return (
    <div className="flex flex-wrap justify-center space-x-8 py-8 max-w-4xl mx-auto gap-1">
      <motion.div
        className="group relative flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
      >
        <FaReact className="h-16 w-16 text-blue-500 hover:scale-110 duration-200 z-0" />
        <span className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 items-center justify-center hidden group-hover:flex z-20">
          <span className="relative p-2 px-4 text-sm leading-none text-white bg-rose-600 shadow-lg rounded-md">
            React
          </span>
        </span>
      </motion.div>
      <motion.div
        className="group relative flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
      >
        <FaHtml5 className="h-16 w-16 text-orange-500 hover:scale-110 duration-200 z-0" />
        <span className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 items-center justify-center hidden group-hover:flex z-20">
          <span className="relative p-2 px-4 text-sm leading-none text-white bg-rose-600 shadow-lg rounded-md">
            HTML5
          </span>
        </span>
      </motion.div>
      <motion.div
        className="group relative flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, type: 'spring', stiffness: 100 }}
      >
        <FaCss3Alt className="h-16 w-16 text-blue-700 hover:scale-110 duration-200 z-0" />
        <span className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 items-center justify-center hidden group-hover:flex z-20">
          <span className="relative p-2 px-4 text-sm leading-none text-white bg-rose-600 shadow-lg rounded-md">
            CSS3
          </span>
        </span>
      </motion.div>
      <motion.div
        className="group relative flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, type: 'spring', stiffness: 100 }}
      >
        <SiTailwindcss className="h-16 w-16 text-teal-500 hover:scale-110 duration-200 z-0" />
        <span className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 items-center justify-center hidden group-hover:flex z-20">
          <span className="relative p-2 px-4 text-sm leading-none text-white bg-rose-600 shadow-lg rounded-md">
            Tailwind CSS
          </span>
        </span>
      </motion.div>
      <motion.div
        className="group relative flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, type: 'spring', stiffness: 100 }}
      >
        <FaJs className="h-16 w-16 text-yellow-500 hover:scale-110 duration-200 z-0" />
        <span className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 items-center justify-center hidden group-hover:flex z-20">
          <span className="relative p-2 px-4 text-sm leading-none text-white bg-rose-600 shadow-lg rounded-md">
            JavaScript
          </span>
        </span>
      </motion.div>
      <motion.div
        className="group relative flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 100 }}
      >
        <FaNodeJs className="h-16 w-16 text-green-500 hover:scale-110 duration-200 z-0" />
        <span className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 items-center justify-center hidden group-hover:flex z-20">
          <span className="relative p-2 px-4 text-sm leading-none text-white bg-rose-600 shadow-lg rounded-md">
            Node.js
          </span>
        </span>
      </motion.div>
      <motion.div
        className="group relative flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, type: 'spring', stiffness: 100 }}
      >
        <img
          src={reactHookIcon}
          alt="react-hook-form"
          className="h-16 w-16 text-green-500 hover:scale-110 duration-200 z-0"
        />
        <span className="absolute bottom-[-68px] left-1/2 transform -translate-x-1/2 items-center justify-center hidden group-hover:flex z-20">
          <span className="relative p-2 px-4 text-sm leading-none text-white bg-rose-600 shadow-lg rounded-md">
            React Hook Form
          </span>
        </span>
      </motion.div>
      <motion.div
        className="group relative flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, type: 'spring', stiffness: 100 }}
      >
        <img src={zustandIcon} alt="zustand" className="h-16 w-16 text-green-500 hover:scale-110 duration-200 z-0" />
        <span className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 items-center justify-center hidden group-hover:flex z-20">
          <span className="relative p-2 px-4 text-sm leading-none text-white bg-rose-600 shadow-lg rounded-md">
            Zustand
          </span>
        </span>
      </motion.div>
      <motion.div
        className="group relative flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, type: 'spring', stiffness: 100 }}
      >
        <img src={axiosIcon} alt="Axios" className="h-16 w-16 text-green-500 hover:scale-110 duration-200 z-0" />
        <span className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 items-center justify-center hidden group-hover:flex z-20">
          <span className="relative p-2 px-4 text-sm leading-none text-white bg-rose-600 shadow-lg rounded-md">
            Axios
          </span>
        </span>
      </motion.div>
      <motion.div
        className="group relative flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.0, type: 'spring', stiffness: 100 }}
      >
        <img
          src={storyBookIcon}
          alt="story-book"
          className="h-16 w-16 text-green-500 hover:scale-110 duration-200 z-0"
        />
        <span className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 items-center justify-center hidden group-hover:flex z-20">
          <span className="relative p-2 px-4 text-sm leading-none text-white bg-rose-600 shadow-lg rounded-md">
            Storybook
          </span>
        </span>
      </motion.div>
    </div>
  )
}

export default TechStack
