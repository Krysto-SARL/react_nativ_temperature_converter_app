import { TextInput } from 'react-native'
import { s } from './InputTemperature.style'
import { Text } from 'react-native'
import { View } from 'react-native'

export function InputTemperature({ defaultValue , onChangeText , unit}) {
  return (
    <View style={s.container}>
    <TextInput
      defaultValue={defaultValue}
      maxLength={4}
      keyboardType="numeric"
      style={s.input}
      placeholder="Tappe une température"
      onChangeText={onChangeText}
      />
      <Text style={s.unit}>{unit}</Text>
      </View>
  )
}
