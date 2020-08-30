import React from "react";
import "./QuestionPage.css";

import Timer from "../Timer/Timer";
import SideContainerHeader from "../SideContainerHeader/SideContainerHeader";
import QuestionContainer from "../QuestionContainer/QuestionContainer";
import Button from "../Button/Button";
import QATask from "../QATask/QATask";
import SituationTask from "../SituationTask/SituationTask";

const exportText = {
	time: "05:15",
	taskQA:
		"Напишите в каких узких, специфических или актуальных сейчас темах и сферах вы хорошо  разбираетесь.",
	descriptionQA:
		"Напишите в свободной форме, можно привести ссылки примеров на каждый вид.",
	headingText: "Ответьте на вопросы",
	givenTask:
		"Есть студия с одним Арт-Директором Катей и двумя иллюстраторами Леной и Настей.Каждый день иллюстраторы сдают по одной работе для проверки, но иногда по две, а иногда, если работа большая, то одну работу за три дня. Катя проверяет эти работы и если нужны правки, то отправляет их на доработку. После того как работы приняты, они могут пролежать на общем сервере несколько месяцев перед тем как будут отправлены на загрузку на стоки.",
	descriptionTask:
		"Необходимо придумать файловую структуру сервера (названия папок и их вложений) и описать куда попадает новый файл с иллюстрацией в момент его создания, проверки и внесения правок, загрузки на стоки и последующего хранения.",
};

function QuestionPage(props) {
	return (
		<div className="grid--QuestionPage">
			<div className="header-QuestionPage">
				<Timer time={exportText.time} />
				<SideContainerHeader />
			</div>
			<div className="wrapper-centredContent--QuestionPage">
				<div className="wrapper-widthContent--QuestionPage">
					<h2 className="heading--QuestionPage">{exportText.headingText}</h2>
					<div className="body-QuestionPage">
						<QuestionContainer
							taskType={
								// <QATask
								// 	task={exportText.taskQA}
								// 	description={exportText.descriptionQA}
								// />
								<SituationTask
									givenTask={exportText.givenTask}
									descriptionTask={exportText.descriptionTask}
								/>
							}
						/>
					</div>
					<div className="footer-QuestionPage">
						<Button color="white" label="Продолжить" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default QuestionPage;
