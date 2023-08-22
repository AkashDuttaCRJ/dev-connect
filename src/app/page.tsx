import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="m-10 space-x-5">
      <Link href="/auth/signup">
        <Button>Signup</Button>
      </Link>
      <Link href="/auth/login">
        <Button>Login</Button>
      </Link>
    </main>
  );
}
