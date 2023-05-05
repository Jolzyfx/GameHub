import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'


const GameCardSkeleton = () => {
  return (
    <Card width='215px' borderRadius={15}>
      <Skeleton height="200px"/>
      <CardBody>
        <SkeletonText/>
      </CardBody>
    </Card>
  )
}

export default GameCardSkeleton