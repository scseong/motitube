import { addComment, getComments } from '../api/comment';
import { useQueryClient, useQuery, useMutation } from 'react-query';

export default function useComment() {
  const queryClient = useQueryClient();

  const { data: comments = [] } = useQuery(['comments'], getComments);

  const createComment = useMutation({
    mutationFn: addComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] });
    }
  });

  return { comments, createComment };
}
