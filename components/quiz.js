import React from 'react'
import { connect } from 'react-redux'
import { Modal, View, Text, Button, TouchableOpacity, Pressable } from 'react-native'
import { QuizStyles } from '../assets/styles/quiz'
import { colors } from '../helpers/constants'

function Quiz(props) {
    const { deck, navigation } = props

    const [modalVisible, onChangeModalVisible] = React.useState(false)
    const [correct, onChangeCorrect] = React.useState(0)
    const [incorrect, onChangeIncorrect] = React.useState(0)
    const [currQuestion, onChangeCurrQuestion] = React.useState(0)
    const [showResults, onChangeShowResults] = React.useState(false)
    const [answeredQuestion, onChangeansweredQuestion] = React.useState(new Array(deck.questions.length).fill(''))

    const Next = () => {
        onChangeCurrQuestion(Math.min(currQuestion + 1, deck.questions.length - 1))
    }

    const Prev = () => {
        onChangeCurrQuestion(Math.max(currQuestion - 1, 0))
    }

    const disabledPrev = () => {
        return (currQuestion === 0)
    }

    const disabledNext = () => {
        return (currQuestion === deck.questions.length - 1)
    }

    const handleAnswer = (answer) => {
        let updatedAnswers = answeredQuestion
        updatedAnswers[currQuestion] = answer
        onChangeansweredQuestion(updatedAnswers)
        if (answer === 'correct') {
            onChangeCorrect(correct + 1)
        } else {
            onChangeIncorrect(incorrect + 1)
        }
    }

    const handleAnswerDisbaled = (answer) => {
        return (answeredQuestion[currQuestion] !== '')
    }

    const enableResult = () => {
        return (currQuestion === deck.questions.length - 1 && answeredQuestion.length > 0)
    }

    const resetQuiz = () => {
        onChangeCorrect(0)
        onChangeIncorrect(0)
        onChangeCurrQuestion(0)
        onChangeShowResults(false)
        onChangeansweredQuestion(new Array(deck.questions.length).fill(''))
    }

    if (showResults) {

        return (
            <View
                style={QuizStyles.resultContainer}>
                <Text>
                    { correct > 0 ?
                        (<Text style={QuizStyles.success}>{correct / (correct+incorrect)*100}%</Text>)
                        : (<Text style={QuizStyles.fails}>0</Text>)
                    }
                </Text>
                <View style={{ marginBottom: 10, width: '100%' }}>
                    <Button
                        title="Reset Quiz"
                        onPress={()=> resetQuiz()}
                        color={colors.primary}
                    />
                </View>
                <View style={{ marginBottom: 10, width: '100%' }}>
                    <Button
                        title="Back to Home"
                        onPress={() => navigation.navigate('Home')}
                        color={colors.primary}
                    />
                </View>
            </View>
        )
    }

    return (
        <View style={QuizStyles.container}>
            <View style={QuizStyles.header}>
                <Text>{ currQuestion + 1 }/{ deck.questions.length }</Text>
                <Text>Total Answered { correct + incorrect }/{ deck.questions.length }</Text>
            </View>
            <View style={QuizStyles.body}>
                <Text>{ deck.title }:</Text>
                <Text style={QuizStyles.question}>{ deck.questions[currQuestion].question }</Text>
                <Modal
                  animationType="slide"
                  visible={modalVisible}
                  style={QuizStyles.modalView}
                  onRequestClose={() => {
                    onChangeModalVisible(!modalVisible);
                  }}
                >
                    <View style={QuizStyles.centeredView}>
                        <Text style={QuizStyles.answer}>{ deck.questions[currQuestion].answer }</Text>
                        <Button
                            title="Hide Answer"
                            onPress={() => onChangeModalVisible(!modalVisible)}
                            color={colors.primary}
                        />
                    </View>
                </Modal>
                <TouchableOpacity
                    onPress={()=> onChangeModalVisible(!modalVisible)}
                >
                    <Text>Show Answer</Text>
                </TouchableOpacity>
                {
                    handleAnswerDisbaled()? (
                        <Text style={{marginBottom: 10}}>Your answer was
                            {answeredQuestion[currQuestion] === 'correct'?
                            (<Text style={{fontWeight: 'bold', color: 'green'}}> {answeredQuestion[currQuestion]}</Text>):
                            (<Text style={{fontWeight: 'bold', color: 'red'}}> {answeredQuestion[currQuestion]}</Text>)
                            }
                        </Text>
                    ):
                    null
                }
                <Button
                    title="Correct"
                    onPress={()=>handleAnswer('correct')}
                    disabled={handleAnswerDisbaled()}
                    color={colors.primary}
                />
                <View style={{ marginVertical: 10 }}>
                    <Button
                        onPress={()=>handleAnswer('incorrect')}
                        title="Incorrect"
                        disabled={handleAnswerDisbaled()}
                        color={colors.primary}
                    />
                </View>
                {
                    enableResult() ? (
                        <Button
                            onPress={()=> onChangeShowResults(true)}
                            title="Show Result"
                            color={colors.primary}
                        />
                    ) : null
                }
            </View>
            <View style={QuizStyles.footer}>
                <Button
                    title="Prev"
                    onPress={Prev}
                    disabled={disabledPrev()}
                    color={colors.primary}
                />
                <Button
                    title="Next"
                    onPress={Next}
                    disabled={disabledNext()}
                    color={colors.primary}
                />
            </View>
        </View>
    )
}

function mapState({ decks }, {navigation, route}) {
    const { id } = route.params
    const deck = decks[id]
    return {
        navigation,
        deck,
        id
    }
}

export default connect(mapState)(Quiz)
