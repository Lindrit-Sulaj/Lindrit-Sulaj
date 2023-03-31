"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function Steps({ from = "top", background, color }) {
  let heights = [16, 32, 48, 64];

  heights = from === "top" ? heights.reverse() : heights;

  return (
    <motion.div
      style={{ background, alignItems: from == "bottom" ? 'flex-end' : 'flex-start' }}
      animate={{
        transition: { type: 'spring' }
      }}
      className="w-full flex">

      {heights.map(height => (
        <motion.div
          key={height}
          style={{ background: color }}
          viewport={{ once: true }}
          whileInView={{ height }}
          initial={{ height: 0 }}
          className="w-1/4">

        </motion.div>
      ))}
    </motion.div>
  )
}
