import React from "react";
import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
// Check if signIn import path is correct
import signIn from "../Pages/SignIn";

export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <Link
        className="self-center whitespace-nowrap text-sm:text-xt font-semibold dark:text-white"
        to="/"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Taran's
        </span>
        Blog
      </Link>

      {/* Search form */}
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>

      {/* Search button for smaller screens */}
      <Button
        className="w-12 h-10 lg:hidden flex content-center items-center rounded-full"
        color="gray"
      >
        <AiOutlineSearch />
      </Button>

      {/* Other buttons and links */}
      <div className="flex gap-2 md:order-2">
        {/* Moon button */}
        <Button
          className="w-12 h-10 hidden sm:flex content-center items-center rounded-full"
          color="gray"
        >
          <FaMoon />
        </Button>

        {/* Sign In button */}
        <Link to="/sign-in">
          <Button className="bg-gradient-to-br from-purple-500 to-blue-500">
            Sign In
          </Button>
        </Link>

        {/* Navbar toggle for responsive menu */}
        <Navbar.Toggle />
      </div>

      {/* Collapsible links */}
      <Navbar.Collapse className="lg:flex lg:items-center">
      <Navbar.Link href="/" className={path === "/" ? "text-turquoise" : ""}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/about" className={path === "/about" ? "text-turquoise" : ""}>
          About
        </Navbar.Link>
        <Navbar.Link href="/projects" className={path === "/projects" ? "text-turquoise" : ""}>
          Projects
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
