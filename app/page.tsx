"use client";

import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen w-full p-8 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-2xl mx-auto">
        <Card className="p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold">Welcome, {session?.user?.name}!</h2>
              <p className="text-muted-foreground">{session?.user?.email}</p>
            </div>
            <Button
              variant="outline"
              onClick={() => signOut({ callbackUrl: "/login" })}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Sign out
            </Button>
          </div>
          
          <div className="prose dark:prose-invert max-w-none">
            <p>
              This is a protected page. You can sign in with these credentials:
            </p>
            <ul>
              <li>Username: user</li>
              <li>Password: password</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
}