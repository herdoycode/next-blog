"use client";
import { Avatar, Container, DropdownMenu, Flex } from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentPath = usePathname();

  const navItems = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Blog", link: "/blog" },
    { label: "Contact", link: "/contact" },
  ];

  const linkClassNames = (link: string) => {
    let classNames = "hover:text-zinc-900 transition-colors ";
    return currentPath === link
      ? (classNames += "text-zinc-900")
      : (classNames += "text-zinc-500");
  };

  const { data, status } = useSession();

  return (
    <nav className="py-4 border-b mb-5">
      <Container>
        <Flex align="center" justify="between" gap="4">
          <Link href="/">Blog</Link>
          <ul className="flex items-center gap-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link className={linkClassNames(item.link)} href={item.link}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          {status === "authenticated" ? (
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Avatar
                  size="2"
                  radius="full"
                  src={data?.user?.image!}
                  fallback="user image"
                  crossOrigin="anonymous"
                />
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Item shortcut="⌘ E">
                  {data?.user?.email}
                </DropdownMenu.Item>
                <DropdownMenu.Item shortcut="⌘ D">
                  <Link href="/api/auth/signout">Signout</Link>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          ) : (
            <Link href="/api/auth/signin">Signin</Link>
          )}
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
