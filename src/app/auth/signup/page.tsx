import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function Signup() {
  return (
    <main className="w-screen h-screen flex relative">
      <section className="w-[70%] h-screen relative text-white">
        <img
          src="https://ik.imagekit.io/r7qebhzvs/dev_connect/assets/auth_bg.png?updatedAt=1692609306313"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 p-20">
          <h1 className="text-[64px] font-bold leading-[96px] w-2/3">
            Join the Developer&apos;s Hub!
          </h1>
          <p className="w-2/3">
            Connect, Collaborate, and Create with a community of 1,122,208
            amazing developers from around the globe
          </p>
        </div>
      </section>
      <section className="w-[35%] h-screen bg-white rounded-tl-[20px] rounded-bl-[20px] absolute right-0 p-14 flex flex-col justify-between">
        <div>
          <h1 className="text-[32px] font-bold text-grayscale-950">Sign up</h1>
          <p className="text-mystic-600">
            Let&apos;s get started by creating an account!
          </p>
        </div>
        <div className="space-y-10">
          <div className="space-y-8">
            <div className="space-y-5">
              <Input placeholder="Full Name" />
              <Input placeholder="Email" />
              <Input placeholder="Password" />
            </div>
            <Button className="w-full bg-midnight-blue-950">Sign up</Button>
          </div>
          <div className="h-[1px] w-full bg-mystic-200 relative after:content-['or'] after:absolute after:top-1/2 after:left-1/2 after:-translate-y-1/2 after:-translate-x-1/2 after:bg-white after:px-2 after:text-mystic-200 after:text-sm" />
          <div className="space-y-5">
            <Button variant="outline" className="w-full">
              <Image
                src="https://ik.imagekit.io/r7qebhzvs/dev_connect/assets/google-icon-colored.png?updatedAt=1692623508458"
                alt="apple-icon"
                width={20}
                height={20}
                objectFit="contain"
                className="h-5 min-w-[20px] object-contain mr-2"
              />
              Sign up with Google
            </Button>
            <Button variant="outline" className="w-full">
              <Image
                src="https://ik.imagekit.io/r7qebhzvs/dev_connect/assets/apple-icon-colored.png?updatedAt=1692623508425"
                alt="apple-icon"
                width={20}
                height={20}
                objectFit="contain"
                className="h-5 min-w-[20px] object-contain mr-2"
              />
              Sign up with Apple ID
            </Button>
          </div>
        </div>
        <div>
          <p className="text-mystic-600 space-x-4 text-center">
            <span>Already have an account?</span>
            <Link href="/auth/login">
              <span className="text-midnight-blue-950 font-bold cursor-pointer">
                Login
              </span>
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
