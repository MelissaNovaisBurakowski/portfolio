import React, { useState } from "react";
import * as S from "./styles";
import graduation from "../../../assets/graduation.svg"

const Timeline: React.FC = () => {

	{/* TODO fix timeSelected typing */ }
	const [timelineSelected, setTimelineSelected] = useState(1)
	return (
		<S.Section>
			<S.Subtitle>Timeline Profissional</S.Subtitle>

			< S.Line>
				<S.LineItem>
					<label htmlFor="graduation">
						<img src={graduation} alt="graduation" />
					</label>
					<input type="checkbox" id="graduation" name="graduation" value={1} onClick={() => setTimelineSelected(1)} />
				</S.LineItem>
				<S.LineItem>
					<label htmlFor="job">
						<img src={graduation} alt="graduation" />
					</label>
					<input type="checkbox" id="job" name="job" value={2} onClick={() => setTimelineSelected(2)} />
				</S.LineItem>


			</S.Line>
			{
				timelineSelected === 1 && <S.Subtitle>1</S.Subtitle>
			}

			{
				timelineSelected === 2 && <S.Subtitle>2</S.Subtitle>
			}

		</S.Section>

	)
}

export default Timeline;