import { FC } from "react";
import SidebarLayout from "../shared/SidebarLayout";
import JumpToSection from "../components/JumpToSection";
import StepList from "../components/StepList";
import Page from "../shared/Page";

interface TutorialPageProps {
  isLoggedIn: boolean
}

const TutorialPage: FC<TutorialPageProps> = ({ isLoggedIn }) => {
    return (
        <Page className="tutorial-page" isLoggedIn={isLoggedIn}>
          <SidebarLayout 
            left={<JumpToSection />}
            right={<StepList />}
          />
        </Page>
    );
};

export default TutorialPage;