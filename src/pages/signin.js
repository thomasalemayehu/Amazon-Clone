import React from "react";

import { getProviders, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
import Footer from "../components/Footer";
import SignInButton from "../components/SignInButton";

export default function SignIn({ providers }) {
  const router = useRouter();
  return (
    <div>
      {/* Header */}
      <div className="bg-amazon_blue p-1 py-2 flex-grow">
        <Image
          src="/images/Amazon-Main-Logo.png"
          width={150}
          height={40}
          objectFit="contain"
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
      </div>
      <main className="flex flex-col max-w-screen-sm px-48 mx-auto my-32 bg-gray-200 py-8">
        <h1 className="font-bold text-3xl">Amazon Clone</h1>
        <h3 className="mt-3 text-sm text-gray-400">Login</h3>
        {Object.values(providers).map(({ name, id }) => (
          <SignInButton key={id} providerName={name} providerId={id} />
        ))}
      </main>

      {/* <Footer showLoginModal="false" /> */}
    </div>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
