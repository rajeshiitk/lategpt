import Link from "next/link";
import React from "react";

interface Props {}

const page = (props: Props) => {
  return (
    <div className="h-screen  max-w-3xl mx-auto px-4 py-20">
      Your sign up is successful. Please Check Your Mail Box to verify your
      email
      <Link className="underline bg-accent" href="https://mail.google.com/mail">
        {"  "}
        Open Mail
      </Link>
    </div>
  );
};

export default page;
