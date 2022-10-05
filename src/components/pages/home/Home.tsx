import React from "react";

import Skills from "../../organisms/skills/Skills";
import SkillsCard from "../../organisms/skillsCard/Skills";
import Timeline from "../../organisms/timeline/Timeline";
import Hero from "../../organisms/hero/Hero";

const Home: React.FC = () => {

	return (
		<>
			<Hero />
			<SkillsCard />
			{/* <Skills /> */}
			<Timeline />
		</>
	)
}

export default Home