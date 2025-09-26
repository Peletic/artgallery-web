import NavBar from "@/components/NavBar";

export default function Page() {
    return (<div
        className="">
        <main className="flex flex-col gap-[12px] row-start-2 items-center sm:items-start px-4 py-4">
            <NavBar/>
            <h1 className={"flex flex-row gap-6 text-4xl w-full pb-8 pt-12 self-center justify-start px-12 border-y-[0.5px] border-white/10"}>
                <a>CONTRIBUTE</a>
            </h1>
            
        </main>
        <footer>
        </footer>
    </div>)
}