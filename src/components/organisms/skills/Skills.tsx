import React from "react";
import * as S from "./styles";
import react from "../../../assets/react.svg";
import vue from "../../../assets/vue.svg";
import node from "../../../assets/node.png";
import typescript from "../../../assets/typescript.png";
import js from "../../../assets/js.png";
import ionic from "../../../assets/ionic.svg";
import angular from "../../../assets/angular.svg";

const Skills: React.FC = () => {
	return (
		<S.Section>
			<S.Subtitle>Skills Técnicas</S.Subtitle>
			<S.SkillImages>
				<S.SkillCard>
					<img src={react} alt="react logo" />
					<p>React</p>
				</S.SkillCard>
				<S.SkillCard>
					<img src={vue} alt="vue logo" />
					<p>Vue</p>
				</S.SkillCard>
				<S.SkillCard>
					<img src={angular} alt="angular logo" />
					<p>Angular</p>
				</S.SkillCard>
				<S.SkillCard>
					<img src={ionic} alt="ionic logo" />
					<p>Ionic</p>
				</S.SkillCard>

				<S.SkillCard>
					<img src={node} alt="node logo" />
					<p>Node</p>
				</S.SkillCard>

				<S.SkillCard>
					<img src={js} alt="javascript logo" />
					<p>JavaScript</p>
				</S.SkillCard>

				<S.SkillCard>
					<img src={typescript} alt="typescript logo" />
					<p>TypeScript</p>
				</S.SkillCard>

			</S.SkillImages>
			<S.SkillDetails>
				<h5>React</h5>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
			</S.SkillDetails>
		</S.Section>
	)
}

export default Skills;