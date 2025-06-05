import {View, Text, FlatList, Button} from 'react-native';
import {useQuery, useMutation} from '@tanstack/react-query';
import {createPost, fetchPosts} from '../services/post';

export default function HomeScreen() {
  const {data, isLoading, error} = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      console.log('Post created!');
    },
  });

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading posts</Text>;

  return (
    <View style={{flex: 1, backgroundColor: 'tomato'}}>
      <Button
        title="Create Post"
        onPress={() =>
          mutation.mutate({
            title: 'New Post',
            body: 'This is a post body',
          })
        }
      />
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <Text>{item.title}</Text>}
      />
    </View>
  );
}
