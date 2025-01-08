import Image from "next/image";
import React from "react";
import AuthImg from "@/public/Abstract Curves and Colors.jpeg";
import Logo from "@/components/ui/Logo";
import AuthForm from "@/components/authentication/AuthForm";

interface SearchParams {
  state?: string;
}

const AuthenticationPage = ({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) => {
  const { state } = searchParams;

  return (
    <main className="h-screen grid grid-cols-2 relative">
      <div className="relative w-full flex flex-col bg-muted p-10 text-primary-foreground">
        <div className="w-full h-[30%] bg-gradient-to-t from-transparent to-black/50 absolute top-0 left-0 z-10" />
        <div className="w-full h-[30%] bg-gradient-to-b from-transparent to-black/50 absolute bottom-0 left-0 z-10" />
        <Image
          src={AuthImg}
          alt="login image"
          fill
          className="w-full h-full object-cover"
        />
        <div className="relative z-20 flex items-center">
          <Logo />
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;Picture AI is a platform that allows you to upload images
              and get a description of the image.&ldquo;
            </p>
            <footer className="text-sm">Picture AI Team.</footer>
          </blockquote>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center p-8 h-full">
        <div className="max-w-xl w-[350px] mx-auto">
          <AuthForm state={state ?? "login"} />
        </div>
      </div>
    </main>
  );
};

export default AuthenticationPage;
