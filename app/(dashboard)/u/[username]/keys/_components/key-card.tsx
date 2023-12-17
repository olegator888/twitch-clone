"use client";

import { Input } from "@/components/ui/input";
import { CopyButton } from "@/app/(dashboard)/u/[username]/keys/_components/copy-button";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface KeyCardProps {
  value: string | null;
}

export const KeyCard = ({ value }: KeyCardProps) => {
  const [show, setShow] = useState(false);

  return (
    <div className="rounded-xl bg-muted p-6">
      <div className="flex items-center gap-x-10">
        <p className="font-semibold shrink-0">Stream Key</p>
        <div className="space-y-2 w-full">
          <div className="w-full flex items-center gap-x-2">
            <Input
              value={value || ""}
              disabled
              placeholder="Stream Key"
              type={show ? "text" : "password"}
            />
            <CopyButton value={value || ""} />
          </div>
          <Button
            onClick={() => setShow((prev) => !prev)}
            size="sm"
            variant="link"
          >
            {show ? "Hide" : "Show"}
          </Button>
        </div>
      </div>
    </div>
  );
};
