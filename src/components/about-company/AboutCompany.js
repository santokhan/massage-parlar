import SLayout, { SDes, SMain, STitle } from "../section-layout/SectionLayout";

export default function About() {
  return (
    <div id="about">
      <SLayout className="lg:pb-0 ">
        <SMain>
          <div className="max-w-2xl mx-auto relative w-full overflow-hidden">
            <div className="hidden lg:flex flex-nowrap gap-2 justify-center items-center absolute -right-56 bottom-2 -rotate-90">
              <a href="http://massagejanmorks.nl" className="font-semibold">
                massagejanmorks.nl
              </a>
              <div className="vertical-line bg-green-700"></div>
            </div>

            <div className="mb-4 relative border-l-4 pl-3 lg:pl-0 border-green-700 lg:border-none flex justify-start">
              <div className="horizontal-line bg-green-700 absolute -left-48 top-2 hidden lg:block"></div>
              <STitle>Massage Moment</STitle>
            </div>
            <SDes>
              <span
                id="m"
                className="text-5xl font-bold float-left pr-1"
              ></span>
              Direct te boeken in regio Arnhem, Apeldoorn, Deventer, Lochem,
              Zutphen, Doetinchem. De APK voor u lijf. Professionele massages
              bij u thuis.
            </SDes>
            <div className="flex flex-nowrap gap-2 justify-end items-center lg:hidden py-3">
              <a href="http://massagejanmorks.nl" className="font-semibold">
                massagejanmorks.nl
              </a>
              <div className="vertical-line bg-green-700"></div>
            </div>
          </div>
        </SMain>
      </SLayout>
    </div>
  );
}
