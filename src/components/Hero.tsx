"use client";
import { motion } from "framer-motion";
import { Rocket, Play } from "lucide-react";
import { Button } from "./ui/button";
import { SignInButton, SignedOut, SignedIn } from "@clerk/nextjs";

export default function Hero() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container grid md:grid-cols-2 gap-10 items-center m-auto w-full">
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-sky-500 bg-clip-text text-transparent">
            Revolutionize Your Code Quality
          </h1>
          <p className="text-xl text-muted-foreground">
            AI-powered instant feedback on your code with{" "}
            <span className="font-semibold text-primary">Gemini 1.5 Flash</span>
          </p>

          <div className="flex flex-col gap-4 max-w-md">
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>Bug detection & optimization</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>Best practice recommendations</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>Multi-language support</span>
              </li>
            </ul>

            <div className="flex gap-4 pt-4">
              <SignedOut>
                <SignInButton mode="modal">
                  <Button size="lg" className="gap-2">
                    <Rocket className="w-5 h-5" />
                    Get Started Free
                  </Button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <Button
                  size="lg"
                  className="gap-2"
                  onClick={() => (window.location.href = "/dashboard")}
                >
                  <Rocket className="w-5 h-5" />
                  Go to Dashboard
                </Button>
              </SignedIn>
              <Button variant="outline" size="lg" className="gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Video Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative"
        >
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl p-3 border bg-muted shadow-2xl">
            <video
              src="/video.mp4"
              controls
              className="w-full h-full object-cover rounded-lg"
              poster="/video-thumbnail.jpg"
              autoPlay
              loop
              muted
            />
          </div>

          {/* Floating Code Example */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute -bottom-6 -left-1/3 translate-x-1/2 bg-[#1e1e1e] rounded-xl p-4 shadow-xl border hidden lg:block w-1/2"
          >
            <div className="flex gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <div className="w-2 h-2 rounded-full bg-yellow-500" />
              <div className="w-2 h-2 rounded-full bg-green-500" />
            </div>
            <pre className="text-xs text-gray-300">
              <code>
                {`// AI will analyze:\nfunction calculateTotal(items) {\n  return items.reduce(\n    (sum, item) => sum + item.price, 0\n  )\n}`}
              </code>
            </pre>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
