import CompoundTabs from "../../../ui/CompoundTabs"
import { HiInformationCircle } from "react-icons/hi2";
import Gallery from "./gallery/Gallery";
import AboutMe from "./about me/AboutMe";

function TrainerPortfolio() {
    return (
        <>
            <div className="border border-blue-700 rounded-lg p-4">
                <div className="flex flex-col justify-center gap-4">
                    <h1 className="flex items-center gap-2 text-blue-700 font-bold text-lg capitalize">
                        <span className="text-2xl"><HiInformationCircle /></span>
                        <p>Content Management Policy</p>
                    </h1>

                    <ul className="list-disc text-xs font-semibold text-blue-900 space-y-1.5 pl-6">
                        <li>Any changes in your Portfolio Data, your changes will be sent to the admin for review and approval</li>
                        <li>This process may take some time</li>
                    </ul>
                </div>
            </div>
            <CompoundTabs defaultTab="free-plan">
                <CompoundTabs.Tabs>
                    <CompoundTabs.Open opens="free-plan">free plan</CompoundTabs.Open>
                    <CompoundTabs.Open opens="gallery">gallery</CompoundTabs.Open>
                    <CompoundTabs.Open opens="reviews">reviews</CompoundTabs.Open>
                    <CompoundTabs.Open opens="about">about me</CompoundTabs.Open>
                </CompoundTabs.Tabs>
                <CompoundTabs.Window opens="gallery">
                    <Gallery />
                </CompoundTabs.Window>
                <CompoundTabs.Window opens="about">
                    <AboutMe />
                </CompoundTabs.Window>
            </CompoundTabs>

        </>
    )
}

export default TrainerPortfolio
