import React from "react";

import Notification from "../../organisms/notification/Notification";
import SkillsCard from "../../organisms/skillsCard/Skills";
import Timeline from "../../organisms/timeline/Timeline";
import Hero from "../../organisms/hero/Hero";

const Home: React.FC = () => {

	return (
		<>
			<Notification />
			<Hero />
			<SkillsCard />
			<Timeline />
		</>
	)
}

export default Home