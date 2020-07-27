import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { SwipeRow } from 'react-native-swipe-list-view';

import defaultStyles from './../../configs/styles';
import IconButton from './../IconButton';
import CallToAction from './../CallToAction';
import TodoContent from './TodoContent';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function TodoItem({
	title,
	isCompleted = false,
	onCheck,
	onDelete,
	onNavigate,
}) {
	return (
		<View style={styles.container}>
			<View style={styles.todo}>
				<SwipeRow rightOpenValue={-defaultStyles.length}>
					<CallToAction style={styles.delete}>
						<IconButton
							name='trash-can'
							size={defaultStyles.iconSize}
							style={{
								...defaultStyles.action,
								borderTopRightRadius: 5,
								borderBottomRightRadius: 5,
							}}
							backgroundColor='tertiary'
							color='white'
							onPress={onDelete}
						/>
					</CallToAction>
					<View style={styles.content}>
						<CallToAction style={styles.check}>
							<IconButton
								name={isCompleted ? 'check-circle' : 'circle-outline'}
								style={{
									...styles.status,
									borderTopLeftRadius: 5,
									borderTopRightRadius: 5,
								}}
								size={defaultStyles.iconSize}
								color='secondary'
								backgroundColor='white'
								onPress={onCheck}
							/>
						</CallToAction>
						<TouchableWithoutFeedback onPress={onNavigate}>
							<TodoContent title={title} isCompleted={isCompleted} />
						</TouchableWithoutFeedback>
					</View>
				</SwipeRow>
			</View>
		</View>
	);
}

TodoItem.propTypes = {
	isCompleted: PropTypes.bool,
};

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	todo: {
		width: '95%',
		justifyContent: 'center',
		marginVertical: 2,
	},
	content: {
		backgroundColor: defaultStyles.colors.white,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		borderRadius: 5,
	},
	delete: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		backgroundColor: defaultStyles.colors.white,
		borderRadius: 5,
	},
	check: {
		marginHorizontal: 15,
	},
	status: {
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default TodoItem;
