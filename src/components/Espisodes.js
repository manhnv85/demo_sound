import React, {Component} from 'react';

import {
    View, Text, StyleSheet,TouchableWithoutFeedback, Image
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

class Espisodes extends Component{

    renderEspisodes(){
        //console.log("this.props.episodes", this.props.episodes);
        const res = this.props.episodes.map((item, i) => {
            const img = item.image == null ? 'https://static.tvmaze.com/uploads/images/medium_portrait/78/195988.jpg' : item.image.medium;
            return (
                <View style={styles.video} key={i}>
                    <View style={styles.videoEspisode}>
                        <Image style={styles.image} source={{uri: img}}>
                            <View>
                                <TouchableWithoutFeedback>
                                    <View style={styles.iconPlay}>
                                        <Icon
                                            style={styles.iconPlay}
                                            name="play-circle"
                                            size={30}
                                            color="white"
                                        />
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </Image>
                        <View>
                            <Text>{item.number}. {item.name}</Text>
                            <Text>{item.runtime}</Text>
                        </View>
                    </View>
                    <Text style={styles.summary}>{item.summary}</Text>
                </View>
            )
        })
        return res;
    }
    render(){
        //console.log("ssss", this.renderEspisodes());
        return(
            <View style={styles.container}>
            {this.renderEspisodes()}
            </View>
        )
    }
}

export default Espisodes;


const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 80
    }
})
