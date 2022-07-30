import React from "react";
import Link from "../../atoms/link/Link"
import react from "../../../assets/react.svg"
import vue from "../../../assets/vue.svg"
import node from "../../../assets/node.png"
import ionic from "../../../assets/ionic.svg"
import angular from "../../../assets/angular.svg"
import * as S from "./styles"
const Portfolio: React.FC = () => {

	return (
		<>
			<S.Header></S.Header>
			<S.Section>
				<S.ImageWrapper>
					<S.Img src="https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
				</S.ImageWrapper>

				<S.TextWrapper>
					<S.Title>Olá Mundo!</S.Title>
					<S.Subtitle>Eu me chamo Mel Novais Burakowski e sou uma</S.Subtitle>
					<S.Subtitle>Desenvolvedora Full Stack!</S.Subtitle>
				</S.TextWrapper>
			</S.Section>


			<S.SectionSkills>
				<S.Subtitle>Skills Técnicas</S.Subtitle>
				<S.Skills>
					<S.SkillCard>
						<S.SkillLogo src={react} className="App-logo" alt="logo" />
					</S.SkillCard>
					<S.SkillCard>
						<S.SkillLogo src={vue} className="App-logo" alt="logo" />
					</S.SkillCard>
					<S.SkillCard>
						<S.SkillLogo src={angular} className="App-logo" alt="logo" />
					</S.SkillCard>
					<S.SkillCard>
						<S.SkillLogo src={ionic} className="App-logo" alt="logo" />
					</S.SkillCard>
					<S.SkillCard>
						<S.SkillLogo src={node} className="App-logo" alt="logo" />
					</S.SkillCard>
				</S.Skills>
				<div>		<S.SkillTitle>React</S.SkillTitle>
					<S.SkillDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </S.SkillDescription></div>



			</S.SectionSkills>
		</>
	)
}

export default Portfolio