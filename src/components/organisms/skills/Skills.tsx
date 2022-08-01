import React, { useCallback, useState } from "react";
import * as S from "./styles";
import react from "../../../assets/react.svg";
import vue from "../../../assets/vue.svg";
import node from "../../../assets/node.png";
import typescript from "../../../assets/typescript.png";
import js from "../../../assets/js.png";
import ionic from "../../../assets/ionic.svg";
import angular from "../../../assets/angular.svg";

enum SkillOptions {
	"REACT" = "react",
	"IONIC" = "ionic",
	"VUE" = "vue",
	"ANGULAR" = "angular",
	"TS" = "ts",
	"JS" = "js",
	"NODE" = "node",
}

const Skills: React.FC = () => {

	const [selectedSkill, setSelectedSkill] = useState(SkillOptions.REACT);

	const skills = {
		[SkillOptions.REACT]: {
			title: "React",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
		},
		[SkillOptions.VUE]: {
			title: "Vue",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
		},
		"ionic": {
			title: "Ionic",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
		},
		"angular": {
			title: "Angular",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
		},
		"js": {
			title: "JavaScript",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
		},
		"ts": {
			title: "TypeScript",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
		},
		"node": {
			title: "Node",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
		}
	}

	const changeSelectedSkill = useCallback((newSkill: SkillOptions) => {
		console.log(newSkill)
		setSelectedSkill(newSkill)
	}, [])

	return (
		<S.Section>
			<S.Subtitle>Skills Técnicas</S.Subtitle>
			<S.SkillImages>
				<S.SkillCard>
					<input type="radio" id="react" name="skill" value={SkillOptions.REACT} onChange={() => changeSelectedSkill(SkillOptions.REACT)} />
					<label htmlFor="react" >
						<img src={react} alt="react logo" />
						<p>React</p>
					</label>
				</S.SkillCard>

				<S.SkillCard>
					<input type="radio" id="vue" name="skill" value={SkillOptions.VUE} onChange={() => changeSelectedSkill(SkillOptions.VUE)} />
					<label htmlFor="vue" >
						<img src={vue} alt="vue logo" />
						<p>Vue</p>
					</label>
				</S.SkillCard>
				<S.SkillCard>
					<input type="radio" id="angular" name="skill" value={SkillOptions.ANGULAR} onChange={() => changeSelectedSkill(SkillOptions.ANGULAR)} />
					<label htmlFor="angular" >
						<img src={angular} alt="angular logo" />
						<p>Angular</p>
					</label>
				</S.SkillCard>
				<S.SkillCard>
					<input type="radio" id="ionic" name="skill" value={SkillOptions.IONIC} onChange={() => changeSelectedSkill(SkillOptions.IONIC)} />
					<label htmlFor="ionic" >
						<img src={ionic} alt="ionic logo" />
						<p>Ionic</p>
					</label>
				</S.SkillCard>

				<S.SkillCard>
					<input type="radio" id="node" name="skill" value={SkillOptions.NODE} onChange={() => changeSelectedSkill(SkillOptions.NODE)} />
					<label htmlFor="node" >
						<img src={node} alt="node logo" />
						<p>Node</p>
					</label>
				</S.SkillCard>

				<S.SkillCard>
					<input type="radio" id="javascript" name="skill" value={SkillOptions.JS} onChange={() => changeSelectedSkill(SkillOptions.JS)} />
					<label htmlFor="javascript" >
						<img src={js} alt="javascript logo" />
						<p>JavaScript</p>
					</label>
				</S.SkillCard>

				<S.SkillCard>
					<input type="radio" id="typescript" name="skill" value={SkillOptions.TS} onChange={() => changeSelectedSkill(SkillOptions.TS)} />
					<label htmlFor="typescript" >
						<img src={typescript} alt="typescript logo" />
						<p>TypeScript</p>
					</label>
				</S.SkillCard>

			</S.SkillImages>
			<S.SkillDetails>
				{
					selectedSkill && (
						<>
							<h5>{skills[selectedSkill].title}</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
						</>
					)
				}

			</S.SkillDetails>
		</S.Section>
	)
}

export default Skills;