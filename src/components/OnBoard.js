import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Image, Text, View, StatusBar, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import appColors from '../../assets/colors/colors';

const data = [
    {
      title: 'Order',
      text: 'Description. Say something cool',
      image: require('../../assets/images/OnBording1.png'),
      bg: '#59b2ab',
    },
    {
      title: 'Pay',
      text: 'Other cool stuff',
      image: require('../../assets/images/OnBording2.png'),
      bg: '#febe29',
    },
    {
      title: 'Delivery',
      text: "I'm already out of descriptions Lorem ipsum bla bla bla",
      image: require('../../assets/images/OnBording3.png'),
      bg: '#22bcb5',
    },
  ];

const OnBoard = (props) => {
    const renderItem = ({item}) => {
        return (
            <View style={styles.slide}>
                <Image source={item.image} style={styles.image} />
                <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.text}>{item.text}</Text>
                </View>
            </View>
        );
    };
    
    const keyExtractor = (item) => item.title;

    const renderDoneButton = () => {
        // return (
        //     <LinearGradient
        //         colors={'#8A809F', '#6E51AC'}
        //         style={styles.doneButtonWrapper}
        //     >
        //         <Text style={styles.doneButtonText}>Done</Text>
        //     </LinearGradient>
        // );
        return(
            <View style={styles.rightTextWrap}>
                <Text style={styles.rightText}>Done</Text>
            </View>
        );
    };

    const renderNextButton = () => {
        return(
            <View style={styles.rightTextWrap}>
                <Text style={styles.rightText}>Next</Text>
            </View>
        );
    };

    const renderPrevButton = () => {
        return(
            <View style={styles.leftTextWrap}>
                <Text style={styles.leftText}>Prev</Text>
            </View>
        );
    };

    const handleDone = () => {
        props.handleDone();
    };

    return(
        <View style={{flex: 1}}>
            <StatusBar translucent backgroundColor="transparent" />
            <AppIntroSlider
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                data={data}
                renderDoneButton={renderDoneButton}
                renderNextButton={renderNextButton}
                renderPrevButton={renderPrevButton}
                showPrevButton
                dotStyle={styles.dotStyle}
                activeDotStyle={styles.activeDotStyle}
                onDone={handleDone}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    slide: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: appColors.white,
    },
    image: {
      marginVertical: 60,
    },
    title: {
        fontSize: 24,
        color: appColors.black,
        textAlign: 'center',
        fontFamily: 'Roboto-Bold',
        marginHorizontal: 60,
    },
    text: {
        fontSize: 14,
        color: appColors.grey,
        textAlign: 'center',
        fontFamily: 'Roboto-Medium',
        marginHorizontal: 60,
        marginTop: 20
    },
    rightTextWrap: {
        width: 40,
        height: 40,
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightText: {
        color: appColors.purple,
        fontFamily: 'Roboto-Medium',
        fontSize: 14,
    },
    leftTextWrap: {
        width: 40,
        height: 40,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    leftText: {
        color: appColors.purple,
        fontFamily: 'Roboto-Medium',
        fontSize: 14,
    },
    dotStyle: {
        backgroundColor: appColors.purpleFade,

    },
    activeDotStyle: {
        backgroundColor: appColors.purple,
    },
    doneButtonWrapper: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    doneButtonText: {
        fontSize: 18,
        fontFamily: 'Roboto-Medium',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
});

export default OnBoard;