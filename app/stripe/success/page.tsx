import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

export default function SuccessPage() {
    return (
        <div className="h-screen text-center mx-auto py-8">
            <div className="flex-1 gap-6 py-8" >
                <Check className="w-20 h-20 text-green-500 mx-auto" />
                <h2 className="text-4xl py-4 text-green-800 font-bold">Payment Successful!</h2>
            </div>
            <div className="text-xl text-slate-800 font-semibold tracking-wide">
                <p>Thank you for purchase. We hope you enjoy </p>
                <p>your new items.</p>
            </div>
            <Button className="mt-7 text-lg bg-transparent outline outline-blue-400 hover:text-slate-400 text-primary hover:bg-transparent px-16">
                <Link href="/">Go Back</Link>
            </Button>
        </div>
    )
}
