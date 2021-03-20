import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Animated,
  FlatList,
  Easing,
  TouchableOpacity,
  I18nManager,
} from 'react-native';

// import {useCalendar} from '../DatePicker';

const CalendarContext = createContext();

const useCalendar = () => {
  const contextValue = useContext(CalendarContext);
  return contextValue;
};

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export const TimeScroller = ({data, onChange}) => {
  // const {options, utils} = useCalendar();
  const [itemSize, setItemSize] = useState(0);
  // const style = styles(options);
  const style = styles();
  const scrollAnimatedValue = useRef(new Animated.Value(0)).current;
  const scrollListener = useRef(null);
  const active = useRef(0);
  data = ['', '', ...data, '', ''];

  useEffect(() => {
    scrollListener.current && clearInterval(scrollListener.current);
    scrollListener.current = scrollAnimatedValue.addListener(
      ({value}) => (active.current = value),
    );

    return () => {
      clearInterval(scrollListener.current);
    };
  }, [scrollAnimatedValue]);

  const changeItemWidth = ({nativeEvent}) => {
    const {width} = nativeEvent.layout;
    !itemSize && setItemSize(width / 5);
  };

  const renderItem = ({item, index}) => {
    const makeAnimated = (a, b, c) => {
      return {
        inputRange: [...data.map((_, i) => i * itemSize)],
        outputRange: [
          ...data.map((_, i) => {
            const center = i + 2;
            if (center === index) {
              return a;
            } else if (center + 1 === index || center - 1 === index) {
              return b;
            } else {
              return c;
            }
          }),
        ],
      };
    };

    return (
      <Animated.View
        style={[
          {
            width: itemSize,
            opacity: scrollAnimatedValue.interpolate(makeAnimated(1, 0.6, 0.3)),
            transform: [
              {
                scale: scrollAnimatedValue.interpolate(
                  makeAnimated(1.2, 0.9, 0.8),
                ),
              },
              {
                scaleX: I18nManager.isRTL ? -1 : 1,
              },
            ],
          },
          style.listItem,
        ]}>
        <View
          style={{
            // borderStyle: 'solid',
            height: 20,
            borderLeftWidth: 3,
            marginBottom: 5,
          }}
        />
        <Text style={style.listItemText}>
          {/*{utils.toPersianNumber(String(item).length === 1 ? '0' + item : item)}*/}
          {item}
        </Text>
      </Animated.View>
    );
  };

  return (
    <View style={style.row} onLayout={changeItemWidth}>
      <AnimatedFlatList
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
        snapToInterval={itemSize}
        decelerationRate={'fast'}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollAnimatedValue}}}],
          {
            useNativeDriver: true,
          },
        )}
        data={I18nManager.isRTL ? data.reverse() : data}
        onMomentumScrollEnd={() => {
          const index = Math.round(active.current / itemSize);
          onChange(data[index + 2]);
        }}
        keyExtractor={(_, i) => String(i)}
        renderItem={renderItem}
        inverted={I18nManager.isRTL}
        contentContainerStyle={
          I18nManager.isRTL && {
            transform: [
              {
                scaleX: -1,
              },
            ],
          }
        }
      />
    </View>
  );
};

const styles = theme =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      right: 0,
      backgroundColor: '#fff',
      borderRadius: 10,
      flexDirection: 'column',
      justifyContent: 'center',
      zIndex: 999,
    },
    row: {
      flexDirection: 'column',
      alignItems: 'center',
      marginVertical: 5,
    },
    title: {
      // fontSize: theme.textHeaderFontSize,
      // color: theme.mainColor,
      // fontFamily: theme.headerFont,
    },
    listItem: {
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
    },
    listItemText: {
      fontSize: 12,
      // color: theme.textDefaultColor,
      // fontFamily: theme.defaultFont,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 15,
    },
    button: {
      paddingVertical: 10,
      paddingHorizontal: 25,
      borderRadius: 8,
      // backgroundColor: theme.mainColor,
      margin: 8,
    },
    btnText: {
      // fontSize: theme.textFontSize,
      // color: theme.selectedTextColor,
      // fontFamily: theme.defaultFont,
    },
    cancelButton: {
      // backgroundColor: theme.textSecondaryColor,
    },
  });
