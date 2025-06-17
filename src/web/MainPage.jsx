import React from "react";
import Logo from "./Logo";
import Overview from "./Overview";
import DeskSection from "./DeskSection";
import Intro from "./Intro";
import BF from "./BF";
import Kiosk from "./Kiosk"
import CardSection from "./CardSection";
import DesignIntro from "./DesignIntro";
import Design from "./Design";
import ProjectGoalText from "./ProjectGoalText";
import ProjectGoal from "./ProjectGoal";
import Service from "./Service";
import Ending from "./Ending";
import KioskIntro from "./KioskIntro";

function MainPage() {
    return(
        <div
        style={{
            backgroundColor: "#121212",
            color: "white",
        }}>
            <Logo/>
            <KioskIntro/>
            <Overview/>
            <DeskSection/>
            <Intro/>
            <BF/>
            <Kiosk/>
            <CardSection/>
            <DesignIntro/>
            <Design/>
            <ProjectGoalText />
            <ProjectGoal/>
            <Service/>
            <Ending/>
            
        </div>
    )
}

export default MainPage;