import React from "react";

import { getProviders, signIn } from "next-auth/react";

function SignInButton({ providerName, providerId }) {
  return (
    <button className="button mt-6" onClick={() => signIn(providerId)}>
      Sign in with {providerName}
    </button>
  );
}

export default SignInButton;
