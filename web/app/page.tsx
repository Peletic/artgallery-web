import NavBar from "@/components/NavBar";

export default function Home() {
    return (
        <div
            className="">
            <main className="flex flex-col gap-[12px] row-start-2 items-center sm:items-start px-4 py-4">
                <div className={"w-full px-12 border-b-[0.5px] py-4 border-white/10 h-fit flex flex-row-reverse"}>
                    <NavBar/>
                    <h1 className={"flex flex-row gap-6 text-3xl w-full justify-start items-center"}>
                        <a>FUSION ACADEMY</a>-
                        <a>STUDENT ART GALLERY</a>
                    </h1>
                </div>
            </main>
            <footer>
            </footer>
        </div>
    );
}
