import React from "react";

import Skills from "../../organisms/skills/Skills";
import Timeline from "../../organisms/timeline/Timeline";
import Header from "../../organisms/header/Header";
import Hero from "../../organisms/hero/Hero";

const Home: React.FC = () => {

	return (
		<>
			<Header />
			<Hero />
			<Skills />
			<Timeline />
		</>
	)
}

export default Home