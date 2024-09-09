import { Button, Image, Input, Link } from "@nextui-org/react";
import { Prata } from "next/font/google";
import { FaGoogle } from "react-icons/fa";
import { AcmeLogo } from "../components/icon/AcmeLogo";

const prata = Prata({ subsets: ["latin"], weight: "400" });

export default function SignIn() {
  return (
    <main className="h-screen bg-background text-foreground grid grid-cols-7">
      {/* Gambar di kolom 2 */}
      <div className="col-span-2">
        <Image
          src="/images/modern/8.jpeg"
          alt="Sign In Image"
          className="w-full h-screen object-cover"
        />
      </div>

      <div className="col-span-5 flex justify-center items-center">
        <div className="max-w-md w-full p-8 space-y-6 rounded-lg shadow-md border border-foreground-100">
          <h2
            className={` ${prata.className} text-2xl font-semibold text-center`}
          >
            <AcmeLogo />
            Sign In to ArtFusion
          </h2>

          <form className="space-y-4">
            <Input
              label="Email"
              placeholder="Enter your email"
              fullWidth
              size="sm"
            />
            <Input
              label="Password"
              placeholder="Password"
              type="password"
              fullWidth
              size="sm"
            />

            <Button type="submit" color="primary" fullWidth>
              Sign In
            </Button>
            <Link className="text-sm" color="foreground">
              Forgot Password?
            </Link>

            <div className="text-center text-gray-500">or</div>

            <Button variant="bordered" fullWidth startContent={<FaGoogle />}>
              Sign In with Google
            </Button>
            <Link className="text-sm" color="foreground">
              Dont have an account?
            </Link>
          </form>
        </div>
      </div>
    </main>
  );
}
