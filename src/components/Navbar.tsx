"use client";
import Link from "next/link";
import { CodeSquare, Github, Moon, Sun } from "lucide-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Skeleton } from "./ui/skeleton";
import Image from "next/image";

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { isLoaded } = useUser();

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/60 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between m-auto w-full">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <Image
            src="/logo2.png"
            alt="Codiz AI Logo"
            width={200}
            height={200}
            className="size-10"
          />
          <h1 className="text-3xl font-medium">Codiz AI</h1>
        </Link>

        <nav className="flex items-center gap-4">
          <ul className="flex items-center gap-4">
            <Link
              href="/features"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Features
            </Link>

            {/* Show Dashboard only to signed-in users */}
            <SignedIn>
              <Link
                href="/dashboard"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Dashboard
              </Link>
            </SignedIn>
          </ul>

          <div className="flex items-center gap-2">
            <Button asChild variant="outline" size="sm" className="size-10">
              <Link href="https://github.com/your-repo">
                <Github className="size-5" />
              </Link>
            </Button>
            {/* Theme Toggle */}
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="size-10"
            >
              {!mounted ? (
                <Skeleton className="size-10 rounded-full" />
              ) : resolvedTheme === "dark" ? (
                <Sun className="size-5" />
              ) : (
                <Moon className="size-5" />
              )}
            </Button>

            {/* Auth States */}
            {isLoaded ? (
              <>
                <SignedIn>
                  <div className="border size-10 rounded-md overflow-hidden">
                    <UserButton
                      appearance={{
                        elements: {
                          avatarBox: {
                            width: "100%",
                            height: "100%",
                            borderRadius: "0",
                          },
                        },
                      }}
                    />
                  </div>
                </SignedIn>
                <SignedOut>
                  <SignInButton mode="modal">
                    <Button size="sm">Sign In</Button>
                  </SignInButton>
                </SignedOut>
              </>
            ) : (
              <Skeleton className="h-8 w-8 rounded-full" />
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
