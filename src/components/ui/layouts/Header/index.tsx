"use client";

import React, { FC } from "react";
import { Button } from "../../button";
import { useRouter } from "next/navigation";

interface headerProps {}

const Header: FC<headerProps> = ({}) => {
  const router = useRouter();

  const NavToPostAJobPage = () => router.push("/post-a-job");

  return (
    <div className="pb-3 mb-8 border-b border-border flex flex-row items-center justify-between">
      <div>
        <div>Company</div>
        <div className="font-semibold">Airbnb</div>
      </div>
      <div>
        <Button className="rounded-none py-3 px-6" onClick={NavToPostAJobPage}>
          + Add jobs
        </Button>
      </div>
    </div>
  );
};

export default Header;
