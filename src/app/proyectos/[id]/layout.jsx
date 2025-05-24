import { Navbar } from "@/components/Navbar"

export default function PersonalProjectLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
