import { FC } from "react";
import SidebarLayout from "../shared/SidebarLayout";
import JumpToSection from "../components/JumpToSection";
import StepList from "../components/StepList";
import Page from "../shared/Page";

const TutorialPage: FC = () => {
    return (
        <Page className="tutorial-page">
          <SidebarLayout 
            left={<JumpToSection />}
            right={<StepList />}
          />
        </Page>
    );
};

export default TutorialPage;