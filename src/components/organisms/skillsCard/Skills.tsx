import React, { useCallback, useState } from "react";
import * as S from "./styles";
import react from "../../../assets/react.svg";
import vue from "../../../assets/vue.svg";
import node from "../../../assets/node.png";
import typescript from "../../../assets/typescript.png";
import js from "../../../assets/js.png";
import ionic from "../../../assets/ionic.svg";
import jest from "../../../assets/jest.png";

enum SkillOptions {
	"REACT" = "react",
	"JS" = "javaScript",
	"TS" = "typeScript",
	"JEST" = "jest",
	"IONIC" = "ionic",
	"VUE" = "vue",
	// "ANGULAR" = "angular",
	"NODE" = "node",
}

const Skills: React.FC = () => {

	const [selectedSkill, setSelectedSkill] = useState(SkillOptions.REACT);

	const skills = {
		[SkillOptions.REACT]: {
			title: "React",
			description: "No momento o React é minha biblioteca/framework web favorito! Esse site foi produzido usando React. Utilizo o react desde 2020 e foi amor a primeira vista! Já fiz diversos projetos utlizando essa lib. Já consegui gerar PDFs customizados, desenhar poligonos em mapas utilizando GeoJSON, Dashboards e muito mais!",
			image: react
		},
		[SkillOptions.VUE]: {
			title: "Vue",
			description: "Esse foi o primeiro framework web com que tive contato e ele tem um lugar especial no meu coração s2. Já fiz vários dashboards para tudo quanto era aplicação. Também já codei plataformas de cursos online, auditoria e outros projetos pessoais.",
			image: vue
		},
		[SkillOptions.IONIC]: {
			title: "Ionic",
			description: "Utilizei o Ionic + Cordova para realizar diversos projetos mobiles. Eram projetos bem complexos como redes sociais, plataforma de upload de arquivos, contratação de serviços etc. Alguns eram mais voltados para área de treinamento de funcionários, com uma gameficação do aprendizado de novos produtos e engajamento dos colaboradores.",
			image: ionic
		},
		// [SkillOptions.ANGULAR]: {
		// 	title: "Angular",
		// 	description: "Utilizei muito esse framework em meados de 2019. Gostei principalmente da organização que ele traz, ainda mais trabalhando com um grupo maior de pessoas!",
		// 	image: angular
		// },
		[SkillOptions.JEST]: {
			title: "Jest",
			description: "Não tem como falar em testes sem falar em Jest! Esse framework é indispensável quando o assunto é testes unitários. Utilizei muito esse poderoso framework para testar minhas aplicações em React. Em conjunto com a biblioteca Testing-library foi possível testar toda a aplicação de uma forma muito fácil e além disso tabém possui uma configuração bem simples.",
			image: jest
		},
		[SkillOptions.JS]: {
			title: "JavaScript",
			description: "Umas das linguagens de programação que mais utilizei, tanto em projetos pessoais quanto profissionais. Comecei trabalhando com ele na web, fazendo web sites com vanilla  js. Hoje utilizo muito ele na web com frameworks e libs como Vue, Angular e React e também no backend com Node."
			, image: js
		},
		[SkillOptions.TS]: {
			title: "TypeScript",
			description: "Minha linguagem de programação favorita no momento. Para mim tem o equilibro ideal entre a organização de uma linguagem tipada e a liberdade de uma não-tipada. Utilizo no frontend em diversos projetos com React e no Backend com Node!"
			, image: typescript
		},
		[SkillOptions.NODE]: {
			title: "Node",
			description: "Meu modo favorito de codar no backend! Já utilizei muitas linguagens de programação no back, mas foi o Node que me conquistou XD. Tenho utilizado o Node para todos os projetos backend que faço. Já implementei algumas features/ajustes em projetos profissionais e fiz diversos projetos pessoais completos com ele."
			, image: node
		}
	}

	const changeSelectedSkill = useCallback((newSkill: SkillOptions) => {
		setSelectedSkill(newSkill)
	}, [])

	return (
		<S.Section>
			<S.Subtitle>Skills Técnicas</S.Subtitle>
			<S.Card>
				<S.Aside>
					<ul>
						{Object.values(SkillOptions).map((skillKey) => (
							<li key={skillKey}>
								<input type="radio" id={skillKey} name="skill" value={skillKey} checked={selectedSkill === skillKey} onChange={() => changeSelectedSkill(skillKey)} />
								<label htmlFor={skillKey} >
									<img src={skills[skillKey].image} alt={`${skillKey} logo`} />
									<p>{skillKey}</p>
								</label>
							</li>
						))}
					</ul>
				</S.Aside>
				<S.SkillDetails>
					<h5>{skills[selectedSkill].title}</h5>
					<p>{skills[selectedSkill].description}</p>
				</S.SkillDetails>

				<S.SkillBackground src={skills[selectedSkill].image} alt={`${skills[selectedSkill].title} logo`} />


			</S.Card>

			<S.Waves>
				<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
					<path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
					<path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
					<path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
				</svg>
			</S.Waves>

		</S.Section >
	)
}

export default Skills;