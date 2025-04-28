import { Navbar } from "@/components/Navbar"

export default function ProjectLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
