'use client'

import { motion } from "framer-motion"
import { useState } from "react"

export default function TechnologyIcon({ technology }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.i
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`${!hovered ? technology : `${technology} colored`} text-xl md:text-2xl text-blue-300`}>

    </motion.i>
  )
}
