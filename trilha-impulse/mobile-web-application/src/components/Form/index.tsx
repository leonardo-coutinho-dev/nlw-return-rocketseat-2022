import React from 'react';
import { ArrowLeft } from 'phosphor-react-native';
import { 
  View,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
 } from 'react-native';

import { styles } from './styles';
import { theme } from '../../theme';

import {feedbackTypes} from '../../utils/feedbackTypes';
import {FeedbackType} from '../Widget/index';
import { ScreenshotButton } from '../ScreenshotButton';

interface Props {
  feedbackType: FeedbackType; 
}

export function Form({ feedbackType } : Props) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <ArrowLeft 
          size={24}
          weight="bold"
          color={theme.colors.text_secondary}
        />
        <View 
          style={styles.titleContainer}
        >
          <Image 
            source={feedbackTypeInfo.image}
            style={styles.image}
          />
          <Text 
            style={styles.titleText}
          >
            {feedbackTypeInfo.title}
          </Text>
        </View>
      </View>

      <TextInput 
        multiline
        style={styles.input}
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        placeholderTextColor={theme.colors.text_secondary}
      />

      <View  style={styles.footer}>
        <ScreenshotButton 
          screenshot=""
          onTakeShot={() => {}}
          onRemoveShot={() => {}}
        />
      </View>

    </View>
  );
}