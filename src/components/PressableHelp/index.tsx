import {
    ResultInfo,
    ResultTopic,
    ResultTitle,
    ResultContent,
    ResultTopicWrapper,
    ResultContentWrapper,
} from './styles';
import { Pressable } from 'react-native'
import { useState } from 'react';

export function PressableHelp({textTopic, textQuestion, textAnswer}) {
    const [pressableActive, setPressableActive] = useState(false);

    return (
        <Pressable
            onPress={() => {
                pressableActive ? setPressableActive(false) : setPressableActive(true)
            }
            }>
            <ResultInfo>
                <ResultTopicWrapper>
                    <ResultTopic>{textTopic} </ResultTopic>
                </ResultTopicWrapper>

                < ResultTitle >{textQuestion}</ResultTitle>

                {
                    pressableActive && (
                        <ResultContentWrapper>
                            <ResultContent testID="pressable_press_console" > {textAnswer} </ResultContent>
                        </ResultContentWrapper>
                    )
                }

            </ResultInfo>
        </Pressable>
    )
}