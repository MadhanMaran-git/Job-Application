import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function home(){
   return(
      <>
      <div className="text main-h-screen flex-col bg-white">
         <main className="flex-1">
            <section className="container max-auto px-4 py-32">
               <div className="max-auto max-w-4xl text-center">
                  <h1 className="text-black mb-6 text-6xl font-bold " >A way to improve your job</h1>
                  <p className="text-muted-foreground mb-10 text-xl">
                     manage your job search in one 
                  </p>
                  <div className="flex flex-col items-center gap-4">
                     <Link href={"/sign-in"}>
                     <Button size-lg className="h-12 px-8text-lg front-medium">
                        Start free<ArrowRight className="ml-2"/>
                     </Button>
                     </Link>
                     <p className="text-sm text-muted-foreground">Free to learn</p>
                  </div>
               </div>
            </section>
         </main>
      </div>
      </>
   )
}