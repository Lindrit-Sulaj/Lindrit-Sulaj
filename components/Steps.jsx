"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function Steps() {
  return (
    <motion.div
      animate={{
        transition: { type: 'spring' }
      }}
      className="w-full flex">
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: 64 }}
        className="w-1/4 bg-persian-blue"></motion.div>
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: 48 }}
        className="w-1/4 h-12 bg-persian-blue"></motion.div>
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: 32 }}
        className="w-1/4 h-8 bg-persian-blue"></motion.div>
      <motion.div i
        nitial={{ height: 0 }}
        whileInView={{ height: 16 }}
        className="w-1/4 bg-persian-blue"></motion.div>
    </motion.div>
  )
}
