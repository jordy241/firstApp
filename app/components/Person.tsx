import { View, Text } from 'react-native'
import React from 'react'

type PersonProps = {
    name: string
    age: number
}


const Person = (props: PersonProps) => {
  return (
    <View>
      <Text>{props.name}</Text>
    </View>
  )
}

export default Person