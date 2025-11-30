import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, CheckCircle, XCircle, RotateCcw } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAssessmentStore } from '@/store/assessmentStore'
import { questions } from '@/data/questions'

export function Assessment() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showRationale, setShowRationale] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const { currentAnswers, addAnswer, clearAnswers, getScore } = useAssessmentStore()

  const currentQuestion = questions[currentQuestionIndex]
  const isLastQuestion = currentQuestionIndex === questions.length - 1

  const handleAnswerSelect = (answer: string) => {
    if (!showRationale) {
      setSelectedAnswer(answer)
    }
  }

  const handleSubmitAnswer = () => {
    if (!selectedAnswer) return

    const isCorrect = selectedAnswer === currentQuestion.correct
    addAnswer({
      questionId: currentQuestion.id,
      selectedAnswer,
      isCorrect,
    })

    setShowRationale(true)
  }

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      setIsComplete(true)
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedAnswer(null)
      setShowRationale(false)
    }
  }

  const handleRestart = () => {
    clearAnswers()
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setShowRationale(false)
    setIsComplete(false)
  }

  if (isComplete) {
    const score = getScore()
    const percentage = Math.round((score.correct / score.total) * 100)

    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" asChild>
          <Link to="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </Button>

        <Card>
          <CardHeader>
            <CardTitle className="text-center">Assessment Complete!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="text-6xl font-bold text-primary mb-4">
                {percentage}%
              </div>
              <div className="text-2xl mb-2">
                {score.correct} out of {score.total} correct
              </div>
              <div className="text-muted-foreground">
                {percentage >= 90
                  ? 'Excellent! Outstanding knowledge of clinical chemistry.'
                  : percentage >= 70
                  ? 'Good work! You have a solid understanding.'
                  : percentage >= 50
                  ? 'Not bad! Review the modules for improvement.'
                  : 'Keep studying! Review the core concepts and try again.'}
              </div>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Session Summary</h3>
              <div className="space-y-2">
                {questions.map((q, index) => {
                  const answer = currentAnswers.find((a) => a.questionId === q.id)
                  return (
                    <div key={q.id} className="flex items-center gap-2">
                      {answer?.isCorrect ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : (
                        <XCircle className="h-4 w-4 text-red-500" />
                      )}
                      <span className="text-sm">
                        Question {index + 1}: {q.category}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg">
              <p className="text-sm text-center">
                <strong>Session-Only Assessment:</strong> These results are not
                saved or tracked. This assessment is for learning purposes only.
              </p>
            </div>

            <div className="flex gap-4 justify-center">
              <Button onClick={handleRestart} className="gap-2">
                <RotateCcw className="h-4 w-4" />
                Take New Assessment
              </Button>
              <Button variant="outline" asChild>
                <Link to="/">Return to Home</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" asChild>
          <Link to="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </Button>
        <div className="text-sm text-muted-foreground">
          Question {currentQuestionIndex + 1} of {questions.length}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-muted rounded-full h-2">
        <div
          className="bg-primary h-2 rounded-full transition-all"
          style={{
            width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
          }}
        />
      </div>

      {/* Question Card */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary">{currentQuestion.category}</Badge>
          </div>
          <CardTitle className="text-xl">{currentQuestion.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Options */}
          <div className="space-y-2">
            {currentQuestion.options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswerSelect(option)}
                disabled={showRationale}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  selectedAnswer === option
                    ? showRationale
                      ? option === currentQuestion.correct
                        ? 'border-green-500 bg-green-50 dark:bg-green-950/20'
                        : 'border-red-500 bg-red-50 dark:bg-red-950/20'
                      : 'border-primary bg-primary/5'
                    : showRationale && option === currentQuestion.correct
                    ? 'border-green-500 bg-green-50 dark:bg-green-950/20'
                    : 'border-border hover:border-primary/50'
                } ${showRationale ? 'cursor-default' : 'cursor-pointer'}`}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-1">{option}</div>
                  {showRationale && (
                    <div>
                      {option === currentQuestion.correct ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        selectedAnswer === option && (
                          <XCircle className="h-5 w-5 text-red-500" />
                        )
                      )}
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Rationale */}
          {showRationale && (
            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Explanation:</h4>
              <p className="text-sm">{currentQuestion.rationale}</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            {!showRationale ? (
              <Button
                onClick={handleSubmitAnswer}
                disabled={!selectedAnswer}
                className="flex-1"
              >
                Submit Answer
              </Button>
            ) : (
              <Button onClick={handleNextQuestion} className="flex-1">
                {isLastQuestion ? 'View Results' : 'Next Question'}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Disclaimer */}
      <div className="text-center text-sm text-muted-foreground">
        <p>
          Session-only assessment. Results are not saved or tracked.
        </p>
      </div>
    </div>
  )
}
