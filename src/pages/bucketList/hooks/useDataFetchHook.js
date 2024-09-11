import useSWRImmutable from 'swr/immutable'
import { getRequest } from '@/api/apiClient.js'

// url
import { BUCKETLIST_URL } from '@api/keys/bucketList/url.js'

export const useBucketListSwrHook = () => {
  const { data, error } = useSWRImmutable(BUCKETLIST_URL, getRequest)

  return {
    bucketList: data,
    isError: error
  }
}
