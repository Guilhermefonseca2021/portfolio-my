import About from "@/components/about";
import Header from "@/components/header";
import CardProject, { CardProps } from "@/components/cardproject";
import cardProject from "./projects";
import Experience from "@/components/experience";

export default function Page() {
  return (
    <div className="">
      <div className="p-4">
        <Header />
        <About />
        <div id="projects" className="my-64 mx-6">
          <ul className="grid gap-16 place-items-center sm:grid-cols-2 lg:grid-cols-3 p-2 xl:p-5">
            {cardProject.map((card: CardProps, index: number) => (
              <CardProject
                image={card.image}
                title={card.title}
                description={card.description}
                cta={card.cta}
                link={card.link}
              />
            ))}
          </ul>
          <section className="my-14 mx-6">
            <Experience />
          </section>
        </div>
      </div>
    </div>
  );
}
