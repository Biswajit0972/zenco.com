import Hero from "./_components/Hero";
import ShowCase from "@/app/_components/ShowCase";

export default function Home() {
    return (
        <section className="relative  w-full overflow-x-hidden overflow-y-auto ">
            <Hero/>
            <ShowCase/>
        </section>
    );
}
