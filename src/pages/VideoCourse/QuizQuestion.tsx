import React, { useEffect, useState } from 'react';
import { Radio, RadioGroup, Stack } from '@chakra-ui/react';
import { InlineMath } from 'react-katex';

import { updateArray } from '../../store/reducers/questionSlice';
import { useAppDispatch } from '../../hooks/appHooks';
import { useParams } from 'react-router-dom';
import {
  postExamQuestion,
  selectExamPost,
} from '../../store/reducers/examSlice';
import { useSelector } from 'react-redux';
import parse from 'html-react-parser';
import { postQuizQuestion, selectPostQuiz } from '../../store/reducers/quizSlice';
interface QuizQuestion {
  index: any;
  quiz: any;
}
const QuestionQuiz = ({ index, quiz }: QuizQuestion) => {
  const dispatch = useAppDispatch();
  
  const postQuiz = useSelector(selectPostQuiz);
  const [value, setValue] = useState('');
  const handleClick = (
    indexs: number,
    id: number,
    indexLecture: number,
    type: string
  ) => {
    console.log('🚀 ~ file: Question.tsx:30 ~ Question ~ id:', id);
    console.log('🚀 ~ QuizVideo ~ postQuiz:', postQuiz);

    dispatch(updateArray(index));
    dispatch(
      postQuizQuestion({
        questionIndex: indexs,
        questionId: id,
        answer: indexLecture + 1,
        type: type,
      })
    );
  };
  return (
    <div id={index}>
      <div className="py-3">
        {/* <div className="flex items-center gap-x-3 mb-2">
          <h3 className="font-medium">Câu hỏi số {index}</h3>
        </div> */}
        <div>
          <p className="mb-[10px]">{parse(quiz?.title)}</p>
          {quiz?.answerType === 'Chọn 1' ? (
            <RadioGroup onChange={setValue} value={value}>
              <Stack direction="column">
                {quiz?.answers.map((answer: any, indexLecture: number) => (
                  <div
                    key={indexLecture}
                    onClick={() =>
                      handleClick(
                        index - 1,
                        quiz?._id,
                        indexLecture,
                        'Chọn 1'
                      )
                    }
                    className="cursor-pointer"
                  >
                    <Radio
                      size="lg"
                      value={`${indexLecture + 1}`}
                      colorScheme="orange"
                    >
                      <span className="text-[16px]">{parse(answer)}</span>
                    </Radio>
                  </div>
                ))}
              </Stack>
            </RadioGroup>
          ) : (
            <p>đâsd</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionQuiz;
