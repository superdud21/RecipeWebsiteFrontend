"use client"
import React, { useContext, useEffect } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { useState } from "react"

export const ThemeProvider = ({ children }) => {
  const context = useContext(ThemeContext);
  const { theme } = context;
  const [mounted, setMounted] = React.useState(false);


  if (!context) {
    return <>{children}</>; // or handle the missing context appropriately
  }

  useEffect(() => {
    setMounted(true);
  }, [])

  if (mounted) {
    return <div className={theme}>{children}</div>
  }
}