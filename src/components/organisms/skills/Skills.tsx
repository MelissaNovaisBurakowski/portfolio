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
			description: "No momento o React é minha biblioteca/framework web favorito! Esse site foi produzido usando React. Utilizo o react desde 2020 e foi amor a primeira vista! Já fiz diversos projetos utlizando essa lib. Já consegui gerar PDFs customizados, desenhar poligonos em mapas utilizando GeoJSON, Dashboards e muito mais!"
		},
		[SkillOptions.VUE]: {
			title: "Vue",
			description: "Esse foi o primeiro framework web com que tive contato e ele tem um lugar especial no meu coração s2. Já fiz vários dashboards para tudo quanto era aplicação. Também já codei plataformas de cursos online, auditoria e outros projetos pessoais."
		},
		"ionic": {
			title: "Ionic",
			description: "Utilizei o Ionic + Cordova para realizar diversos projetos mobiles. Só de redes sociais, foram 3! Eram projetos bem complexos, onde era possível postar fotos e vídeos, marcar pessoas, curtir e comentar. Alguns eram mais voltados para área de treinamento de funcionários, com uma gameficação do aprendizado de novos produtos e engajamento dos colaboradores."
		},
		"angular": {
			title: "Angular",
			description: "Utilizei muito esse framework em meados de 2019. Gostei principalmente da organização que ele traz, ainda mais trabalhando com um grupo maior de pessoas!"
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
			description: "Meu modo favorito de codar no backend! Já utilizei muitas linguagens de programação no back, mas foi o Node que me conquistou XD. Tenho utilizado o Node para todos os projetos backend que faço. Já implementei algumas features/ajustes em projetos profissionais e fiz diversos projetos pessoais completos com ele."
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
							<p>{skills[selectedSkill].description}</p>
						</>
					)
				}

			</S.SkillDetails>
		</S.Section>
	)
}

export default Skills;