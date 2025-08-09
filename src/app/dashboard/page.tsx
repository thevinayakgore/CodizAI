"use client";
import { Sidebar } from "@/components/Sidebar";
import { useUser } from "@clerk/nextjs";

export default function Dashboard() {
  const { user } = useUser();

  return (
    <div className="flex h-screen">
      <Sidebar />

      <main className="flex-1 overflow-auto p-6 m-auto w-full">
        <header className="mb-8">
          <h1 className="text-2xl font-bold">
            Welcome back, {user?.firstName}!
          </h1>
          <p className="text-muted-foreground">
            Paste your code below for instant AI review
          </p>
        </header>

        {/* CodeEditor component will go here */}
      </main>
    </div>
  );
}
