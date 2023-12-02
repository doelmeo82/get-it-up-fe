import React, { useEffect, useState } from "react";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { InlineMath } from "react-katex";

import { updateArray } from "../../store/reducers/questionSlice";
import { useAppDispatch } from "../../hooks/appHooks";
import { useParams } from "react-router-dom";
import {
  postExamQuestion,
  selectExamPost,
} from "../../store/reducers/examSlice";
import { useSelector } from "react-redux";

interface QuestionInteface {
  index: any;
  question: any;
}
const Question = ({ index, question }: QuestionInteface) => {
  const dispatch = useAppDispatch();
  const examPost = useSelector(selectExamPost);
  console.log("🚀 ~ file: Question.tsx:21 ~ Question ~ examPost:", examPost);
  const inlineFormula = "\\cos (2\\theta) = \\cos^2 \\theta - \\sin^2 \\theta";
  const [value, setValue] = useState("");
  const handleClick = (
    indexs: number,
    id: number,
    indexLecture: number,
    type: string
  ) => {
    dispatch(updateArray(index));
    dispatch(
      postExamQuestion({
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
        <div className="flex items-center gap-x-3 mb-2">
          <h3 className="font-medium">Câu hỏi số {index}</h3>
          <div className="label px-2 relative bg-[#FF6636] w-fit h-[24px]">
            <span className="text-[13px] font-medium text-white">
              {question?.questionLevel}
            </span>
          </div>
        </div>
        <div>
          <p className="mb-[10px]">{question?.title}</p>
          {question?.answerType === "Chọn 1" ? (
            <RadioGroup onChange={setValue} value={value}>
              <Stack direction="column">
                {question?.answers.map((answer: any, indexLecture: number) => (
                  <div
                    onClick={() =>
                      handleClick(
                        index - 1,
                        question?._id,
                        indexLecture,
                        "Chọn 1"
                      )
                    }
                    className="cursor-pointer"
                  >
                    <Radio
                      size="lg"
                      value={`${indexLecture + 1}`}
                      colorScheme="orange"
                    >
                      <span className="text-[16px]">{answer}</span>
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

export default Question;
