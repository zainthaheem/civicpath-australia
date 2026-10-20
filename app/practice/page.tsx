
'use client'

import { useMemo, useState } from 'react'
import questionsData from '../../data/questions.json'

type Question = {
  id: string
  topic: string
  isValues: boolean
  question: string
  options: string[]
  answer: number
  explanation: string
  source: string
  difficulty: string
}

const questions = questionsData as Question[]

const topicNames: Record<string, string> = {
  all: 'All topics',
  people: 'Australia and its people',
  democracy: 'Democratic beliefs, rights and liberties',
  government: 'Government and the law',
  values: 'Australian values',
}

export default function PracticePage() {
  const [topic, setTopic] = useState('all')
  const [questionIndex, setQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [checked, setChecked] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [answeredCount, setAnsweredCount] = useState(0)
  const [finished, setFinished] = useState(false)

  const filteredQuestions = useMemo(
    () =>
      topic === 'all'
        ? questions
        : questions.filter((question) => question.topic === topic),
    [topic],
  )

  const currentQuestion = filteredQuestions[questionIndex]

  function changeTopic(nextTopic: string) {
    setTopic(nextTopic)
    setQuestionIndex(0)
    setSelectedAnswer(null)
    setChecked(false)
    setCorrectCount(0)
    setAnsweredCount(0)
    setFinished(false)
  }

  function checkAnswer() {
    if (selectedAnswer === null || checked || !currentQuestion) return

    setChecked(true)
    setAnsweredCount((count) => count + 1)

    if (selectedAnswer === currentQuestion.answer) {
      setCorrectCount((count) => count + 1)
    }
  }

  function nextQuestion() {
    if (questionIndex + 1 >= filteredQuestions.length) {
      setFinished(true)
      return
    }

    setQuestionIndex((index) => index + 1)
    setSelectedAnswer(null)
    setChecked(false)
  }

  function restartPractice() {
    setQuestionIndex(0)
    setSelectedAnswer(null)
    setChecked(false)
    setCorrectCount(0)
    setAnsweredCount(0)
    setFinished(false)
  }

  return (
    <main className="min-h-screen bg-[#F5F7F4] text-[#243746]">
      <header className="border-b border-[#102D27]/10 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-5 py-4">
          <a href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#102D27] text-2xl text-[#D9B86C]">
              ⊕
            </span>
            <span>
              <span className="block text-lg font-extrabold text-[#102D27]">
                CivicPath
              </span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#64756D]">
                Australia
              </span>
            </span>
          </a>
          <a
            href="/"
            className="rounded-lg px-3 py-2 text-sm font-semibold text-[#27664F] hover:bg-[#E8F0E9]"
          >
            ← Home
          </a>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-5 py-10 sm:py-14">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#43836B]">
          Practice centre
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-[#102D27] sm:text-4xl">
          Learn one question at a time.
        </h1>
        <p className="mt-4 leading-7 text-[#5F6D68]">
          Choose a subject, select your answer, and review the explanation
          before moving to the next question.
        </p>

        <section className="mt-8">
          <label
            htmlFor="topic"
            className="mb-2 block text-sm font-bold text-[#102D27]"
          >
            Choose a study topic
          </label>
          <select
            id="topic"
            value={topic}
            onChange={(event) => changeTopic(event.target.value)}
            className="w-full rounded-xl border border-[#102D27]/15 bg-white px-4 py-3 text-base text-[#243746] outline-none focus:border-[#43836B] focus:ring-2 focus:ring-[#43836B]/20"
          >
            {Object.entries(topicNames).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </section>

        {finished ? (
          <section className="mt-8 rounded-3xl border border-[#102D27]/10 bg-white p-6 shadow-sm sm:p-8">
            <span className="text-4xl" aria-hidden="true">✦</span>
            <h2 className="mt-4 text-2xl font-extrabold text-[#102D27]">
              Practice complete!
            </h2>
            <p className="mt-3 leading-7 text-[#5F6D68]">
              You answered {answeredCount} of {filteredQuestions.length}{' '}
              questions.
            </p>
            <p className="mt-2 text-xl font-bold text-[#27664F]">
              Correct answers: {correctCount} / {answeredCount}
            </p>
            <p className="mt-3 text-sm leading-6 text-[#5F6D68]">
              This result reflects only this practice session. It is not an
              official test score or a prediction that you will pass.
            </p>
            <button
              onClick={restartPractice}
              className="mt-6 w-full rounded-xl bg-[#102D27] px-5 py-3 font-bold text-white hover:bg-[#21483C]"
            >
              Practise again
            </button>
          </section>
        ) : currentQuestion ? (
          <section className="mt-8 rounded-3xl border border-[#102D27]/10 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="rounded-full bg-[#E8F0E9] px-3 py-1.5 text-sm font-bold text-[#27664F]">
                Question {questionIndex + 1} of {filteredQuestions.length}
              </span>
              <span className="text-sm text-[#64756D]">
                {currentQuestion.difficulty === 'easy'
                  ? 'Beginner'
                  : currentQuestion.difficulty === 'medium'
                    ? 'Intermediate'
                    : currentQuestion.difficulty}
              </span>
            </div>

            <div className="mt-7 h-2 overflow-hidden rounded-full bg-[#E8F0E9]">
              <div
                className="h-full rounded-full bg-[#43836B] transition-all"
                style={{
                  width: `${((questionIndex + 1) / filteredQuestions.length) * 100}%`,
                }}
              />
            </div>

            <h2 className="mt-7 text-xl font-extrabold leading-8 text-[#102D27] sm:text-2xl">
              {currentQuestion.question}
            </h2>

            <div className="mt-6 space-y-3">
              {currentQuestion.options.map((option, index) => {
                const isCorrect = index === currentQuestion.answer
                const isSelected = selectedAnswer === index

                let optionStyle =
                  'border-[#102D27]/15 bg-white hover:border-[#43836B]'

                if (checked && isCorrect) {
                  optionStyle = 'border-emerald-600 bg-emerald-50'
                } else if (checked && isSelected && !isCorrect) {
                  optionStyle = 'border-red-500 bg-red-50'
                } else if (isSelected) {
                  optionStyle = 'border-[#43836B] bg-[#E8F0E9]'
                }

                return (
                  <button
                    key={`${currentQuestion.id}-${index}`}
                    type="button"
                    disabled={checked}
                    onClick={() => setSelectedAnswer(index)}
                    className={`flex w-full items-start gap-3 rounded-xl border p-4 text-left transition ${optionStyle} disabled:cursor-default`}
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-current/15 text-sm font-bold">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="flex-1 pt-1 leading-6">{option}</span>
                    {checked && isCorrect && (
                      <span className="font-bold text-emerald-700">✓</span>
                    )}
                    {checked && isSelected && !isCorrect && (
                      <span className="font-bold text-red-600">✕</span>
                    )}
                  </button>
                )
              })}
            </div>

            {checked && (
              <div className="mt-6 rounded-2xl border border-[#102D27]/10 bg-[#F5F7F4] p-5">
                <p
                  className={`font-extrabold ${
                    selectedAnswer === currentQuestion.answer
                      ? 'text-emerald-700'
                      : 'text-red-700'
                  }`}
                >
                  {selectedAnswer === currentQuestion.answer
                    ? 'Correct answer!'
                    : 'Not quite — review the correct answer.'}
                </p>
                <p className="mt-3 leading-7 text-[#43574F]">
                  {currentQuestion.explanation}
                </p>
                <p className="mt-3 text-xs leading-5 text-[#64756D]">
                  Study reference: {currentQuestion.source}
                </p>
              </div>
            )}

            {!checked ? (
              <button
                type="button"
                disabled={selectedAnswer === null}
                onClick={checkAnswer}
                className="mt-7 w-full rounded-xl bg-[#102D27] px-5 py-4 font-bold text-white transition hover:bg-[#21483C] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Check answer
              </button>
            ) : (
              <button
                type="button"
                onClick={nextQuestion}
                className="mt-7 w-full rounded-xl bg-[#D9B86C] px-5 py-4 font-bold text-[#102D27] transition hover:bg-[#E8CE8D]"
              >
                {questionIndex + 1 === filteredQuestions.length
                  ? 'View results'
                  : 'Next question →'}
              </button>
            )}
          </section>
        ) : (
          <section className="mt-8 rounded-2xl bg-white p-6">
            <h2 className="font-bold text-[#102D27]">
              No questions available for this topic yet.
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#5F6D68]">
              Choose another topic or add more questions to the question bank.
            </p>
          </section>
        )}

        <p className="mt-8 text-center text-xs leading-5 text-[#64756D]">
          Independent study resource. These starter questions are not official
          test questions. Verify study content against current official
          Australian citizenship materials.
        </p>
      </div>
    </main>
  )
}
