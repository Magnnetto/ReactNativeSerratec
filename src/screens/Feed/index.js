import React from 'react';
import { View, FlatList, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import options from '../../../assets/options.png';
import like from '../../../assets/like.png';
import comment from '../../../assets/comment.png';
import send from '../../../assets/send.png';
import save from '../../../assets/save.png';

function Feed() {

    const posts = [
        {
            id: '1',
            author: 'sylvana.correventos',
            picture_url: 'https://cdn.mos.cms.futurecdn.net/fNJDC9SFkp78zC22Su7LWo-1200-80.jpg',
            like: '147',
            description: 'E eu vou dar a todos vocês... liberdade!',
            hashtags: '#Indigno #EraUmaVezUmLich #CarcereiroNuncaCritiquei',
            place: 'Coroa de Gelo'
        },

        {
            id: '2',
            author: 'illidan.tempesfuria',
            picture_url: 'https://blizzardwatch.com/wp-content/uploads/2017/09/Smug-Illidan-Header-WoW.png',
            like: '5.982',
            description: 'Você não está preparada........',
            hashtags: '#EssesElfos #PorTeldrassil',
            place: 'Argus'
        },

        {
            id: '3',
            author: 'rainha.azsharah',
            picture_url: 'https://pbs.twimg.com/media/EGTzULuU8AAnAGu.png',
            like: '109.233.662',
            description: 'HAHahahauhushuahssksappaposasasas',
            hashtags: '#BERRO #Azeroth_eh_uó',
            place: 'Palácio Eterno'
        },

        
    ]

    function renderItem({ item: post }) {
        return (
            <View style={styles.post}>
                <View style={styles.postHeader}>
                    <View style={styles.userInfo}>
                        <Text style={styles.author}>{post.author}</Text>
                        <Text style={styles.place}>{post.place}</Text>
                    </View>
                    <View style={styles.postOptions}>
                        <TouchableOpacity>
                            <Image source={options} />
                        </TouchableOpacity>
                    </View>

                </View>
                <View>
                    <View>
                        <Image style={styles.picture_url} source={{ uri: post.picture_url }} />
                    </View>
                </View>

                <View style={styles.footer}>
                <View style={styles.actions}>
                <View style={styles.leftActions}>
                    <TouchableOpacity style={styles.action}>
                        <Image source={like} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action}>
                        <Image source={comment} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={send} />
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity>
                        <Image source={save} />
                    </TouchableOpacity>
                </View>

                </View>
               
                <View>
                    <Text style={styles.like}>{post.like} likes </Text>
                    <Text style={styles.hashtags}>{post.hashtags}</Text>
                    <Text style={styles.comment}>{post.description}</Text>
                    
                </View>

                </View>
            </View>
        )
    }

    return (
        <View>
            <FlatList
            data={posts}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    post: {
        marginVertical: 15
    },

    postHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: 'center',
        marginBottom: 10
    },
   
    postOptions: {},
    
    userInfo: {},
    
    author: {
        fontSize: 14,
        color: '#000',
        fontWeight: 'bold'
    },
   
    place: {
        fontSize: 12,
        color: '#666'
    },
   
    picture_url: {
        width: '100%',
        height: 400
    },

    footer: {
        paddingHorizontal: 15
    },
   
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15
    },

    action: {
        marginRight: 8
    },
   
    leftActions: {
        flexDirection: 'row',

    },

    like: {
        fontWeight: 'bold',
        fontSize: 12
    },

    hashtags: {
        color: '#002D5E'
    },

    description: {
        color: '#000',
        lineHeight: 18
    }

})

export default Feed; 