import React from "react";
import * as S from "./styles";
import graduation from "../../../assets/graduation.svg"
import cup from "../../../assets/cup.svg"
import bank from "../../../assets/bank.svg"
import farm from "../../../assets/farm.svg"

const Timeline: React.FC = () => {

	return (
		<S.Section>
			<S.Subtitle>Timeline Profissional</S.Subtitle>
			< S.Line>
				<S.LineItem>
					<span>
						<p>2018</p>
					</span>
					<img src={cup} alt="cup coffe" />
					<p>Desenvolvedora FrontEnd na Software House <a target="_blank" href="https://www.espressolabs.com.br">Espresso Labs</a></p>
				</S.LineItem>
				<S.LineItem>
					<span>
						<p>2019</p>
					</span>
					<img src={graduation} alt="graduation" />
					<p>Tecnóloga pela  <a target="_blank" href="https://www.fatecmogidascruzes.com.br">Fatec </a> em Análise e Desenvolvimento de Sistemas</p>
				</S.LineItem>

				<S.LineItem>
					<span>
						<p>2020</p>
					</span>
					<img src={bank} alt="bank" />
					<p>Analista de Sistemas no <a target="_blank" href="https://www.itau.com.br/">Itaú Unibanco</a></p>
				</S.LineItem>

				<S.LineItem>
					<span>
						<p>2020</p>
					</span>
					<img src={farm} alt="farm" />
					<p>Engenheira de Software na <a target="_blank" href="https://www.gaivota.ai/">Gaivota</a></p>
				</S.LineItem>
			</S.Line>
			{/* <S.Bubbles /> */}
			{/* <S.Bubbles /> */}
			{/* <S.Bubbles /> */}
		</S.Section>

	)
}

export default Timeline;