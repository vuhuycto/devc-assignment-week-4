import React from 'react';
import { View, StyleSheet } from 'react-native';

function CallToAction({ children, style }) {
	return <View style={style}>{children}</View>;
}

export default CallToAction;
