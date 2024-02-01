import { HomeTemplate } from "@/components/templates";
import { promises as fs } from "fs";

export default async function Home() {
  const file = await fs.readFile(
    process.cwd() + "/public/data/text.json",
    "utf-8",
  );
  const data = JSON.parse(file);

  return (
    <HomeTemplate
      homeTop={data.homeTop}
      about={data.about}
      experiences={data.experiences}
      skills={data.skills}
      contact={data.contact}
    />
  );
}
