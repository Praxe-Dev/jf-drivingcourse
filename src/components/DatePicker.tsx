import React, { useState } from 'react';
// import { Badge, Box, TextFieldProps } from '@mui/material';
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
// import { PickersDayProps } from '@mui/x-date-pickers';

// interface Event {
// 	date: Date;
// 	label: string;
// }

// function CalendarWithBadges() {
// 	const events: Event[] = [
// 		{ date: new Date('2022-03-10'), label: 'Event 1' },
// 		{ date: new Date('2022-03-15'), label: 'Event 2' },
// 		{ date: new Date('2022-04-05'), label: 'Event 3' },
// 		{ date: new Date('2022-04-15'), label: 'Event 4' },
// 	];

// 	const renderDay = (day: Date, selectedDays: Date[], pickersDayProps: PickersDayProps<Date>) => {
// 		const event = day;
// 		const hasEvent = !!event;

// 		return (
// 			<Box position="relative">
// 				<Badge
// 					color="primary"
// 					variant="dot"
// 					invisible={!hasEvent}
// 					anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
// 				>
// 					<Box
// 						component="div"
// 						// bgcolor={dayInCurrentMonth ? 'transparent' : 'grey.300'}
// 						borderRadius="50%"
// 						width={28}
// 						height={28}
// 						display="flex"
// 						justifyContent="center"
// 						alignItems="center"
// 						fontSize="body1.fontSize"
// 						style={{ cursor: 'pointer' }}
// 					>
// 						{date.getDate()}
// 					</Box>
// 				</Badge>
// 				{hasEvent && (
// 					<Box
// 						component="div"
// 						position="absolute"
// 						top={-20}
// 						left="50%"
// 						// transform="translateX(-50%)"
// 						bgcolor="white"
// 						color="primary.contrastText"
// 						borderRadius={4}
// 						boxShadow={1}
// 						p={1}
// 						zIndex={1}
// 					>
// 						{event?.label}
// 					</Box>
// 				)}
// 			</Box>
// 		);
// 	};

// 	return (
// 		<StaticDatePicker
// 			value={new Date()}
// 			onChange={() => { } }
// 			componentsProps={{
// 				actionBar: {
// 					actions: ['today']
// 				}
// 			}}
// 			// renderInput={function (props: TextFieldProps): React.ReactElement<any, string | React.JSXElementConstructor<any>> {
// 			// 	throw new Error('Function not implemented.');
// 			// } }			
// 			renderDay={renderDay} 
// 			renderInput={function (props: TextFieldProps): React.ReactElement<any, string | React.JSXElementConstructor<any>> {
// 				throw new Error('Function not implemented.');
// 			} }		/>
// 	);
// }

// export default CalendarWithBadges;