import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const ROWS = new Array(19).fill(null).map((_, i) => i);
const COLUMNS = new Array(15).fill(null).map((_, i) => i);

export const Board = () => {
  return (
    <View style={styles.container}>
      <View style={styles.board}>
        {COLUMNS.map((column) => (
          <View key={`${column}`}>
            {ROWS.map((row) => (
              <Cell key={`${row}`} row={row} column={column} />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

export const Cell = ({row, column}: {row: number; column: number}) => {
  const backgroundColor = (row + column) % 2 === 0 ? 'darkgrey' : 'lightgrey';
  return (
    <View style={[styles.cell, {backgroundColor}]}>
      {/* <Text style={styles.sectionTitle}>{`${row}-${column}`}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
  },
  board: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
  },
  cell: {
    flex: 1,
    aspectRatio: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
});
