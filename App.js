import React, { Component } from 'react';
import { Animated, StyleSheet, View, PanResponder } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
    },
    ball: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#F00',
    },
});

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            ball: new Animated.ValueXY({ x: 0, y: 0 }),
        };

        const { ball } = this.state;

        this._panResponder = PanResponder.create({
            onMoveShouldSetPanResponder: () => true,

            onPanResponderGrant: (e, gestureState) => {
                ball.setOffset({
                    x: ball.x._value,
                    y: ball.y._value,
                });

                ball.setValue({ x: 0, y: 0 });
            },

            onPanResponderMove: Animated.event(
                [
                    null,
                    {
                        dx: ball.x,
                        dy: ball.y,
                    },
                ],
                {
                    listener: (e, gestureState) => {
                        console.log(gestureState);
                    },
                }
            ),

            onPanResponderRelease: () => {
                ball.flattenOffset();
            },
        });
    }

    render() {
        const { ball } = this.state;

        return (
            <View style={styles.container}>
                <Animated.View
                    {...this._panResponder.panHandlers}
                    style={[
                        styles.ball,
                        {
                            transform: [
                                { translateX: ball.x },
                                { translateY: ball.y },
                            ],
                        },
                    ]}
                />
            </View>
        );
    }
}
